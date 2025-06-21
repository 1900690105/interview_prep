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
import DetailForm from "./components/DetailForm";

const PreMockInterview = () => {
  const [selectedTab, setSelectedTab] = useState("prepare");
  const [ok, setOk] = useState(false);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [micStream, setMicStream] = useState(null);
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
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("questions");
      if (stored) {
        setQuestions(JSON.parse(stored));
        setOk(true);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      cameraStream?.getTracks().forEach((t) => t.stop());
      micStream?.getTracks().forEach((t) => t.stop());
    };
  }, [cameraStream, micStream]);

  const startCamera = async () => {
    try {
      if (cameraEnabled) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
        setCameraEnabled(false);
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraEnabled(true);
    } catch (err) {
      console.error("Camera error:", err);
      alert("Unable to access camera.");
    }
  };

  const startMicrophone = async () => {
    try {
      if (micEnabled) {
        micStream.getTracks().forEach((track) => track.stop());
        setMicStream(null);
        setMicEnabled(false);
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicStream(stream);

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      setMicEnabled(true);

      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const canvas = audioRef.current;
      const canvasCtx = canvas?.getContext("2d");

      const draw = () => {
        if (!canvasCtx || !canvas) return;

        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        canvasCtx.fillStyle = "rgb(255, 255, 255)";
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        let x = 0;
        const barWidth = (canvas.width / bufferLength) * 2.5;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i] / 2;
          canvasCtx.fillStyle = "rgb(0, 122, 255)";
          canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
          x += barWidth + 1;
        }
      };

      draw();
    } catch (err) {
      console.error("Mic error:", err);
      alert("Unable to access microphone.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <main className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Interview Preparation Portal
          </h1>
          <p className="text-blue-700">
            Get ready for your upcoming interview with our guided preparation
            system
          </p>
        </header>

        {/* Info cards */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-blue-800">
                <Calendar className="h-8 w-8" />
                <div>
                  <p className="font-semibold">Next Session</p>
                  <p className="text-sm">Tomorrow, 2:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-blue-800">
                <Clock className="h-8 w-8" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-sm">45 minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-blue-800">
                <CheckCircle className="h-8 w-8" />
                <div>
                  <p className="font-semibold">Completion Status</p>
                  <p className="text-sm">2/3 Steps Complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main content */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tabs */}
          <Card className="lg:col-span-1 bg-white">
            <CardHeader>
              <CardTitle>Interview Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant={selectedTab === tab.id ? "default" : "outline"}
                      className={`justify-start gap-2 ${
                        selectedTab === tab.id ? "bg-blue-600" : "text-blue-800"
                      }`}
                      onClick={() => setSelectedTab(tab.id)}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Panel */}
          <Card className="lg:col-span-3 bg-white">
            <CardHeader>
              <CardTitle>
                {tabs.find((tab) => tab.id === selectedTab)?.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedTab === "prepare" && (
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Review job description
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Practice common
                    questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Research the company
                  </li>
                </ul>
              )}

              {selectedTab === "technical" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Camera */}
                  <div>
                    <h4 className="font-semibold mb-2">Camera Check</h4>
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      playsInline
                      className={`w-full h-48 bg-gray-100 rounded-lg ${
                        cameraEnabled ? "block" : "hidden"
                      }`}
                    />
                    <Button
                      onClick={startCamera}
                      className={`w-full mt-2 ${
                        cameraEnabled
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {cameraEnabled ? "Stop Camera" : "Test Camera"}
                    </Button>
                  </div>

                  {/* Mic */}
                  <div>
                    <h4 className="font-semibold mb-2">Microphone Check</h4>
                    <canvas
                      ref={audioRef}
                      className={`w-full h-48 bg-gray-100 rounded-lg ${
                        micEnabled ? "block" : "hidden"
                      }`}
                    />
                    <Button
                      onClick={startMicrophone}
                      className={`w-full mt-2 ${
                        micEnabled
                          ? "bg-red-600 hover:bg-red-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {micEnabled ? "Stop Microphone" : "Test Microphone"}
                    </Button>
                  </div>
                </div>
              )}

              {selectedTab === "practice" && (
                <DetailForm
                  setResponse={setResponse}
                  setOk={setOk}
                  setQuestions={setQuestions}
                />
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default PreMockInterview;
