import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Code,
  Lightbulb,
  MessageSquare,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function CodingRoundFeedback({ feedback }) {
  const [showIdealSolution, setShowIdealSolution] = useState(false);

  return (
    <div
      className="max-w-4xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-lg"
      role="region"
      aria-label="Coding feedback summary"
    >
      {/* Question */}
      <section
        className="bg-blue-50 p-6 rounded-lg border border-blue-200"
        aria-labelledby="question-heading"
      >
        <h2
          id="question-heading"
          className="text-xl font-semibold text-blue-900 mb-2"
        >
          Question
        </h2>
        <p className="text-blue-800">{feedback.question}</p>
      </section>

      {/* Overall Feedback */}
      <section
        role="region"
        aria-labelledby="feedback-title"
        className="bg-white border border-blue-200 rounded-lg p-4"
      >
        <div className="flex items-start gap-2">
          <MessageSquare className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <div>
            <h2
              id="feedback-title"
              className="text-blue-900 font-semibold text-lg"
            >
              Overall Feedback
            </h2>
            <p className="text-gray-700 mt-2">{feedback.feedback}</p>
          </div>
        </div>
      </section>

      {/* Mistakes Section */}
      {feedback.my_mistakes.length > 0 && (
        <section
          className="bg-red-50 p-6 rounded-lg border border-red-200"
          aria-labelledby="mistakes-heading"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
            <h3
              id="mistakes-heading"
              className="text-lg font-semibold text-red-900"
            >
              Areas for Improvement
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {feedback.my_mistakes.map((mistake, index) => (
              <li key={index} className="text-red-700">
                {mistake}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Improvements Section */}
      <section
        className="bg-green-50 p-6 rounded-lg border border-green-200"
        aria-labelledby="improvements-heading"
      >
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-green-600" aria-hidden="true" />
          <h3
            id="improvements-heading"
            className="text-lg font-semibold text-green-900"
          >
            Suggested Improvements
          </h3>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {feedback.improvements.map((improvement, index) => (
            <li key={index} className="text-green-700">
              {improvement}
            </li>
          ))}
        </ul>
      </section>

      {/* Ideal Solution */}
      <section
        className="bg-gray-50 p-6 rounded-lg border border-gray-200"
        aria-labelledby="ideal-solution-heading"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-gray-700" aria-hidden="true" />
            <h3
              id="ideal-solution-heading"
              className="text-lg font-semibold text-gray-900"
            >
              Ideal Solution
            </h3>
          </div>
          <button
            onClick={() => setShowIdealSolution(!showIdealSolution)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={showIdealSolution}
            aria-controls="ideal-solution-code"
          >
            {showIdealSolution ? "Hide Solution" : "Show Solution"}
          </button>
        </div>
        {showIdealSolution && (
          <pre
            id="ideal-solution-code"
            className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto"
            tabIndex={0}
            aria-label="Ideal code solution"
          >
            <code>
              {feedback.ideal_answer
                .replace("<precode>\n", "")
                .replace("\n</precode>", "")}
            </code>
          </pre>
        )}
      </section>

      {/* Success Indicator */}
      <section
        className="flex items-center justify-center gap-2 p-4 bg-green-50 rounded-lg border border-green-200"
        aria-live="polite"
      >
        <CheckCircle className="h-6 w-6 text-green-600" aria-hidden="true" />
        <p className="text-green-700 font-medium">
          Keep practicing! You're on the right track!
        </p>
      </section>
    </div>
  );
}

export default CodingRoundFeedback;
