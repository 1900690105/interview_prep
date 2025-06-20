import React, { useEffect, useState } from "react";
import { BookOpen, Clock, Brain, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AiAptitudeExam } from "../../../../config/AllAiModels";
import LoadingDialog from "../../components/LoadingDialog";

const AptitudeExamPage = ({ setQuestions, setExam, setExamStatus }) => {
  const [loading, setLoading] = useState(false);
  const handleExam = async () => {
    setLoading(true);
    const branch = "computer engineering";
    const prompt = `generate 6 mcq for aptitude exam for interview preparation from branch ${branch},questions of type quantitative,logical roasoning,verbal ability,domain specific,Data Interpretation and Sufficiency.include question,options,answer,explaination.in json formate.`;
    try {
      const result = await AiAptitudeExam.sendMessage(prompt);
      const responseText = await result.response.text();
      console.log("Response Text: ", responseText);
      setQuestions(JSON.parse(responseText));
      setExam(1);
      const jsonData = JSON.parse(responseText);
      localStorage.setItem("aptitudeexam", JSON.stringify(jsonData));
      setLoading(false);
      setExamStatus("ongoing");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50" role="document">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-4" role="banner">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2" id="page-title">
            Pre-Aptitude Assessment
          </h1>
          <p className="text-blue-100">
            Evaluate your skills and prepare for success
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="max-w-6xl mx-auto px-4 py-8"
        role="main"
        aria-labelledby="page-title"
      >
        {/* Introduction Section */}
        <section
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          aria-labelledby="welcome-heading"
        >
          <h2
            className="text-2xl font-semibold text-blue-800 mb-4"
            id="welcome-heading"
          >
            Welcome to Your Assessment
          </h2>
          <p className="text-gray-600 mb-4">
            This pre-aptitude exam will help evaluate your current knowledge
            level and prepare you for future challenges. Take your time and
            answer each question carefully.
          </p>
        </section>

        {/* Info Cards */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          aria-label="Assessment Summary Cards"
        >
          <Card role="region" aria-labelledby="time-card">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-blue-600 mb-4" aria-hidden />
              <h3 id="time-card" className="font-semibold text-lg mb-2">
                60 Minutes
              </h3>
              <p className="text-gray-600">Time allocated for completion</p>
            </CardContent>
          </Card>

          <Card role="region" aria-labelledby="questions-card">
            <CardContent className="p-6">
              <Brain className="h-8 w-8 text-blue-600 mb-4" aria-hidden />
              <h3 id="questions-card" className="font-semibold text-lg mb-2">
                50 Questions
              </h3>
              <p className="text-gray-600">Comprehensive assessment</p>
            </CardContent>
          </Card>

          <Card role="region" aria-labelledby="sections-card">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-blue-600 mb-4" aria-hidden />
              <h3 id="sections-card" className="font-semibold text-lg mb-2">
                5 Sections
              </h3>
              <p className="text-gray-600">Cover all key areas</p>
            </CardContent>
          </Card>

          <Card role="region" aria-labelledby="results-card">
            <CardContent className="p-6">
              <Trophy className="h-8 w-8 text-blue-600 mb-4" aria-hidden />
              <h3 id="results-card" className="font-semibold text-lg mb-2">
                Instant Results
              </h3>
              <p className="text-gray-600">Get immediate feedback</p>
            </CardContent>
          </Card>
        </section>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={handleExam}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            aria-label="Start the aptitude assessment"
          >
            {loading ? "Loading..." : "Start Assessment"}
          </button>
          <LoadingDialog loading={loading} />
        </div>

        {/* Instructions */}
        <section
          className="mt-12 bg-white rounded-lg shadow-lg p-6"
          aria-labelledby="instructions-heading"
        >
          <h2
            className="text-2xl font-semibold text-blue-800 mb-4"
            id="instructions-heading"
          >
            Instructions
          </h2>
          <ul
            className="space-y-4 text-gray-600 list-decimal list-inside"
            role="list"
          >
            <li>
              Ensure you have a stable internet connection before beginning.
            </li>
            <li>Read each question carefully before selecting your answer.</li>
            <li>
              You can review and change your answers within the time limit.
            </li>
            <li>Submit your answers before the timer runs out.</li>
            <li>
              Your results will be available immediately after completion.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-12" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-blue-100">
            © 2024 Educational Assessment Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AptitudeExamPage;
