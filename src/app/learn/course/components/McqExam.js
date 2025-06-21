import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import CourseExam from "./CourseExam";
import { AiGenerateCourseMcq } from "../../../../../config/AllAiModels";
import LoadingDialog from "@/app/components/LoadingDialog";

function McqExam({ topicName }) {
  const [examStatus, setExamStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const localStorageContent = localStorage.getItem("content");
  const [exam, setExam] = useState("");

  useEffect(() => {
    if (localStorageContent) {
      setContent(JSON.parse(localStorageContent));
    }
  }, [localStorageContent]);

  useEffect(() => {
    const exam = localStorage.getItem("combinedExamDate");
    if (exam) {
      setExam(JSON.parse(exam));
      setExamStatus(true);
    }
  }, []);

  const courseExam = async () => {
    setLoading(true);
    const Prompt = `generate 5 mcq question by on give syllabus.include question,answer,options,explaination.syllabus :${JSON.stringify(
      localStorageContent
    )}.in json formate.`;
    // alert(Prompt);
    try {
      const result = await AiGenerateCourseMcq.sendMessage(Prompt);
      const responseText = await result.response.text();
      console.log("Response Text: ", responseText);
      const jsonreponse = JSON.parse(responseText);
      localStorage.setItem("combinedExamDate", JSON.stringify(jsonreponse));
      setExam(jsonreponse);
      setExamStatus(true);
    } catch (error) {
      console.error("Error fetching chapter data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-exam-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-blue-700 p-2 rounded shadow"
      >
        Skip to main content
      </a>

      {examStatus ? (
        <main
          id="main-exam-content"
          role="main"
          className="outline-none focus:outline-blue-600"
        >
          <CourseExam exam={exam} topicName={topicName} />
        </main>
      ) : (
        <main
          id="main-exam-content"
          role="main"
          className="bg-slate-50 p-4 md:p-8 outline-none focus:outline-blue-600"
        >
          <div
            className="max-w-3xl mx-auto"
            role="region"
            aria-labelledby="exam-prompt-title"
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle
                  className="text-xl"
                  id="exam-prompt-title"
                  tabIndex={-1}
                >
                  You have completed the Chapter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg" aria-live="polite">
                  Have you completed the exam? Let&#39;s give it a try — just
                  click the Start Exam button.
                </p>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              onClick={() => courseExam()}
              aria-label="Start Exam"
              className="focus:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Start Exam
            </Button>

            <LoadingDialog loading={loading} />
          </div>
        </main>
      )}
    </>
  );
}

export default McqExam;
