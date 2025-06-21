"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import OtherQuestion from "./CommanOtherQuestion";
import { DataCommanQuestion } from "@/app/data/CommanQuestion";

const CommanQuestion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const question = DataCommanQuestion;
  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
          Common Interview Questions
        </h1>

        <div className="space-y-4">
          {question.questions.map((q, index) => {
            const isExpanded = expandedIndex === index;
            const contentId = `question-content-${index}`;

            return (
              <section key={index}>
                <Card className="border-blue-200 hover:border-blue-300 transition-colors">
                  <button
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    className="w-full text-left cursor-pointer"
                  >
                    <CardHeader className="flex items-center justify-between">
                      <CardTitle className="text-lg md:text-xl text-blue-700">
                        {q.question}
                      </CardTitle>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-blue-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-500" />
                      )}
                    </CardHeader>
                  </button>

                  {isExpanded && (
                    <CardContent
                      id={contentId}
                      className="pt-4 transition-all duration-300 ease-in-out"
                    >
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-blue-700 mb-2">
                            Sample Answer
                          </h3>
                          <p className="text-gray-700">{q.answer}</p>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-blue-700 mb-2">
                            Method
                          </h3>
                          <p className="text-gray-700">{q.method}</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-blue-700 mb-2">
                            Resources
                          </h3>
                          <p className="text-gray-700">{q.resources}</p>
                        </div>

                        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-blue-700 mb-2">
                            Tips
                          </h3>
                          <p className="text-gray-700">{q.tips}</p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </section>
            );
          })}
        </div>

        {/* CTA for additional question input */}
        <div className="mt-8">
          <OtherQuestion />
        </div>
      </div>
    </div>
  );
};

export default CommanQuestion;
