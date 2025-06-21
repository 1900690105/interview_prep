"use client";
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Play,
  Pause,
  RotateCcw,
  Camera,
  CameraOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Timer,
  ChevronRight,
  ChevronLeft,
  ListVideo,
  StopCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Textarea } from "@/components/ui/textarea";
import InterviewFeedbackUI from "./InterviewFeedbackUI";
import LoadingDialog from "@/app/components/LoadingDialog";
import { AiFeedbackReport } from "../../../../../config/AllAiModels";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "@/lib/firebaseConfig";

const MockInterview = ({ questions, setOk }) => {
  const [isItRecording, setIsItRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [timeLeft, setTimeLeft] = useState(120);
  const [cameraOn, setCameraOn] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showResponses, setShowResponses] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("General_Questions");
  const [complete, setComplete] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const params = useParams();
  const mockId = params.mockId;
  const [mockData, setMockData] = useState(null);

  useEffect(() => {
    const fetchMockData = async () => {
      if (!mockId) {
        alert("Mock interview not found");
      }
      try {
        const docRef = doc(db, "mockinterview", mockId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMockData(docSnap.data());
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchMockData();
  }, [mockId]);

  const {
    error,
    interimResult,
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
    if (results.length > 0) {
      const newAnswer = results.map((result) => result.transcript).join(" ");
      setUserAnswer((prevAnswer) => prevAnswer + " " + newAnswer);
      setResults([]);
    }
  }, [results, setResults]);

  useEffect(() => {
    if (isItRecording) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsItRecording(false);
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isItRecording]);

  const toggleCamera = async () => {
    try {
      if (!cameraOn) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraOn(true);
      } else {
        streamRef.current?.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        setCameraOn(false);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(
        questions[currentCategory][currentQuestion]
      );
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      handleStop();
    }
  };
  const handleNextQuestion = () => {
    if (isItRecording) stopSpeechToText();
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    if (currentQuestion < questions[currentCategory].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(120);
      setIsItRecording(false);
    }
    if (currentQuestion === questions[currentCategory].length - 1) {
      switch (currentCategory) {
        case "General_Questions":
          setCurrentCategory("Technical_Questions");
          setCurrentQuestion(0);
          break;
        case "Technical_Questions":
          setCurrentCategory("Situational_Questions");
          setCurrentQuestion(0);
          break;
        case "Situational_Questions":
          setCurrentCategory("Closing_Questions");
          setCurrentQuestion(0);
          break;
        case "Closing_Questions":
          setComplete(true);
          break;
        default:
          setCurrentCategory("General_Questions");
          setCurrentQuestion(0);
          break;
      }
    }
    setUserAnswer("");
    setFeedback("");
  };

  const handleReset = () => {
    if (isItRecording) stopSpeechToText();
    if (isSpeaking) window.speechSynthesis.cancel();
    setCurrentQuestion(0);
    setResponses([]);
    setTimeLeft(120);
    setUserAnswer("");
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      window.speechSynthesis.cancel();
      if (isItRecording) stopSpeechToText();
    };
  }, [isItRecording, stopSpeechToText]);

  const myvideoRef = useRef(null);

  const handlePlay = () => {
    if (myvideoRef.current) {
      myvideoRef.current.play();
    }
  };
  const handleStop = () => {
    if (myvideoRef.current) {
      myvideoRef.current.pause(); // Correct usage
    }
  };
  const handleRestart = () => {
    if (myvideoRef.current) {
      myvideoRef.current.currentTime = 0; // Reset the video to the start
      myvideoRef.current.play(); // Play the video
    }
  };

  const handleFeedback = async () => {
    if (userAnswer !== "" && userAnswer.length >= 10) {
      if (!feedback) {
        setLoading(true);
        const prompt = `generate feedback report to the ${currentCategory} given by user.include user_answer,ideal_answer,my_mistakes,Area_of_improvements,feedback,rating(out of 5),conclusion.Question:${questions[currentCategory][currentQuestion]}.User Answer:${userAnswer}.in json formate.`;
        try {
          const result = await AiFeedbackReport.sendMessage(prompt);
          const responseText = result.response.text();
          console.log(responseText);
          const feedbackjson = JSON.parse(responseText);
          setFeedback(feedbackjson);
          setShowResponses(true);
          localStorage.setItem("feedback", JSON.stringify(feedbackjson));
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        // setFeedback(feedback);
        setShowResponses(true);
      }
    } else {
      alert("Please enter your answer first");
    }
  };
  return (
    <main className="max-w-8xl mx-auto p-6 space-y-1" role="main">
      <section aria-labelledby="mock-interview-heading">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
          <CardHeader className="text-center">
            <CardTitle
              id="mock-interview-heading"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              AI-Powered Mock Interview
            </CardTitle>
          </CardHeader>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Video and Controls */}
        <div
          className="space-y-4 p-2 border rounded-lg"
          aria-label="User Video Panel"
        >
          <Card
            className="overflow-hidden"
            role="region"
            aria-label="Video Feed"
          >
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                  aria-label="User camera feed"
                />
                {!cameraOn && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-gray-400"
                    role="status"
                    aria-live="polite"
                  >
                    <CameraOff size={48} className="mb-2" aria-hidden />
                    <span className="text-sm">Camera is disabled</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div
            className="flex justify-center gap-4"
            role="group"
            aria-label="Camera Controls"
          >
            <button
              onClick={toggleCamera}
              aria-pressed={cameraOn}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                cameraOn
                  ? "bg-red-100 text-red-600 hover:bg-red-200"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200"
              }`}
            >
              {cameraOn ? (
                <CameraOff size={20} aria-hidden />
              ) : (
                <Camera size={20} aria-hidden />
              )}
              <span>{cameraOn ? "Stop Camera" : "Start Camera"}</span>
            </button>

            <button
              onClick={() => {
                showResponses ? setShowResponses(false) : handleFeedback();
              }}
              aria-pressed={showResponses}
              disabled={!cameraOn && !showResponses}
              title={!cameraOn && "Enable Camera"}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                showResponses
                  ? "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ListVideo size={20} aria-hidden />
              <span>{showResponses ? "Hide Feedback" : "View Feedback"}</span>
            </button>

            <LoadingDialog loading={loading} />
          </div>

          <div>
            <label htmlFor="user-answer" className="font-bold block mb-1">
              Your Answer:
            </label>
            <Textarea
              id="user-answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={!cameraOn}
              aria-disabled={!cameraOn}
              aria-label="User answer input"
              title={!cameraOn && "Enable Camera"}
              placeholder="Your answer will appear here as you speak or you can type it yourself..."
              className="w-full h-32"
            />
          </div>

          <div
            className="flex justify-between mt-4"
            aria-label="Navigation Buttons"
          >
            <button
              onClick={() =>
                currentQuestion > 0 && setCurrentQuestion((prev) => prev - 1)
              }
              disabled={currentQuestion === 0}
              aria-disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentQuestion > 0
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-gray-50 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} aria-hidden />
              <span>Previous</span>
            </button>

            {complete ? (
              <Button>Complete</Button>
            ) : (
              <button
                onClick={handleNextQuestion}
                disabled={showResponses || !cameraOn}
                aria-disabled={showResponses || !cameraOn}
                title={!cameraOn && "Enable Camera"}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  !showResponses && cameraOn
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <span>Next</span>
                <ChevronRight size={20} aria-hidden />
              </button>
            )}
          </div>
        </div>

        {/* Right Panel - Interview Interface */}
        <div role="region" aria-label="Interview Section">
          {!showResponses ? (
            <Card className="bg-white">
              <CardContent className="p-6">
                <header
                  className="flex justify-between items-center mb-6"
                  aria-label="Progress and Timer"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={currentQuestion + 1}
                      aria-valuemin={1}
                      aria-valuemax={questions?.[currentCategory]?.length}
                      aria-label="Interview Progress"
                    >
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: `${
                            ((currentQuestion + 1) /
                              questions?.[currentCategory]?.length) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {currentQuestion + 1}/
                      {questions?.[currentCategory].length}
                    </span>
                    <span>({currentCategory})</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Button
                      onClick={() => {
                        localStorage.removeItem("questions");
                        setOk(false);
                      }}
                      aria-label="Quit interview"
                    >
                      <Timer size={18} aria-hidden />
                      Quit Interview
                    </Button>
                  </div>
                </header>

                <div
                  className="video-container"
                  aria-label="Example Interview Video"
                >
                  <video
                    ref={myvideoRef}
                    controls
                    width="600"
                    height="400"
                    preload="metadata"
                    aria-describedby="video-instruction"
                  >
                    <source src={"/tell5.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p id="video-instruction" className="sr-only">
                    Example interview video for reference.
                  </p>
                </div>

                <div
                  className="bg-gray-50 p-6 rounded-xl mb-0"
                  aria-label="Current Question"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-medium leading-relaxed">
                      {questions?.[currentCategory][currentQuestion]}
                    </p>
                    <button
                      onClick={() => {
                        toggleSpeech();
                      }}
                      aria-label={isSpeaking ? "Mute Speech" : "Unmute Speech"}
                      className={`p-2 rounded-full transition-colors ${
                        isSpeaking
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isSpeaking ? (
                        <VolumeX size={20} aria-hidden />
                      ) : (
                        <Volume2 size={20} aria-hidden />
                      )}
                    </button>
                    {isSpeaking
                      ? (handleRestart(), handlePlay())
                      : handleStop()}
                  </div>
                </div>

                <div
                  className="flex justify-center gap-6 mb-8"
                  role="group"
                  aria-label="Recording Controls"
                >
                  <Button
                    onClick={isRecording ? stopSpeechToText : startSpeechToText}
                    disabled={!cameraOn}
                    aria-disabled={!cameraOn}
                    title={!cameraOn && "Enable Camera"}
                    className={`p-4 rounded-full transition-all ${
                      isRecording
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                  >
                    {isRecording ? (
                      <div className="flex items-center space-x-2">
                        <StopCircle className="h-5 w-5" aria-hidden />
                        <span>Stop Recording</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Mic className="h-5 w-5" aria-hidden />
                        <span>Start Recording</span>
                      </div>
                    )}
                  </Button>

                  <button
                    onClick={handleReset}
                    aria-label="Reset Answer"
                    className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <RotateCcw size={24} aria-hidden />
                  </button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white" aria-label="Feedback Section">
              <CardContent className="p-6">
                {!feedback && (
                  <>
                    <h3 className="text-xl font-bold mb-6">
                      Recorded Responses
                    </h3>
                    <div className="text-center py-12" aria-live="polite">
                      <div className="text-gray-400 mb-4">
                        <ListVideo
                          size={48}
                          className="mx-auto mb-4"
                          aria-hidden
                        />
                        <p className="text-gray-500">{feedback?.question}</p>
                        <p className="text-sm text-gray-400 mt-2">
                          Start the interview to begin recording your answers
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <InterviewFeedbackUI feedback={feedback} />
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
};

export default MockInterview;
