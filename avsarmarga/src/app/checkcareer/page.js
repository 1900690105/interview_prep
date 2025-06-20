"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import {
  AiCareerField,
  AiCareerFieldFinalResult,
} from "../../../config/AllAiModels";
import Assessment from "./components/Assissment";
import Assisment from "./components/Assissment";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState("web development");
  const [questions, setQuestions] = useState("");
  const [assessment, setAssessment] = useState(1);
  const [show, setShow] = useState(false);
  const [results, setResults] = useState(false);
  const [finalize, setFinalize] = useState("");
  const assessment_1 = JSON.parse(localStorage.getItem("assessment_1"));
  const assessment_2 = JSON.parse(localStorage.getItem("assessment_2"));
  const assessment_3 = JSON.parse(localStorage.getItem("assessment_3"));
  const assessment_4 = JSON.parse(localStorage.getItem("assessment_4"));

  useEffect(() => {
    const field = localStorage.getItem("role");
    const assignment = localStorage.getItem("assessment");

    if (assessment_1 && assessment_2 && assessment_3 && assessment_4) {
      setResults(true);
    }
    if (field) {
      setField(field);
    }
    if (assignment) {
      setAssessment(assignment);
    }
  }, []);

  const handlePassion = async () => {
    setLoading(true);
    let prompt = "";
    if (assessment == 1) {
      prompt = `Create a list of yes/no/can’t say type questions designed to evaluate someone's passion, motivation, and interest in pursuing a future as a ${field}. The questions should focus on intrinsic curiosity, willingness to learn, problem-solving enthusiasm, joy, motivation, dedication, contribution, creativity, resilience, persistence, and excitement about innovation in ${field}. Each question should be simple, direct, and thought-provoking, encouraging self-reflection while keeping responses concise. Include question, options: yes, no, can't say in JSON format.`;
    } else if (assessment == 2) {
      prompt = `Create a list of yes/no/can’t say type questions designed to evaluate someone's profession, gain experience, and interest for long term in pursuing a future as a ${field}. The questions should focus on willing to take expertise, education, qualification, responsibilities, continuous learning, commitment to excellence qnd social status in ${field}. Each question should be simple, direct, and thought-provoking, encouraging self-assessment and research for career while keeping responses concise. include question, options: yes, no, can't say.in json formate.`;
    } else if (assessment == 3) {
      prompt = `Create a list of yes/no/can’t say type questions designed to evaluate someone's vocation, gain life experience and contribution for social in pursuing a future as a ${field}. The questions should focus on purpose, core values, talents, strength, joy, balancing, between passion and practically  in ${field}. Each question should be simple, direct, and thought-provoking, reflect on life experience and align with your values while keeping responses concise. include question, options: yes, no, can't say.in json formate.`;
    } else if (assessment == 4) {
      prompt = `Create a list of yes/no/can’t say type questions designed to evaluate someone's mission in pursuing a future as a ${field}. The questions should focus on purpose, vision, core values, impact on social, goal, objective, uniqueness, and commitment to action  in ${field}. Each question should be simple, direct, and thought-provoking, reflect on impact and align with your values while keeping responses concise. include question, options: yes, no, can't say.in json formate.`;
    }
    try {
      const result = await AiCareerField.sendMessage(prompt);
      const text = await result.response.text();
      const json = JSON.parse(text);
      setQuestions(json);
      setShow(true);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalResult = async () => {
    setLoading(true);
    const prompt = `determine whether the ${field} field is best career path for me or not on the basic of conclusion of passion, profession, vocation, mission which i get after questionary assessment of each which is given below. include only final result, suggestion, recommandation,conclusion.in json formate. conclusion:[
  passion_conclusion : ${assessment_1.conclusion},profession_conclusion : ${assessment_2.conclusion},vocation_conclusion : ${assessment_3.conclusion},mission_conclusion : ${assessment_4.conclusion},]`;
    try {
      const result = await AiCareerFieldFinalResult.sendMessage(prompt);
      const text = await result.response.text();
      const json = JSON.parse(text);
      setFinalize(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4 capitalize">
            Career Assessment {assessment}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Discover if aligns with your interests and aspirations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {show ? (
            <Assisment
              questions={questions}
              field={field}
              setAssessment={setAssessment}
              assessment={assessment}
              setShow={setShow}
            />
          ) : (
            <div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  About This Assessment
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    This assessment is designed to help you evaluate your
                    potential fit for a career in any field. Through a series of
                    targeted questions, we'll explore:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Your interest in creative and technical aspects in Field
                    </li>
                    <li>
                      Your aptitude for continuous learning and problem-solving
                    </li>
                    <li>
                      Your alignment with industry demands and best practices
                    </li>
                    <li>
                      Your enthusiasm for user experience and collaborative work
                    </li>
                  </ul>
                </div>
              </div>
              {assessment != 5 && (
                <div className="flex justify-center pt-6">
                  <Button
                    onClick={() => {
                      handlePassion();
                    }}
                    className="bg-blue-600 text-white px-8 py-3 text-lg hover:bg-blue-700"
                  >
                    {loading ? "Loading..." : "Start Assessment"}
                  </Button>
                </div>
              )}
              {assessment == 5 && results && (
                <div className="flex justify-center pt-6">
                  <Button
                    onClick={() => {
                      handleFinalResult();
                    }}
                    className="bg-blue-600 text-white px-8 py-3 text-lg hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Check Result"}
                  </Button>
                </div>
              )}
            </div>
          )}
          {finalize && (
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Assessment Result
              </h3>

              <div className="space-y-4">
                <div className="bg-white rounded p-4 border border-blue-100">
                  <p className="flex flex-col gap-2">
                    <span className="font-semibold text-gray-700 min-w-32">
                      Final Result:
                    </span>
                    <span className="text-gray-600 text-justify">
                      {finalize.final_result}
                    </span>
                  </p>
                </div>

                <div className="bg-white rounded p-4 border border-blue-100">
                  <p className="flex flex-col gap-2">
                    <span className="font-semibold text-gray-700 min-w-32">
                      Suggestion:
                    </span>
                    <span className="text-gray-600 text-justify">
                      {finalize.suggestion}
                    </span>
                  </p>
                </div>

                <div className="bg-white rounded p-4 border border-blue-100">
                  <p className="flex flex-col gap-2">
                    <span className="font-semibold text-gray-700 min-w-32">
                      Recommendation:
                    </span>
                    <span className="text-gray-600 text-justify">
                      {finalize.recommendation}
                    </span>
                  </p>
                </div>

                <div className="bg-white rounded p-4 border border-blue-100">
                  <p className="flex flex-col gap-2">
                    <span className="font-semibold text-gray-700 min-w-32">
                      Conclusion:
                    </span>
                    <span className="text-gray-600 text-justify">
                      {finalize.conclusion}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default page;
