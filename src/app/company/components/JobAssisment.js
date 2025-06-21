"use client";

import React, { useState, useEffect } from "react";
import { Camera, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function JobAssessment() {
  const [currentPhase, setCurrentPhase] = useState("profiling");
  const [timer, setTimer] = useState(300);
  const [cameraActive, setCameraActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const mcqQuestions = [
    {
      question: "Which of the following is NOT a feature of React.js?",
      options: [
        "Virtual DOM",
        "Two-way data binding",
        "Component-based architecture",
        "JSX syntax",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Coded Style Structures",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which data structure follows the LIFO principle?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      correctAnswer: 1,
    },
  ];

  useEffect(() => {
    let interval;
    if (currentPhase === "softskill" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      if (currentPhase === "softskill") {
        setCurrentPhase("hardskill");
      }
    }

    return () => clearInterval(interval);
  }, [currentPhase, timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handlePhaseChange = (phase) => {
    setCurrentPhase(phase);
    setSelectedAnswer(null);
    if (phase === "softskill") {
      setTimer(300);
    }
  };

  const handleCameraToggle = () => {
    setCameraActive(!cameraActive);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < mcqQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="sr-only-focusable skip-link">
        Skip to main content
      </a>

      {/* Live Region for announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {liveRegionMessage}
      </div>

      {/* Mobile Header for Small Screens */}
      <header className="lg:hidden bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Job Assessment</h1>
        <nav aria-label="Assessment phases progress">
          <ul className="flex items-center space-x-2">
            {["profiling", "softskill", "hardskill"].map((phase, index) => (
              <li key={phase}>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    currentPhase === phase
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  role="status"
                  aria-label={`${index + 1}. ${phase} phase ${
                    currentPhase === phase ? "current" : ""
                  }`}
                >
                  {index + 1}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Sidebar Navigation */}
      <nav
        className="hidden lg:block w-64 bg-white shadow-md"
        aria-label="Main Assessment Navigation"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Job Assessment</h2>
          <p className="text-sm text-gray-500 mt-1">
            Complete all three phases
          </p>
        </div>

        <ul className="mt-6" role="tablist">
          {[
            { phase: "profiling", label: "Profiling" },
            { phase: "softskill", label: "Soft Skills" },
            { phase: "hardskill", label: "Hard Skills" },
          ].map((item) => (
            <li key={item.phase} role="presentation">
              <button
                id={`tab-${item.phase}`}
                role="tab"
                aria-selected={currentPhase === item.phase}
                aria-controls={`panel-${item.phase}`}
                tabIndex={currentPhase === item.phase ? 0 : -1}
                className={`w-full text-left p-4 border-l-4 ${
                  currentPhase === item.phase
                    ? "border-blue-500 bg-blue-50"
                    : "border-transparent"
                } cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center`}
                onClick={() => handlePhaseChange(item.phase)}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentPhase === item.phase
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  aria-hidden="true" // Decorative, information conveyed by text
                >
                  {["profiling", "softskill", "hardskill"].indexOf(item.phase) +
                    1}
                </div>
                <span className="ml-3 font-medium">{item.label}</span>
                {currentPhase === item.phase && (
                  <span className="sr-only">(current phase)</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="flex-1 p-4 lg:p-8 overflow-y-auto">
        {/* Profiling Phase */}
        {currentPhase === "profiling" && (
          <section
            id="panel-profiling"
            role="tabpanel"
            aria-labelledby="tab-profiling"
            className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto"
            tabIndex={0} // Ensure section is focusable for screen readers when visible
          >
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <form
              className="space-y-6"
              aria-describedby="profiling-form-description"
            >
              <p id="profiling-form-description" className="sr-only">
                Please fill out your personal information to proceed with the
                assessment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address{" "}
                  <span className="text-red-500" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              <div>
                <label
                  htmlFor="resumeUpload"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Resume/CV
                </label>
                <div
                  className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:bg-gray-50 transition-colors"
                  role="group"
                  aria-labelledby="resumeUpload"
                >
                  <p className="text-gray-500 mb-4">
                    Drag and drop your file here or
                  </p>
                  <input
                    type="file"
                    id="resumeUpload"
                    className="sr-only" // Hide visually but keep accessible
                    aria-describedby="resume-upload-description"
                  />
                  <label
                    htmlFor="resumeUpload"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer inline-block"
                    role="button" // Indicate it acts like a button
                  >
                    Browse files
                  </label>
                  <p id="resume-upload-description" className="sr-only">
                    Accepted file types include PDF, DOC, DOCX. Maximum file
                    size 5MB.
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit" // Changed to submit as it completes a form section
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent actual form submission for this example
                    handlePhaseChange("softskill");
                  }}
                >
                  Next: Soft Skills <ChevronRight className="ml-2" size={20} />
                  <span className="sr-only">
                    Proceed to Soft Skills assessment
                  </span>
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Soft Skills Phase */}
        {currentPhase === "softskill" && (
          <section
            id="panel-softskill"
            role="tabpanel"
            aria-labelledby="tab-softskill"
            className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto"
            tabIndex={0}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-xl font-semibold mb-4 sm:mb-0">
                Soft Skills Assessment
              </h2>
              <div className="flex items-center space-x-4">
                <div
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium"
                  role="timer"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  Time Remaining:{" "}
                  <span className="font-bold">{formatTime(timer)}</span>
                </div>
                <button
                  className={`p-2 rounded-full ${
                    cameraActive ? "bg-red-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={handleCameraToggle}
                  aria-pressed={cameraActive}
                  aria-label={
                    cameraActive ? "Deactivate camera" : "Activate camera"
                  }
                >
                  <Camera size={20} aria-hidden="true" />
                  <span className="sr-only">Toggle Camera</span>
                </button>
              </div>
            </div>

            {cameraActive && (
              <div
                className="mb-6 bg-black h-48 md:h-64 rounded-lg flex items-center justify-center"
                role="img"
                aria-label="Camera preview area"
              >
                <div className="text-white">Camera Preview (Simulated)</div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="challengingSituation"
                  className="font-medium mb-3 block"
                >
                  Tell us about a challenging situation at work and how you
                  handled it.
                </label>
                <textarea
                  id="challengingSituation"
                  className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe a challenging work situation, the actions you took, and the outcome..."
                  aria-describedby="challengingSituationHint"
                ></textarea>
                <p id="challengingSituationHint" className="sr-only">
                  Provide a detailed response about a difficult work situation,
                  your actions, and the resolution.
                </p>
              </div>

              <div>
                <label
                  htmlFor="prioritizeTasks"
                  className="font-medium mb-3 block"
                >
                  How do you prioritize tasks when you have multiple deadlines?
                </label>
                <textarea
                  id="prioritizeTasks"
                  className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Explain your approach to managing multiple priorities and meeting deadlines..."
                  aria-describedby="prioritizeTasksHint"
                ></textarea>
                <p id="prioritizeTasksHint" className="sr-only">
                  Explain your methods for organizing and prioritizing tasks
                  when faced with multiple deadlines.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                  onClick={() => handlePhaseChange("profiling")}
                >
                  <ChevronLeft className="mr-2" size={20} aria-hidden="true" />{" "}
                  Back: Profiling
                  <span className="sr-only">
                    Go back to the Profiling phase
                  </span>
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                  onClick={() => handlePhaseChange("hardskill")}
                >
                  Next: Hard Skills{" "}
                  <ChevronRight className="ml-2" size={20} aria-hidden="true" />
                  <span className="sr-only">
                    Proceed to Hard Skills assessment
                  </span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Hard Skills Phase */}
        {currentPhase === "hardskill" && (
          <section
            id="panel-hardskill"
            role="tabpanel"
            aria-labelledby="tab-hardskill"
            className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto"
            tabIndex={0}
          >
            <h2 className="text-xl font-semibold mb-6">
              Hard Skills Assessment
            </h2>

            <div className="mb-4 flex flex-col sm:flex-row justify-between items-center">
              <p
                className="text-sm font-medium text-gray-500 mb-2 sm:mb-0"
                aria-live="polite"
                aria-atomic="true"
              >
                Question {currentQuestion + 1} of {mcqQuestions.length}
              </p>
              <p className="text-sm font-medium text-blue-500">
                Time: No limit
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg mb-6">
              <h3 className="font-medium mb-4" id="current-question">
                {mcqQuestions[currentQuestion].question}
              </h3>
              <fieldset aria-labelledby="current-question">
                <legend className="sr-only">
                  Select an answer for the current question
                </legend>
                <div className="space-y-3">
                  {mcqQuestions[currentQuestion].options.map(
                    (option, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                          selectedAnswer === index
                            ? "bg-blue-100 border border-blue-300"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => handleAnswerSelect(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleAnswerSelect(index);
                          }
                        }}
                        role="radio"
                        aria-checked={selectedAnswer === index}
                        tabIndex={0} // Make div focusable
                      >
                        <input
                          type="radio"
                          id={`option-${index}`}
                          name="mcq-answer"
                          checked={selectedAnswer === index}
                          onChange={() => handleAnswerSelect(index)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 mr-3"
                          tabIndex={-1} // Hide from tab order, focus handled by parent div
                        />
                        <label
                          htmlFor={`option-${index}`}
                          className="text-gray-700 flex-1 cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </fieldset>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                  onClick={() => handlePhaseChange("softskill")}
                >
                  <ChevronLeft className="mr-2" size={20} aria-hidden="true" />{" "}
                  Soft Skills
                  <span className="sr-only">
                    Go back to the Soft Skills phase
                  </span>
                </button>
                <button
                  type="button"
                  disabled={currentQuestion === 0}
                  className={`px-6 py-3 border border-gray-300 text-gray-700 rounded-md ${
                    currentQuestion > 0
                      ? "hover:bg-gray-50"
                      : "opacity-50 cursor-not-allowed"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center`}
                  onClick={handlePrevQuestion}
                  aria-disabled={currentQuestion === 0}
                >
                  <ChevronLeft className="mr-2" size={20} aria-hidden="true" />{" "}
                  Previous
                  <span className="sr-only">Go to previous question</span>
                </button>
              </div>

              <div>
                {currentQuestion < mcqQuestions.length - 1 ? (
                  <button
                    type="button"
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                    onClick={handleNextQuestion}
                  >
                    Next{" "}
                    <ChevronRight
                      className="ml-2"
                      size={20}
                      aria-hidden="true"
                    />
                    <span className="sr-only">Go to next question</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
                  >
                    Submit Assessment{" "}
                    <CheckCircle2
                      className="ml-2"
                      size={20}
                      aria-hidden="true"
                    />
                    <span className="sr-only">
                      Submit the entire assessment
                    </span>
                  </button>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
