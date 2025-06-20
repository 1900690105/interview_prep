import React, { useState } from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle,
  PlayCircle,
  UserCircle,
  Building,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { StudentInterview } from "../../../../config/AiTeacherStudent";
import LoadingDialog from "../../jobPreparation/components/LoadingDialog";
import InterviewPanel from "./HumanInterview";

const StartInterview = () => {
  const [interviewerName, setInterviewerName] = useState("");
  const [candidateName, setCandidateName] = useState("");
  const [interview, setInterview] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(false);
  const [error, setError] = useState("");
  const jobroll = "water treatment";

  const validateForm = () => {
    if (!interviewerName.trim()) {
      setError("Please enter your PRN number");
      return false;
    }
    if (!candidateName.trim()) {
      setError("Please enter candidate's name");
      return false;
    }
    return true;
  };

  const handleStart = async () => {
    if (!validateForm()) return;

    setError("");
    setLoading(true);
    const BASIC_PROMPT = `genarate 5 question that can be asked in interview for the job role ${jobroll} ,include question:question that can be asked for that job role.points:key points that can answer must contain.model_answer:answer in points.in json formate.`;

    try {
      const result = await StudentInterview.sendMessage(BASIC_PROMPT);
      const responseText = await result.response.text();
      const parsedResult = JSON.parse(responseText);
      setInterview(parsedResult);
      localStorage.setItem("interview", JSON.stringify(parsedResult));
      setCode(true);
    } catch (err) {
      setError("Failed to generate interview questions. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (code) {
    return (
      <InterviewPanel
        name={candidateName}
        interviewer={interviewerName}
        interview={interview}
      />
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100"
      role="main"
      aria-labelledby="interview-system-heading"
    >
      <header
        className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-10"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <div>
                <h1
                  id="interview-system-heading"
                  className="text-2xl font-bold text-blue-800"
                >
                  Technical Interview System
                </h1>
              </div>
            </div>
            <div
              className="flex items-center gap-4"
              aria-label="Time indicator"
            >
              <Clock className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <span className="text-sm text-gray-600">45 min assessment</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <section
            className="lg:col-span-1 space-y-6"
            role="region"
            aria-labelledby="progress-title"
          >
            <Card>
              <CardHeader>
                <CardTitle
                  id="progress-title"
                  className="flex items-center gap-2"
                >
                  <ClipboardList className="w-5 h-5 text-blue-600" />
                  Interview Progress
                </CardTitle>
              </CardHeader>
              <CardContent>{/* ... (progress indicators) */}</CardContent>
            </Card>

            {/* Important Notes */}
            <Card
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white"
              role="region"
              aria-labelledby="important-notes"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <AlertCircle className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 id="important-notes" className="text-lg font-semibold">
                    Important Notes
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {/* Notes with list semantics */}
                  <li>
                    <ChevronRight className="inline-block w-4 h-4 mr-1" />{" "}
                    Ensure stable internet connection
                  </li>
                  <li>
                    <ChevronRight className="inline-block w-4 h-4 mr-1" />{" "}
                    Allocate full 45 minutes without interruption
                  </li>
                  <li>
                    <ChevronRight className="inline-block w-4 h-4 mr-1" /> Have
                    necessary documents ready
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Candidate Info Form */}
          <section
            className="lg:col-span-2"
            role="form"
            aria-labelledby="candidate-info"
          >
            <Card>
              <CardHeader>
                <CardTitle
                  id="candidate-info"
                  className="flex items-center gap-2"
                >
                  <UserCircle className="w-5 h-5 text-blue-600" />
                  Candidate Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="prn-number"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        PRN Number
                      </label>
                      <input
                        id="prn-number"
                        type="text"
                        value={interviewerName}
                        onChange={(e) => setInterviewerName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your PRN number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="candidate-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Candidate Name
                      </label>
                      <input
                        id="candidate-name"
                        type="text"
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter candidate's full name"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleStart}
                      className="w-full h-12 text-lg"
                      disabled={loading}
                      aria-label="Start the technical interview"
                    >
                      {loading ? (
                        "Preparing Interview..."
                      ) : (
                        <>
                          <PlayCircle
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                          Begin Interview
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {loading && <LoadingDialog loading={loading} />}
    </div>
  );
};

export default StartInterview;
