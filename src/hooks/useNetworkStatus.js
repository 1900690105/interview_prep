// hooks/useNetworkStatus.js
"use client";

import { useEffect, useState } from "react";

export default function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [isConnectionWeak, setIsConnectionWeak] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const checkConnection = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (connection) {
        const effectiveType = connection.effectiveType;
        setIsConnectionWeak(["slow-2g", "2g", "3g"].includes(effectiveType));
      }
    };

    setIsOnline(navigator.onLine);
    checkConnection();

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      connection.addEventListener("change", checkConnection);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (connection) {
        connection.removeEventListener("change", checkConnection);
      }
    };
  }, []);

  return { isOnline, isConnectionWeak };
}
