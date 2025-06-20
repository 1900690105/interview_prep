"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Passion from "./components/Passion";
import {
  AiGenerateFinalResult,
  AiGeneratePassion,
} from "../../../config/AllAiModels";
import Priority from "./components/Priority";
import FinalResult from "./components/FinalResult";
import Report from "./components/Report";

const Page = () => {
  const [started, setStarted] = useState(false);
  const [priority, setPriority] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState("");
  const [test, setTest] = useState("");
  const [testLevel, setTestLevel] = useState(1);
  const [field, setField] = useState("web development");
  const passion = JSON.parse(localStorage.getItem("passionate"));
  const mission = JSON.parse(localStorage.getItem("mission"));
  const Profession = JSON.parse(localStorage.getItem("Profession"));
  const vocation = JSON.parse(localStorage.getItem("vocation"));
  const priorities = JSON.parse(localStorage.getItem("priorities"));
  const [final, setFinal] = useState(false);
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("finalResult"));
    if (result) {
      setResult(result);
      setShow(true);
    }
    const field = localStorage.getItem("role");
    if (field) {
      setField(field);
    }
    const level = localStorage.getItem("testLevel");
    if (level) {
      switch (level) {
        case "1":
          setTest("passionate");
          setTestLevel(1);
          break;
        case "2":
          setTest("Profession");
          setTestLevel(2);
          break;
        case "3":
          setTest("vocation");
          setTestLevel(3);
          break;
        case "4":
          setTest("mission");
          setTestLevel(4);
          break;
        case "5":
          setTestLevel(5);
          break;
        default:
          setTest("passionate");
          setTestLevel(1);
      }
      localStorage.setItem("testLevel", level);
    } else {
      setTest("passionate");
    }
  }, []);

  const handlePassion = async () => {
    setLoading(true);
    const prompt = `As a First year student, i have no knowledge of "${field}" but i want to know that "${field}" will be my ${test} or not. to check it ask me question that align with core value and principles of "${field}" which answer may be yes, no, can't say. question should be align with key components of ${test} and principle of "${field}". include question, option: yes, no, can't say.in json formate.`;
    try {
      const result = await AiGeneratePassion.sendMessage(prompt);
      const responsetext = await result.response.text();
      const response = JSON.parse(responsetext);
      console.log("Response Text: ", response);
      localStorage.setItem(`${test}_question`, JSON.stringify(response));
      setQuestions(response);
      setStarted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalResult = async () => {
    setLoading(true);
    const prompt = `as a first year student, i want to know that will "${field}" be my best 
    career or not, and for that i give assessment test where i check my passion, profession, 
    vocation, mission for "${field}" using questionary and it's result are given below. 
    Also my priorities are give below. now you have to determine that whether the "${field}" 
    will be best career for me or not. include your suggestion, reason, what should i do, my next 
    step, recommendation and conclusion. Response: [passion: ${passion.passionate}, profession: ${Profession.Profession}, vocation: ${vocation.vocation}, 
    mission:${mission.mission}].priorities order:["Personal Fulfillment(Passion)","Financial Security(Money)",
    "Sense of Purpose(Experties)","Social Contribution(National Development)"].in json formate.`;
    try {
      const result = await AiGenerateFinalResult.sendMessage(prompt);
      const responsetext = await result.response.text();
      const json = JSON.parse(responsetext);
      setResult(json);
      localStorage.setItem("finalResult", JSON.stringify(json));
      console.log(json);
      setFinal(true);
      setShow(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderLandingPage = () => (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-800 mb-4 capitalize">
          Career Assessment {test}
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Discover if {field} aligns with your interests and aspirations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {final && result ? (
          <FinalResult result={result} />
        ) : (
          <div>
            {testLevel != "5" ? (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  About This Assessment
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    This assessment is designed to help you evaluate your
                    potential fit for a career in frontend development. Through
                    a series of targeted questions, we'll explore:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Your interest in creative and technical aspects of web
                      development
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
            ) : (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  About This Assessment Result
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>Befor Considering Result</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your creative and technical aspects of {field}.</li>
                    <li>Your financial and family circumstances.</li>
                    <li>
                      Your alignment with industry standards and best practices.
                    </li>
                    <li>Your enthusiasm for collaborative teamwork.</li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-5 text-sm">
                  <span className="font-semibold">Note:</span> This Report Is
                  Generate With AI and Our Algorithem.Our AI Model Is May Not Be
                  100% Accurate
                </p>
              </div>
            )}
          </div>
        )}

        {testLevel != "5" && (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Instructions
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• The assessment contains near to 10 questions</li>
              <li>• Answer each question honestly with Yes or No</li>
              <li>• Take your time to consider each question carefully</li>
              <li>
                • You'll receive your results immediately after completion
              </li>
            </ul>
          </div>
        )}

        {priority && testLevel == "1" && <Priority setPriority={setPriority} />}

        {testLevel == "5" ? (
          <div className="flex justify-center pt-6">
            <div>
              {show ? (
                <div>
                  {final ? (
                    <Button
                      className="bg-blue-600 text-white px-8 py-3 text-base hover:bg-blue-700"
                      onClick={() => {
                        setFinal(false);
                      }}
                    >
                      Go Back
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        setFinal(true);
                      }}
                    >
                      View Result
                    </Button>
                  )}
                </div>
              ) : (
                <Button
                  className="bg-blue-600 text-white px-8 py-3 text-base hover:bg-blue-700"
                  onClick={() => handleFinalResult()}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Check Result"}
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex justify-center pt-6">
            <Button
              onClick={() => {
                handlePassion();
              }}
              className="bg-blue-600 text-white px-8 py-3 text-lg hover:bg-blue-700"
              disabled={loading || (priority && testLevel == "1")}
            >
              {loading ? "Loading..." : "Start Assessment"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderAssessment = () => (
    <Passion
      questions={questions}
      field={field}
      test={test}
      testLevel={testLevel}
      setStarted={setStarted}
    />
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {!started ? renderLandingPage() : renderAssessment()}
      </div>
    </div>
  );
};

export default Page;
