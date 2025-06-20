import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle } from "lucide-react";

const InterviewFeedbackUI = ({ feedback }) => {
  const getRatingColor = (rating) => {
    switch (rating) {
      case 1:
        return "bg-red-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-blue-50">
      <Card
        className="shadow-lg border-blue-200"
        role="region"
        aria-labelledby="feedback-title"
      >
        <CardHeader className="bg-blue-100 border-b border-blue-200">
          <CardTitle
            id="feedback-title"
            className="text-2xl font-bold text-blue-800"
          >
            Mock Interview Feedback
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-6">
          {/* Interview Question */}
          <section
            aria-labelledby="question-heading"
            className="bg-white rounded-lg p-4 shadow-sm"
          >
            <h3
              id="question-heading"
              className="text-lg font-semibold text-blue-700 mb-2"
            >
              Interview Question
            </h3>
            <p className="text-gray-700">{feedback?.question}</p>
          </section>

          {/* Your Answer */}
          <section
            aria-labelledby="answer-heading"
            className="bg-white rounded-lg p-4 shadow-sm"
          >
            <h3
              id="answer-heading"
              className="text-lg font-semibold text-blue-700 mb-2"
            >
              Your Answer
            </h3>
            <p className="text-gray-700 italic">{feedback?.user_answer}</p>
            <div
              className="mt-4 flex items-center"
              role="img"
              aria-label={`Answer rating: ${feedback?.rating} out of 5`}
            >
              <span className="mr-2">Rating:</span>
              <Badge
                className={`${getRatingColor(
                  feedback?.rating
                )} text-white px-3 py-1 rounded-full`}
              >
                {feedback?.rating}/5
              </Badge>
            </div>
          </section>

          {/* Sample Answer */}
          <section
            aria-labelledby="sample-answer-heading"
            className="bg-green-50 rounded-lg p-4 shadow-sm border border-green-200"
          >
            <h3
              id="sample-answer-heading"
              className="text-lg font-semibold text-green-700 mb-2 flex items-center"
            >
              <CheckCircle className="mr-2 text-green-500" aria-hidden="true" />
              Sample Answer
            </h3>
            <p className="text-gray-700">{feedback?.ideal_answer}</p>
          </section>

          {/* Areas of Improvement */}
          <section
            aria-labelledby="mistakes-heading"
            className="bg-red-50 rounded-lg p-4 shadow-sm border border-red-200"
          >
            <h3
              id="mistakes-heading"
              className="text-lg font-semibold text-red-700 mb-2 flex items-center"
            >
              <AlertTriangle className="mr-2 text-red-500" aria-hidden="true" />
              Areas of Improvement
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {feedback?.my_mistakes?.map((mistake, index) => (
                <li key={index} className="mb-1">
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

          {/* Recommended Improvements */}
          <section
            aria-labelledby="improvements-heading"
            className="bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-200"
          >
            <h3
              id="improvements-heading"
              className="text-lg font-semibold text-blue-700 mb-2 flex items-center"
            >
              <CheckCircle className="mr-2 text-blue-500" aria-hidden="true" />
              Recommended Improvements
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {feedback?.area_of_improvements?.map((improvement, index) => (
                <li key={index} className="mb-1">
                  {improvement}
                </li>
              ))}
            </ul>
          </section>

          {/* Detailed Feedback */}
          <section
            aria-labelledby="detailed-feedback-heading"
            className="bg-white rounded-lg p-4 shadow-sm"
          >
            <h3
              id="detailed-feedback-heading"
              className="text-lg font-semibold text-blue-700 mb-2"
            >
              Detailed Feedback
            </h3>
            <p className="text-gray-700">{feedback?.feedback}</p>
          </section>

          {/* Conclusion */}
          <section
            aria-labelledby="conclusion-heading"
            className="bg-blue-100 rounded-lg p-4 shadow-sm border border-blue-200"
          >
            <h3
              id="conclusion-heading"
              className="text-lg font-semibold text-blue-800 mb-2"
            >
              Conclusion
            </h3>
            <p className="text-gray-700">{feedback?.conclusion}</p>
          </section>
        </CardContent>

        <CardFooter
          className="bg-blue-50 border-t border-blue-200 p-4 flex justify-between items-center"
          aria-label="Feedback Summary Footer"
        >
          <span className="text-sm text-gray-600">
            Mock Interview Feedback Report
          </span>
          <Badge variant="outline" className="text-blue-700 border-blue-700">
            Technical Assessment
          </Badge>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InterviewFeedbackUI;
