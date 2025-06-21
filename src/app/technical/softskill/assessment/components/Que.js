"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Mic, Video, VideoOff } from "lucide-react";
import Speech from "react-text-to-speech";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { FaPause } from "react-icons/fa6";
import { FiMic } from "react-icons/fi";
import { LuMicOff } from "react-icons/lu";

function Que({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setUserAnswer,
  setCheck,
}) {
  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
    setUserAnswer("");
    setCheck(false);
  };
  const [play, setPlay] = useState(false);

  const previousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };
  const handleSpeak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
  };
  return (
    <>
      <div className="w-full p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Interview Practice</h1>

        {questions.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800 flex justify-between items-start gap-4">
                <span>{questions[currentQuestionIndex].question}</span>
                <button
                  aria-label={play ? "Stop speaking" : "Play question aloud"}
                  className="text-blue-600 hover:text-blue-800 transition"
                  onClick={() => {
                    if (play) {
                      handleStop();
                      setPlay(false);
                    } else {
                      handleSpeak(questions[currentQuestionIndex].question);
                      setPlay(true);
                    }
                  }}
                >
                  {play ? <GiSpeakerOff size={24} /> : <GiSpeaker size={24} />}
                </button>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Badge variant="secondary" className="mb-4 capitalize">
                {questions[currentQuestionIndex].skill}
              </Badge>
              <p className="text-gray-600 mb-4">
                This question assesses your{" "}
                <span className="font-medium">
                  {questions[currentQuestionIndex].skill.toLowerCase()}
                </span>{" "}
                skills.
              </p>

              <div className="flex flex-wrap justify-between gap-4 mt-4">
                <Button
                  onClick={previousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
                  aria-disabled={currentQuestionIndex === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                {currentQuestionIndex === questions.length - 1 ? (
                  <Button
                    onClick={endInterview}
                    className="bg-green-500 text-white hover:bg-green-600"
                  >
                    End Interview
                  </Button>
                ) : (
                  <Button
                    onClick={nextQuestion}
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <p className="text-center text-gray-500">No questions available.</p>
        )}
      </div>
    </>
  );
}

export default Que;
