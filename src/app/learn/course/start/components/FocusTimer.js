"use client";
import { useState, useEffect, useCallback } from "react";

export default function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10-min timer
  const [isBreak, setIsBreak] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleTimerEnd = useCallback((wasBreak) => {
    if (!wasBreak) {
      setIsBreak(true);
      setIsLocked(true);
      setTimeLeft(10); // 10-second break
    } else {
      setIsBreak(false);
      setIsLocked(false);
      setTimeLeft(10 * 60); // Restart focus timer
    }
    localStorage.setItem("focus-timer-timeLeft", wasBreak ? 600 : 10);
    localStorage.setItem("focus-timer-isBreak", !wasBreak);
    localStorage.setItem("focus-timer-isLocked", !wasBreak);
    localStorage.setItem("focus-timer-startTime", Date.now());
  }, []);

  useEffect(() => {
    const savedTime = localStorage.getItem("focus-timer-timeLeft");
    const savedStartTime = localStorage.getItem("focus-timer-startTime");
    const savedIsBreak = localStorage.getItem("focus-timer-isBreak") === "true";
    const savedIsLocked =
      localStorage.getItem("focus-timer-isLocked") === "true";

    if (savedTime && savedStartTime) {
      const elapsedTime = Math.floor(
        (Date.now() - parseInt(savedStartTime)) / 1000
      );
      const remainingTime = Math.max(0, parseInt(savedTime) - elapsedTime);

      setTimeLeft(remainingTime);
      setIsBreak(savedIsBreak);
      setIsLocked(savedIsLocked);

      if (remainingTime === 0) {
        handleTimerEnd(savedIsBreak);
      }
    } else {
      localStorage.setItem("focus-timer-startTime", Date.now());
      localStorage.setItem("focus-timer-timeLeft", timeLeft);
    }
  }, [handleTimerEnd, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimerEnd(isBreak);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        localStorage.setItem("focus-timer-timeLeft", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isBreak, handleTimerEnd]);

  return (
    <div className="relative">
      {isLocked && (
        <div className="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-50">
          <h1 className="text-white text-3xl sm:text-4xl font-semibold">
            Break Time! Relax for{" "}
            <span className="text-blue-400">{timeLeft}</span> seconds.
          </h1>
        </div>
      )}

      <div className="fixed lg:bottom-28 bottom-[104px] right-7 w-17 h-17 sm:w-17 sm:h-17 rounded-full overflow-hidden border-2 border-white shadow-lg">
        {/* You can place a logo or image here if needed */}
      </div>
    </div>
  );
}
