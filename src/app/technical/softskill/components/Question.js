"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

function Question() {
  const [softskill, setSoftSkill] = useState([]);
  const [expandedQuestions, setExpandedQuestions] = useState({});

  useEffect(() => {
    const softSkillQuestions = localStorage.getItem("softSkillQuestions");
    if (softSkillQuestions) {
      setSoftSkill(JSON.parse(softSkillQuestions));
    } else {
      alert("Data not found");
    }
  }, []);

  const toggleQuestion = (index) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Soft Skill Questions
      </h1>

      <div className="grid gap-6" role="list" aria-label="Soft skill questions">
        {softskill.map((question, ind) => {
          const isExpanded = expandedQuestions[ind];
          const contentId = `question-content-${ind}`;
          const headerId = `question-header-${ind}`;

          return (
            <section key={ind}>
              <Card className="overflow-hidden" role="listitem">
                <CardHeader
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleQuestion(ind)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleQuestion(ind);
                    }
                  }}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                  id={headerId}
                  className="cursor-pointer"
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold">
                      {question.question}
                    </CardTitle>
                    {isExpanded ? (
                      <ChevronUp
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDown
                        className="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent
                    id={contentId}
                    aria-labelledby={headerId}
                    role="region"
                  >
                    <div className="mt-2">
                      <Badge variant="secondary">{question.skill}</Badge>
                    </div>
                    <p className="mt-4 text-gray-600">
                      This question assesses your {question.skill.toLowerCase()}{" "}
                      skills. Practice answering it to improve your soft skills
                      in this area.
                    </p>
                  </CardContent>
                )}
              </Card>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default Question;
