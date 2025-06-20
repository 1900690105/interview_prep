// completed but i will make it change
import React, { useState, useEffect, useRef } from "react";
import {
  Timer,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import AptitudeExamPage from "./Aptitude";
import { Button } from "@/components/ui/button";

const AptitudeExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState("");
  const [exam, setExam] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [examStatus, setExamStatus] = useState("ongoing");
  const [showSidebar, setShowSidebar] = useState(true);
  const [warnings, setWarnings] = useState(1);

  useEffect(() => {
    if (timeLeft > 0 && examStatus === "ongoing") {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && examStatus === "ongoing") {
      setExamStatus("completed");
    }
  }, [timeLeft, examStatus]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(userAnswers).forEach(([index, answer]) => {
      if (answer === questions[index].answer) correct++;
    });
    return {
      score: correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    };
  };

  const renderResults = () => {
    const score = calculateScore();
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Exam Results</h2>
        <div className="mb-6">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {score.percentage}%
          </div>
          <div className="text-gray-600">
            You got {score.score} out of {score.total} questions correct
          </div>
        </div>
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={index} className="border-b pb-4">
              <div className="flex items-start gap-2">
                {userAnswers[index] === q.answer ? (
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                ) : (
                  <AlertCircle className="text-red-500 mt-1" size={20} />
                )}
                <div>
                  <div className="font-medium">{q.question}</div>
                  <div className="text-sm mt-2">
                    Your answer:{" "}
                    <span
                      className={
                        userAnswers[index] === q.answer
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {userAnswers[index] || "Not answered"}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Correct answer: {q.answer}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {q.explanation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const ques = JSON.parse(localStorage.getItem("aptitudeexam"));
    if (ques) {
      setQuestions(ques);
      setExam(1);
    }
  }, []);

  useEffect(() => {
    // if (examStatus === ) {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert(
          "You have switched tabs! Please stay on this page while the timer is running."
        );
      }
    };
    const handleResize = () => {
      alert(
        "Screen size changed! Split screen use is not allowed while the timer is running."
      );
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
    // }
  }, []);

  const handleQuit = () => {
    localStorage.removeItem("aptitudeexam");
    window.location.reload();
  };
  return (
    <>
      {exam ? (
        <div
          className="flex min-h-screen bg-gray-50"
          role="application"
          aria-label="Online Aptitude Exam Interface"
        >
          {/* Sidebar */}
          <aside
            className={`${
              showSidebar ? "w-64" : "w-0"
            } bg-blue-800 text-white transition-all duration-300 overflow-hidden`}
            aria-label="Question Navigation Panel"
          >
            <div className="p-4">
              {/* Timer */}
              <div
                className="mb-6 flex items-center gap-2"
                aria-live="polite"
                aria-atomic="true"
              >
                <Timer size={20} aria-hidden />
                <span
                  className="font-bold"
                  aria-label={`Time left ${formatTime(timeLeft)}`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>

              {/* Question Navigation */}
              <nav
                className="grid grid-cols-3 gap-2"
                aria-label="Question Navigator"
              >
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    aria-label={`Go to question ${index + 1}`}
                    aria-current={
                      currentQuestion === index ? "true" : undefined
                    }
                    className={`w-full p-2 text-center rounded focus:outline-none focus:ring-2 focus:ring-white ${
                      currentQuestion === index
                        ? "bg-white text-blue-800"
                        : userAnswers[index]
                        ? "bg-blue-600"
                        : "bg-blue-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </nav>

              {/* Quit Button */}
              <div className="flex justify-end mt-5">
                <Button
                  onClick={handleQuit}
                  className="bg-red-500 hover:bg-red-700 font-bold"
                  aria-label="Quit Exam"
                >
                  Quit Exam
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6" aria-labelledby="main-content-heading">
            {/* Sidebar Toggle */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="mb-4 p-2 bg-blue-800 text-white rounded-lg"
              aria-label={
                showSidebar ? "Hide question panel" : "Show question panel"
              }
            >
              {showSidebar ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>

            {examStatus === "ongoing" ? (
              <section
                className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto"
                role="region"
                aria-labelledby="main-content-heading"
              >
                <header>
                  <p className="text-sm text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                  <h2
                    id="main-content-heading"
                    className="text-xl font-bold text-blue-800 mt-1"
                  >
                    {questions[currentQuestion].type}
                  </h2>
                </header>

                <div className="my-6">
                  <p
                    className="text-gray-800 whitespace-pre-line select-none"
                    aria-live="polite"
                  >
                    {questions[currentQuestion].question}
                  </p>
                </div>

                {/* Options */}
                <fieldset className="space-y-4" aria-label="Answer choices">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={`w-full p-4 text-left rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        userAnswers[currentQuestion] === option
                          ? "bg-blue-100 border-blue-500"
                          : "hover:bg-gray-50 border-gray-200"
                      }`}
                      aria-pressed={userAnswers[currentQuestion] === option}
                      aria-label={`Answer option ${index + 1}: ${option}`}
                    >
                      {option}
                    </button>
                  ))}
                </fieldset>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() =>
                      setCurrentQuestion(Math.max(0, currentQuestion - 1))
                    }
                    disabled={currentQuestion === 0}
                    className="px-4 py-2 bg-blue-800 text-white rounded-lg disabled:opacity-50"
                    aria-label="Go to previous question"
                  >
                    Previous
                  </button>

                  {currentQuestion === questions.length - 1 ? (
                    <button
                      onClick={() => setExamStatus("completed")}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg"
                      aria-label="Submit Exam"
                    >
                      Submit Exam
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        setCurrentQuestion(
                          Math.min(questions.length - 1, currentQuestion + 1)
                        )
                      }
                      className="px-4 py-2 bg-blue-800 text-white rounded-lg"
                      aria-label="Go to next question"
                    >
                      Next
                    </button>
                  )}
                </div>
              </section>
            ) : (
              <section role="region" aria-label="Exam Results">
                {renderResults()}
                <Button
                  onClick={() => {
                    localStorage.removeItem("aptitudeexam");
                    window.location.reload();
                  }}
                  aria-label="Restart Exam"
                >
                  Restart
                </Button>
              </section>
            )}
          </main>
        </div>
      ) : (
        <AptitudeExamPage
          setExamStatus={setExamStatus}
          setQuestions={setQuestions}
          setExam={setExam}
        />
      )}
    </>
  );
};

export default AptitudeExam;
