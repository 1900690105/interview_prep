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
import LoadingDialog from "@/app/components/LoadingDialog";
import { AiFeedbackReport } from "../../../../../config/AllAiModels";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "@/lib/firebaseConfig";
import InterviewFeedbackUI from "../components/InterviewFeedbackUI";

const MockInterview = ({ questions, setOk }) => {
  const [isItRecording, setIsItRecording] = useState(false);
  const [err, setErr] = useState(null);
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
      if (!mockId) return;
      try {
        const docRef = doc(db, "mockinterview", mockId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          // Check if the mockId field inside the document matches the actual document ID
          if (data.mockId === mockId) {
            setMockData(data);
            console.log("Document data:", data);
          } else {
            console.log("mockId mismatch inside the document.");
          }
        } else {
          console.log("Document does not exist.");
        }
      } catch (err) {
        console.log("Error fetching data: " + err.message);
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
        mockData?.questions[currentCategory][currentQuestion]
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
    if (currentQuestion < mockData?.questions[currentCategory].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(120);
      setIsItRecording(false);
    }
    if (currentQuestion === mockData?.questions[currentCategory].length - 1) {
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
  }, []);

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
        const prompt = `generate feedback report to the ${currentCategory} given by user.include user_answer,ideal_answer,my_mistakes,Area_of_improvements,feedback,rating(out of 5),conclusion.Question:${mockData?.questions?.[currentCategory][currentQuestion]}.User Answer:${userAnswer}.in json formate.`;
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
    <main
      className="max-w-8xl mx-auto p-6 space-y-1"
      role="main"
      aria-label="Mock Interview Interface"
    >
      <section aria-labelledby="interview-title">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
          <CardHeader className="text-center">
            <CardTitle
              id="interview-title"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              AI-Powered Mock Interview
            </CardTitle>
          </CardHeader>
        </Card>
      </section>

      <section
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        role="region"
        aria-label="Interview Panels"
      >
        {/* Left Panel */}
        <div
          className="space-y-4 p-2 border rounded-lg"
          role="region"
          aria-label="Video and Controls"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  aria-label="Live camera feed"
                  className="w-full h-full object-cover"
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

          {/* Controls */}
          <div
            className="flex justify-center gap-4"
            role="group"
            aria-label="Camera and Feedback Controls"
          >
            <button
              onClick={toggleCamera}
              aria-pressed={cameraOn}
              aria-label={cameraOn ? "Stop Camera" : "Start Camera"}
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
              onClick={() =>
                showResponses ? setShowResponses(false) : handleFeedback()
              }
              aria-pressed={showResponses}
              aria-label={showResponses ? "Hide Feedback" : "View Feedback"}
              disabled={!cameraOn && !showResponses}
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

          {/* User Answer */}
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
              placeholder="Your answer will appear here as you speak or you can type it yourself..."
              className="w-full h-32"
            />
          </div>

          {/* Navigation */}
          <div
            className="flex justify-between mt-4"
            role="group"
            aria-label="Question Navigation"
          >
            <button
              onClick={() =>
                currentQuestion > 0 && setCurrentQuestion((prev) => prev - 1)
              }
              aria-disabled={currentQuestion === 0}
              disabled={currentQuestion === 0}
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

        {/* Right Panel */}
        <div role="region" aria-label="Interview Interface">
          {!showResponses ? (
            <Card className="bg-white">
              <CardContent className="p-6">
                {/* Progress */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={currentQuestion + 1}
                      aria-valuemin={1}
                      aria-valuemax={
                        mockData?.questions?.[currentCategory]?.length || 1
                      }
                      aria-label="Interview Progress"
                    >
                      <div
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{
                          width: `${
                            ((currentQuestion + 1) /
                              mockData?.questions?.[currentCategory]?.length) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      {currentQuestion + 1}/
                      {mockData?.questions?.[currentCategory]?.length}
                    </span>
                    <span>({currentCategory})</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Button
                      onClick={() => {
                        localStorage.removeItem("questions");
                        setOk(false);
                      }}
                      aria-label="Quit Interview"
                    >
                      <Timer size={18} aria-hidden />
                      Quit Interview
                    </Button>
                  </div>
                </div>

                {/* Sample Video */}
                <div
                  className="video-container"
                  aria-label="Sample Interview Video"
                >
                  <video
                    ref={myvideoRef}
                    controls
                    width="600"
                    height="400"
                    preload="metadata"
                  >
                    <source src="/tell5.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Current Question */}
                <div
                  className="bg-gray-50 p-6 rounded-xl mb-0"
                  aria-label="Current Interview Question"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-lg font-medium leading-relaxed">
                      {mockData?.questions?.[currentCategory][currentQuestion]}
                    </p>
                    <button
                      onClick={toggleSpeech}
                      aria-label={
                        isSpeaking
                          ? "Stop Speech Output"
                          : "Start Speech Output"
                      }
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
                  </div>
                </div>

                {/* Recording Controls */}
                <div
                  className="flex justify-center gap-6 mb-8"
                  role="group"
                  aria-label="Recording Controls"
                >
                  <Button
                    onClick={isRecording ? stopSpeechToText : startSpeechToText}
                    disabled={!cameraOn}
                    aria-disabled={!cameraOn}
                    aria-label={
                      isRecording ? "Stop Recording" : "Start Recording"
                    }
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
                    aria-label="Reset your answer"
                    className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <RotateCcw size={24} aria-hidden />
                  </button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card
              className="bg-white"
              role="region"
              aria-label="Recorded Feedback Section"
            >
              <CardContent className="p-6">
                {!feedback && (
                  <>
                    <h3 className="text-xl font-bold mb-6">
                      Recorded Responses
                    </h3>
                    <div className="text-center py-12" aria-live="polite">
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
