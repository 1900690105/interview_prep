import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, HelpCircle } from "lucide-react";

function Precourse({ pre, inputValue }) {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <>
      {/* Skip to content link for screen reader and keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-blue-700 text-white p-2 z-50"
      >
        Skip to main content
      </a>

      {/* Visually hidden live region for dynamic announcements */}
      <div
        className="sr-only"
        aria-live="polite"
        role="status"
        id="live-region"
      >
        {expandedCategory !== null
          ? `Expanded ${pre?.essential_precourse_knowledge?.[expandedCategory]?.category}`
          : "All categories collapsed"}
      </div>

      <div
        className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-none shadow-md"
        role="main"
        id="main-content"
      >
        <header className="mb-8 text-center" role="banner">
          <h1 className="text-3xl font-bold text-blue-700 mb-2" id="main-title">
            Things to know before {inputValue} Preparation
          </h1>
          <p className="text-gray-600">
            Ensure you're ready for your {inputValue} journey
          </p>
        </header>

        <section className="mb-8" aria-labelledby="essential-knowledge-heading">
          <div className="bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-xl font-bold" id="essential-knowledge-heading">
              Essential Precourse Knowledge
            </h2>
            <div className="text-blue-200 text-sm">
              Review these areas before starting
            </div>
          </div>

          <div className="bg-white rounded-b-lg shadow-sm">
            {pre?.essential_precourse_knowledge?.map((section, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div
                  className="p-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleCategory(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleCategory(index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedCategory === index}
                  aria-controls={`category-content-${index}`}
                  aria-label={`Toggle ${section.category} section`}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {section.category}
                  </span>
                  {expandedCategory === index ? (
                    <ChevronUp
                      className="text-blue-700"
                      size={20}
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="text-blue-700"
                      size={20}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {expandedCategory === index && (
                  <div
                    id={`category-content-${index}`}
                    className="p-4 pt-0 bg-gray-50"
                    role="region"
                    aria-labelledby={`category-heading-${index}`}
                  >
                    <span id={`category-heading-${index}`} className="sr-only">
                      {section.category} details
                    </span>
                    <ul
                      className="list-none pl-6"
                      aria-label={`Items for ${section.category}`}
                    >
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="mb-2 flex items-start"
                          role="listitem"
                        >
                          <CheckCircle
                            className="text-green-500 mr-2 mt-1 flex-shrink-0"
                            size={16}
                            aria-hidden="true"
                          />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8" aria-labelledby="self-reflection-heading">
          <div
            className="bg-purple-700 text-white p-4 rounded-t-lg flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={toggleQuestions}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleQuestions();
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={showQuestions}
            aria-controls="questions-content"
            aria-label="Toggle self-reflection questions section"
          >
            <h2 className="text-xl font-bold" id="self-reflection-heading">
              Self-Reflection Questions
            </h2>
            {showQuestions ? (
              <ChevronUp className="text-white" size={20} aria-hidden="true" />
            ) : (
              <ChevronDown
                className="text-white"
                size={20}
                aria-hidden="true"
              />
            )}
          </div>

          {showQuestions && (
            <div
              id="questions-content"
              className="bg-white p-5 rounded-b-lg shadow-sm"
              role="region"
              aria-labelledby="self-reflection-heading"
            >
              <ul
                className="list-none"
                aria-label="List of self-reflection questions"
              >
                {pre?.questions_to_ask_yourself?.map((question, index) => (
                  <li
                    key={index}
                    className="mb-3 flex items-start"
                    role="listitem"
                  >
                    <HelpCircle
                      className="text-purple-500 mr-2 mt-1 flex-shrink-0"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{question}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Precourse;
