"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Clock, ChevronRight } from "lucide-react";

import Assessment from "./components/Assissment";
import {
  AiCareerField,
  AiCareerFieldFinalResult,
} from "../../../../config/AllAiModels";
import Header from "@/app/components/Header";

const CareerAssessmentPage = () => {
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState("web development");
  const [questions, setQuestions] = useState("");
  const [assessment, setAssessment] = useState(1);
  const [show, setShow] = useState(false);
  const [results, setResults] = useState(false);
  const [finalize, setFinalize] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [assessmentData, setAssessmentData] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedField = localStorage.getItem("role");
      const storedAssessment = localStorage.getItem("assessment");
      const finalizeData = localStorage.getItem("finalize");

      const data = {
        1: JSON.parse(localStorage.getItem("assessment_1")),
        2: JSON.parse(localStorage.getItem("assessment_2")),
        3: JSON.parse(localStorage.getItem("assessment_3")),
        4: JSON.parse(localStorage.getItem("assessment_4")),
      };
      setAssessmentData(data);

      if (finalizeData) {
        setFinalize(JSON.parse(finalizeData));
      }

      if (Object.values(data).every((d) => d)) {
        setResults(true);
      }

      if (storedField) setField(storedField);
      if (storedAssessment) setAssessment(Number(storedAssessment));
    }
  }, []);

  const handleAssessment = async () => {
    setLoading(true);
    const prompts = {
      1: `Create a list of yes/no/can't say type questions designed to evaluate someone's passion for ${field}. ...`,
      2: `Create a list of yes/no/can't say type questions to assess professional interest in ${field}. ...`,
      3: `Create a list of yes/no/can't say type questions to evaluate vocation and social contribution in ${field}. ...`,
      4: `Create a list of yes/no/can't say type questions to assess mission, purpose, and impact in ${field}. ...`,
    };

    const prompt = prompts[assessment];

    try {
      const result = await AiCareerField.sendMessage(prompt);
      const text = await result.response.text();
      const json = JSON.parse(text);
      setQuestions(json);
      setShow(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalResult = async () => {
    if (finalize) {
      setShowResult(true);
    } else {
      setLoading(true);

      const prompt = `Determine whether the ${field} field is the best career path based on the conclusions of passion, profession, vocation, and mission:
      {
        passion_conclusion: ${assessmentData[1]?.conclusion},
        profession_conclusion: ${assessmentData[2]?.conclusion},
        vocation_conclusion: ${assessmentData[3]?.conclusion},
        mission_conclusion: ${assessmentData[4]?.conclusion}
      }
      Provide final result, suggestion, recommendation, and conclusion in JSON format.`;

      try {
        const result = await AiCareerFieldFinalResult.sendMessage(prompt);
        const text = await result.response.text();
        const json = JSON.parse(text);
        setFinalize(json);
        localStorage.setItem("finalize", JSON.stringify(json));
        setShowResult(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const assessmentTypes = [
    {
      id: 1,
      name: "Passion",
      description: "Evaluates your enthusiasm and interest",
      completed: !!assessmentData[1],
    },
    {
      id: 2,
      name: "Profession",
      description: "Assesses your skills and aptitude",
      completed: !!assessmentData[2],
    },
    {
      id: 3,
      name: "Vocation",
      description: "Evaluates social contribution potential",
      completed: !!assessmentData[3],
    },
    {
      id: 4,
      name: "Mission",
      description: "Assesses purpose and impact alignment",
      completed: !!assessmentData[4],
    },
  ];

  const progress = assessmentTypes.filter((item) => item.completed).length * 25;

  return (
    <>
      <header role="banner">
        <Header />
      </header>

      <main role="main" className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 capitalize mb-2">
            {field} Career Path
          </h1>
          <p className="text-gray-600 text-lg">
            Discover if this career field aligns with your aspirations and
            capabilities.
          </p>

          {!show && !finalize && (
            <div className="mt-4">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-1 text-sm text-gray-500">
                <span>0%</span>
                <span>Assessment Progress: {progress}%</span>
                <span>100%</span>
              </div>
            </div>
          )}
        </section>

        {show && (
          <section>
            <Card className="shadow-lg border-t-4 border-t-blue-500">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-500">
                  {assessmentTypes[assessment - 1].name} Assessment
                </Badge>
                <CardTitle className="text-2xl">
                  {assessmentTypes[assessment - 1].name} in {field}
                </CardTitle>
                <CardDescription>
                  {assessmentTypes[assessment - 1].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Assessment
                  questions={questions}
                  field={field}
                  setAssessment={setAssessment}
                  assessment={assessment}
                  setShow={setShow}
                />
              </CardContent>
            </Card>
          </section>
        )}

        {finalize && showResult && (
          <section>
            <Card className="shadow-lg border-t-4 border-t-green-500">
              <CardHeader className="border-b pb-6">
                <Badge className="w-fit mb-2 bg-green-500">Final Results</Badge>
                <CardTitle className="text-2xl">
                  Career Path Assessment Results
                </CardTitle>
                <CardDescription>
                  Based on your responses across all four assessment areas
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "final_result",
                    "suggestion",
                    "recommendation",
                    "conclusion",
                  ].map((key) => (
                    <div
                      key={key}
                      className="bg-white p-4 rounded shadow-sm border"
                    >
                      <p className="text-gray-700 font-semibold capitalize mb-2">
                        {key.replace("_", " ")}:
                      </p>
                      <p className="text-gray-600">{finalize[key]}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <Button
                  onClick={() =>
                    (window.location.href = "/page?page=FirstProgram")
                  }
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Next Practical Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </section>
        )}
      </main>
    </>
  );
};

export default CareerAssessmentPage;
