"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play, Send, Copy, RotateCcw } from "lucide-react";

const CodeEditor = ({
  code,
  setCode,
  isTimerRunning,
  onSubmit,
  currentQuestionIndex,
}) => {
  const textareaRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  // const handlePaste = (e) => {
  //   e.preventDefault();
  //   const text = e.clipboardData.getData("text");
  //   setCode(text);
  // };
  const handlePaste = (event) => {
    event.preventDefault();
    alert("Pasting is not allowed in this field!");
    // setIsTimerRunning(false);
  };
  const handleCopyCode = () => {
    if (textareaRef.current) {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setCode("");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the textarea and the timer is running
      if (textareaRef.current && !textareaRef.current.contains(event.target)) {
        if (isTimerRunning) {
          alert("You clicked outside the textarea while the timer is running!");
          // setIsTimerRunning(false);
        }
      }
    };

    // Add event listener for detecting clicks outside the textarea
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isTimerRunning]);
  return (
    <section
      className="bg-gray-900 p-6 rounded-lg shadow-lg invisible md:visible lg:visible"
      ref={textareaRef}
      aria-labelledby="code-editor-heading"
      role="region"
    >
      {/* Editor Header */}
      <header className="flex items-center justify-between mb-4 text-gray-300 border-b border-gray-700 pb-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 id="code-editor-heading" className="ml-4 text-sm font-medium">
            Code Editor
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopyCode}
            className="p-1.5 hover:bg-gray-700 rounded transition-colors duration-200 text-gray-400 hover:text-gray-200"
            aria-label="Copy code to clipboard"
            title="Copy code"
          >
            <Copy className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 hover:bg-gray-700 rounded transition-colors duration-200 text-gray-400 hover:text-gray-200"
            aria-label="Reset the editor"
            title="Reset editor"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Editor Body */}
      <div className="relative">
        {/* Line Numbers */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 bg-gray-800 rounded-l-lg text-gray-500 text-sm font-mono p-4 select-none"
          aria-hidden="true"
        >
          {code.split("\n").map((_, i) => (
            <div key={i} className="text-right">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code Input Area */}
        <label htmlFor="code-editor-textarea" className="sr-only">
          Code Editor Textarea
        </label>
        <textarea
          id="code-editor-textarea"
          ref={textareaRef}
          value={code}
          onPaste={handlePaste}
          onChange={(e) => setCode(e.target.value)}
          disabled={!isTimerRunning}
          aria-describedby="code-instructions"
          aria-label="Code input area"
          className={`
        w-full h-64 p-4 pl-16 font-mono text-sm
        bg-gray-800 text-gray-100
        border border-gray-700 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500
        resize-none
        ${!isTimerRunning ? "cursor-not-allowed opacity-75" : ""}
      `}
          placeholder={
            isTimerRunning
              ? "Write your code here..."
              : "Start the timer to begin coding..."
          }
          spellCheck="false"
        />

        {/* Copy Notification */}
        {isCopied && (
          <div
            className="absolute top-2 right-2 bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm"
            role="status"
            aria-live="polite"
          >
            Copied to clipboard!
          </div>
        )}
      </div>

      {/* Editor Footer */}
      <footer className="mt-4 flex justify-between items-center">
        <div id="code-instructions" className="text-sm text-gray-400">
          {isTimerRunning ? (
            <span className="flex items-center">
              <Play
                className="w-4 h-4 mr-1 text-green-500"
                aria-hidden="true"
              />
              Timer running
            </span>
          ) : (
            <span>Timer not started</span>
          )}
        </div>
        <button
          onClick={() => onSubmit(currentQuestionIndex)}
          disabled={!isTimerRunning}
          className={`
        flex items-center space-x-2
        px-4 py-2 rounded-md
        font-medium
        transition-colors duration-200
        ${
          isTimerRunning && code
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }
      `}
          aria-label="Submit your code"
        >
          <span>Submit</span>
          <Send className="w-4 h-4" aria-hidden="true" />
        </button>
      </footer>
    </section>
  );
};

export default CodeEditor;
