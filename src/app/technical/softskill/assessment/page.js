"use client";

import React, { useState, useEffect } from "react";
import { Mic, StopCircle, AlertCircle } from "lucide-react";

import Que from "./components/Que";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import useSpeechToText from "react-hook-speech-to-text";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from "@/components/ui/textarea";
import FeedbackReport from "./components/FeedbackReport";
import { AiSoftSkillReport } from "../../../../../config/AllAiModels";
import WebCam from "@/app/components/WebCam";
import LoadingDialog from "@/app/components/LoadingDialog";

function InterviewPracticeComponent() {
  const [questions, setQuestions] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [permissionsGranted, setPermissionsGranted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedQuestions = localStorage.getItem("softSkillQuestions");
      if (storedQuestions) {
        setQuestions(JSON.parse(storedQuestions));
      } else {
        toast.error("Questions not found");
      }

      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(() => setPermissionsGranted(true))
        .catch(() => {
          toast.error("Please enable camera and microphone access");
          setPermissionsGranted(false);
        });
    }
  }, []);

  useEffect(() => {
    if (results.length > 0) {
      const newAnswer = results.map((r) => r.transcript).join(" ");
      setUserAnswer((prev) => prev + " " + newAnswer);
      setResults([]);
    }
  }, [results, setResults]);

  const submitAnswer = async () => {
    if (!questions[currentQuestionIndex]) return;
    setLoading(true);

    const prompt = `Evaluate the student's ${questions[currentQuestionIndex].skill} skills level based on their response to the following question:
Question: ${questions[currentQuestionIndex].question}.
Student's Answer: ${userAnswer}.
Include skill, skill level, Evaluation Criteria, description, feedback, strengths, weak area, preparation, resource, Assessment and Rating, Areas for Improvement, Suggestions for Further Practice, Conclusion. In JSON format.`;

    try {
      const result = await AiSoftSkillReport.sendMessage(prompt);
      const text = await result.response.text();
      setFeedback(JSON.parse(text));
      setCheck(true);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while generating feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="bg-blue-600 py-4">
        <h1 className="text-3xl font-bold text-white m-2">
          Soft Skills Assessment
        </h1>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Question Section */}
            <section className="bg-white rounded-lg shadow-lg p-6">
              <Que
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setUserAnswer={setUserAnswer}
                setCheck={setCheck}
              />
            </section>

            {/* Interview Section */}
            <section className="space-y-6">
              <Card className="bg-gray-900 shadow-xl">
                <CardContent className="p-2">
                  <div className="relative flex justify-center">
                    <WebCam aria-label="Live camera view" />
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center space-y-4">
                <Button
                  className="w-full max-w-md bg-blue-500 hover:bg-blue-600"
                  variant={isRecording ? "destructive" : "default"}
                  onClick={isRecording ? stopSpeechToText : startSpeechToText}
                  disabled={!permissionsGranted || !!userAnswer}
                >
                  <div className="flex items-center space-x-2">
                    {isRecording ? (
                      <>
                        <StopCircle className="h-5 w-5" />
                        <span>Stop Recording</span>
                      </>
                    ) : (
                      <>
                        <Mic className="h-5 w-5" />
                        <span>Start Recording</span>
                      </>
                    )}
                  </div>
                </Button>

                {!permissionsGranted && (
                  <Alert variant="destructive" role="alert">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Please enable camera and microphone access to continue
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Answer Box */}
              <Card>
                <CardContent className="p-2">
                  <Textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Your answer will appear here as you speak or type..."
                    className="w-full h-32"
                  />
                  <div className="flex justify-end mt-2">
                    <Button
                      onClick={submitAnswer}
                      className="bg-blue-500 hover:bg-blue-600"
                      disabled={!userAnswer}
                    >
                      Submit Answer
                    </Button>
                    <LoadingDialog loading={loading} />
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        <ToastContainer position="top-right" autoClose={5000} />
      </main>

      {check && (
        <section>
          <FeedbackReport feedback={feedback} />
        </section>
      )}
    </>
  );
}

export default InterviewPracticeComponent;
