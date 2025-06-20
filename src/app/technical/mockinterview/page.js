"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Video,
  Mic,
  MessageSquare,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import MockInterview from "./components/Startinterview";
import DetailForm from "./components/DetailForm";
import Interview from "./components/Interview";

const PreMockInterview = () => {
  const [selectedTab, setSelectedTab] = useState("prepare");
  const [ok, setOk] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [response, setResponse] = useState("");
  const [questions, setQuestions] = useState();

  const tabs = [
    { id: "prepare", label: "Preparation", icon: BookOpen },
    { id: "technical", label: "Technical Check", icon: Video },
    { id: "practice", label: "Practice Session", icon: MessageSquare },
  ];

  useEffect(() => {
    const questions = localStorage.getItem("questions");
    if (questions) {
      setQuestions(JSON.parse(questions));
      setOk(true);
    }
  }, []);
  useEffect(() => {
    // Cleanup function to stop all media streams
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const startCamera = async () => {
    try {
      if (cameraEnabled) {
        // Stop the camera if it's already running
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
        setCameraEnabled(false);
        return;
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setCameraEnabled(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please check permissions.");
    }
  };

  const startMicrophone = async () => {
    try {
      if (micEnabled) {
        // Stop the microphone if it's already running
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
        setMicEnabled(false);
        return;
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setStream(mediaStream);

      // Create audio visualization
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(mediaStream);
      source.connect(analyser);

      setMicEnabled(true);

      // Simple audio level visualization
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const canvas = audioRef.current;
      const canvasCtx = canvas.getContext("2d");

      const draw = () => {
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        canvasCtx.fillStyle = "rgb(200, 200, 200)";
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        const barWidth = (WIDTH / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 2;
          canvasCtx.fillStyle = `rgb(0, 122, 255)`;
          canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      };

      draw();
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Unable to access microphone. Please check permissions.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-blue-50 p-6">
        <main className="max-w-6xl mx-auto" role="main">
          <header className="mb-8" role="banner">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Interview Preparation Portal
            </h1>
            <p className="text-blue-700">
              Get ready for your upcoming interview with our guided preparation
              system
            </p>
          </header>

          <section
            aria-labelledby="session-overview-heading"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            <h2 id="session-overview-heading" className="sr-only">
              Session Overview
            </h2>
            <Card
              className="bg-white"
              aria-label="Next Session: Tomorrow at 2:00 PM"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-blue-800">
                  <Calendar className="h-8 w-8" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Next Session</p>
                    <p className="text-sm">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white" aria-label="Duration: 45 minutes">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-blue-800">
                  <Clock className="h-8 w-8" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-sm">45 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-white"
              aria-label="Completion Status: 2 out of 3 steps complete"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-blue-800">
                  <CheckCircle className="h-8 w-8" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Completion Status</p>
                    <p className="text-sm">2/3 Steps Complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="lg:col-span-1 bg-white">
              <CardHeader>
                <CardTitle id="steps-heading" className="text-blue-900">
                  Interview Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="flex flex-col gap-2"
                  role="tablist"
                  aria-labelledby="steps-heading"
                >
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <Button
                        key={tab.id}
                        role="tab"
                        aria-selected={selectedTab === tab.id}
                        aria-controls={`${tab.id}-panel`}
                        id={`${tab.id}-tab`}
                        variant={selectedTab === tab.id ? "default" : "outline"}
                        className={`justify-start gap-2 ${
                          selectedTab === tab.id
                            ? "bg-blue-600"
                            : "text-blue-800"
                        }`}
                        onClick={() => setSelectedTab(tab.id)}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {tab.label}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card
              className="lg:col-span-3 bg-white"
              role="tabpanel"
              id={`${selectedTab}-panel`}
              aria-labelledby={`${selectedTab}-tab`}
            >
              <CardHeader>
                <CardTitle className="text-blue-900">
                  {tabs.find((tab) => tab.id === selectedTab)?.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedTab === "prepare" && (
                  <section
                    className="space-y-4"
                    aria-labelledby="review-materials-heading"
                  >
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3
                        id="review-materials-heading"
                        className="font-semibold text-blue-900 mb-2"
                      >
                        Review Materials
                      </h3>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" aria-hidden="true" />
                          Review job description and requirements
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" aria-hidden="true" />
                          Prepare common interview questions
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" aria-hidden="true" />
                          Research company background
                        </li>
                      </ul>
                    </div>
                  </section>
                )}

                {selectedTab === "technical" && (
                  <section
                    className="space-y-4"
                    aria-labelledby="tech-checks-heading"
                  >
                    <h3 id="tech-checks-heading" className="sr-only">
                      Technical Checks
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        className="p-4 bg-blue-50 rounded-lg"
                        aria-label="Camera Check Section"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Video
                            className="h-5 w-5 text-blue-700"
                            aria-hidden="true"
                          />
                          <h4 className="font-semibold text-blue-900">
                            Camera Check
                          </h4>
                        </div>
                        <div className="space-y-4">
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className={`w-full h-48 bg-gray-100 rounded-lg ${
                              cameraEnabled ? "block" : "hidden"
                            }`}
                            aria-label="Camera preview"
                          />
                          <Button
                            className={`w-full ${
                              cameraEnabled
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-blue-600 hover:bg-blue-700"
                            }`}
                            onClick={startCamera}
                            aria-pressed={cameraEnabled}
                            aria-label={
                              cameraEnabled ? "Stop Camera" : "Test Camera"
                            }
                          >
                            {cameraEnabled ? "Stop Camera" : "Test Camera"}
                          </Button>
                        </div>
                      </div>

                      <div
                        className="p-4 bg-blue-50 rounded-lg"
                        aria-label="Microphone Check Section"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <Mic
                            className="h-5 w-5 text-blue-700"
                            aria-hidden="true"
                          />
                          <h4 className="font-semibold text-blue-900">
                            Microphone Check
                          </h4>
                        </div>
                        <div className="space-y-4">
                          <canvas
                            ref={audioRef}
                            className={`w-full h-48 bg-gray-100 rounded-lg ${
                              micEnabled ? "block" : "hidden"
                            }`}
                            aria-label="Microphone audio visualizer"
                          />
                          <Button
                            className={`w-full ${
                              micEnabled
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-blue-600 hover:bg-blue-700"
                            }`}
                            onClick={startMicrophone}
                            aria-pressed={micEnabled}
                            aria-label={
                              micEnabled ? "Stop Microphone" : "Test Microphone"
                            }
                          >
                            {micEnabled ? "Stop Microphone" : "Test Microphone"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {selectedTab === "practice" && (
                  <section aria-labelledby="practice-heading">
                    <h3 id="practice-heading" className="sr-only">
                      Practice Section
                    </h3>
                    <DetailForm
                      setResponse={setResponse}
                      setOk={setOk}
                      setQuestions={setQuestions}
                    />
                  </section>
                )}
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default PreMockInterview;
