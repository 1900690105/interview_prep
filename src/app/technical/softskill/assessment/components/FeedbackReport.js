"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const FeedbackReport = ({ feedback }) => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card
        className="w-full bg-blue-50 shadow-lg"
        role="region"
        aria-label="Skill Assessment Report"
      >
        <CardHeader className="bg-blue-600 text-white p-4">
          <CardTitle className="text-2xl font-bold" id="skill-title">
            Skill Assessment: {feedback.skill}
          </CardTitle>
          <p className="text-sm text-blue-100" aria-describedby="skill-title">
            Assessment Level: {feedback.skillLevel}
          </p>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Assessment Overview */}
          <section aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="text-xl font-semibold text-blue-800 mb-3"
            >
              Assessment Overview
            </h2>
            <p className="text-gray-700 bg-white p-4 rounded-lg shadow-sm">
              {feedback.description}
            </p>
          </section>

          {/* Detailed Feedback */}
          <section aria-labelledby="feedback-heading">
            <h2
              id="feedback-heading"
              className="text-xl font-semibold text-blue-800 mb-3"
            >
              Detailed Feedback
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">{feedback.feedback}</p>
            </div>
          </section>

          {/* Strengths and Weak Areas */}
          <section
            className="grid md:grid-cols-2 gap-6"
            aria-label="Strengths and Weak Areas"
          >
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Strengths
              </h3>
              <ul className="bg-green-50 p-4 rounded-lg list-disc pl-6">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="text-green-800">
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Weak Areas
              </h3>
              <ul className="bg-red-50 p-4 rounded-lg list-disc pl-6">
                {feedback.weakAreas.map((area, index) => (
                  <li key={index} className="text-red-800">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Areas for Improvement */}
          <section aria-labelledby="improvement-heading">
            <h2
              id="improvement-heading"
              className="text-xl font-semibold text-blue-800 mb-3"
            >
              Areas for Improvement
            </h2>
            <ul className="bg-white p-4 rounded-lg shadow-sm list-disc pl-6 space-y-2">
              {feedback.AreasforImprovement.map((area, index) => (
                <li key={index} className="text-gray-700">
                  {area}
                </li>
              ))}
            </ul>
          </section>

          {/* Suggestions for Further Practice */}
          <section aria-labelledby="suggestions-heading">
            <h2
              id="suggestions-heading"
              className="text-xl font-semibold text-blue-800 mb-3"
            >
              Suggestions for Further Practice
            </h2>
            <ul className="bg-white p-4 rounded-lg shadow-sm list-disc pl-6 space-y-2">
              {feedback.SuggestionsforFurtherPractice.map(
                (suggestion, index) => (
                  <li key={index} className="text-gray-700">
                    {suggestion}
                  </li>
                )
              )}
            </ul>
          </section>
        </CardContent>

        <CardFooter className="bg-blue-100 p-4" role="contentinfo">
          <div className="w-full">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Conclusion
            </h3>
            <p className="text-gray-800 italic">{feedback.Conclusion}</p>
            <div className="mt-4 text-center">
              <span className="text-sm font-bold text-blue-700">
                Assessment Rating: {feedback.AssessmentandRating}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeedbackReport;
