"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight, Book, Code, Terminal, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiNotesSection } from "../../../../../config/AiModel";
import {
  AiFlashCard,
  AiQueAns,
  AiQuizRecall,
  AiTeachToOther,
} from "../../../../../config/AllAiModels";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const SyallbusOutline = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [loading, setLoading] = useState({
    notes: false,
    flashcard: false,
    quiz: false,
    qa: false,
    teachToOther: false,
  });
  const [mcq, setMcq] = useState("");
  const [state, setState] = useState({
    notes: false,
    flashcard: false,
    quiz: false,
  });
  const [recallId, setRecallId] = useState(localStorage.getItem("recallId"));

  const [courseData, setCourseData] = useState(
    JSON.parse(localStorage.getItem("RecallSyllabus"))
  );

  useEffect(() => {
    const notes = localStorage.getItem("combinedChapterNotesRecall");
    const flashcard = localStorage.getItem("combinedChapterFlashCard");
    const quiz = localStorage.getItem("combinedChapterQuiz");
    const qa = localStorage.getItem("combinedChapterQA");
    const teachToOther = localStorage.getItem("teachToOther");
    setState((prevState) => ({
      ...prevState,
      notes: !!notes,
      flashcard: !!flashcard,
      quiz: !!quiz,
      qa: !!qa,
      teachToOther: !!teachToOther,
    }));
  }, []);

  const generateNotes = async () => {
    if (!recallId) {
      alert("Recall ID not found.");
      return;
    }

    try {
      const recallRef = doc(db, "recall", recallId);
      const recallSnap = await getDoc(recallRef);

      if (recallSnap.exists()) {
        const existingNotes = recallSnap.data().notes;
        if (
          existingNotes &&
          Array.isArray(existingNotes) &&
          existingNotes.length === courseData?.chapters?.length
        ) {
          const confirmRegenerate = confirm(
            "Notes are already generated. Do you want to regenerate them?"
          );
          setState((prevState) => ({
            ...prevState,
            notes: true,
          }));
          if (!confirmRegenerate) return;
        }
      }
    } catch (err) {
      console.error("Error checking existing notes:", err);
      alert("Error checking existing notes.");
      return;
    }

    setLoading((prevState) => ({
      ...prevState,
      notes: true,
    }));

    const combinedResponses = [];

    for (const [index, chapterContent] of courseData?.chapters.entries()) {
      const prompt = `Generate interview preparation notes material in detail content for each chapter. Make sure to include all topic points in the content. Provide content in HTML format and style (Do not add HTML, head, body, or title tags). The chapter: ${JSON.stringify(
        chapterContent
      )}`;

      try {
        const result = await AiNotesSection.sendMessage(prompt);
        const responseText = await result.response.text();

        combinedResponses.push(responseText);

        setState((prevState) => ({
          ...prevState,
          notes: true,
        }));
      } catch (error) {
        console.error("Error generating notes:", error);
      }
    }

    if (combinedResponses.length === courseData.chapters.length) {
      try {
        const recallRef = doc(db, "recall", recallId);
        await updateDoc(recallRef, {
          notes: combinedResponses,
        });
      } catch (error) {
        console.error("Error updating notes in Firestore:", error);
      }
    } else {
      alert("Some chapters failed to generate. Please regenerate.");
    }

    setLoading((prevState) => ({
      ...prevState,
      notes: false,
    }));
  };

  const generateFlashCards = async () => {
    if (!recallId) {
      alert("Recall ID not found.");
      return;
    }

    try {
      const recallRef = doc(db, "recall", recallId);
      const recallSnap = await getDoc(recallRef);

      if (recallSnap.exists()) {
        const existingFlashcards = recallSnap.data().flashcards;
        if (
          existingFlashcards &&
          typeof existingFlashcards === "object" &&
          Object.keys(existingFlashcards).length ===
            courseData?.chapters?.length
        ) {
          const confirmRegenerate = confirm(
            "Flashcards are already generated. Do you want to regenerate them?"
          );
          setState((prevState) => ({
            ...prevState,
            flashcard: true,
          }));
          if (!confirmRegenerate) return;
        }
      }
    } catch (err) {
      console.error("Error checking existing flashcards:", err);
      alert("Error checking existing flashcards.");
      return;
    }

    setLoading((prevState) => ({
      ...prevState,
      flashcard: true,
    }));

    const combinedResponses = [];

    for (const [index, chapterContent] of courseData?.chapters.entries()) {
      const prompt = `Generate the flashcards on course: ${courseData.courseTitle}, topic: ${chapterContent.chapterTitle}. Return JSON with up to 5 cards, each having 'front' and 'back' properties.`;

      try {
        const result = await AiFlashCard.sendMessage(prompt);
        const responseText = await result.response.text();

        try {
          const jsonFormatted = JSON.parse(responseText);

          combinedResponses.push(jsonFormatted);
        } catch (parseErr) {
          console.error(
            "Failed to parse AI flashcard response as JSON:",
            parseErr
          );
        }
      } catch (error) {
        console.error("Error generating flashcard:", error);
      }
    }

    if (combinedResponses.length === courseData.chapters.length) {
      const structuredFlashcards = courseData.chapters.reduce((acc, _, i) => {
        acc[`${i + 1}`] = combinedResponses[i];
        return acc;
      }, {});

      try {
        const recallRef = doc(db, "recall", recallId);
        await updateDoc(recallRef, {
          flashcards: structuredFlashcards,
        });

        setState((prevState) => ({
          ...prevState,
          flashcard: true,
        }));
      } catch (error) {
        console.error("Error updating flashcards in Firestore:", error);
      }
    } else {
      alert("Content not generated for all chapters, please regenerate.");
    }

    setLoading((prevState) => ({
      ...prevState,
      flashcard: false,
    }));
  };

  const generateQuiz = async () => {
    if (!recallId) {
      alert("Recall ID not found.");
      return;
    }

    try {
      const recallRef = doc(db, "recall", recallId);
      const recallSnap = await getDoc(recallRef);

      if (recallSnap.exists()) {
        const existingQuiz = recallSnap.data().quiz;
        if (
          existingQuiz &&
          typeof existingQuiz === "object" &&
          Object.keys(existingQuiz).length === courseData?.chapters?.length
        ) {
          const confirmRegenerate = confirm(
            "Quiz is already generated for all chapters. Do you want to regenerate it?"
          );
          setState((prevState) => ({
            ...prevState,
            quiz: true,
          }));
          if (!confirmRegenerate) return;

          setState((prevState) => ({
            ...prevState,
            quiz: true,
          }));
        }
      }
    } catch (error) {
      console.error("Error checking existing quiz data:", error);
      alert("Error checking quiz data.");
      return;
    }

    setLoading((prevState) => ({
      ...prevState,
      quiz: true,
    }));

    const combinedResponses = [];

    for (const [index, chapterContent] of courseData?.chapters.entries()) {
      const prompt = `Generate a set of quiz questions based on the topic "${chapterContent.chapterTitle}" from the course "${courseData.courseTitle}". 
Include:
1. Scenario-Based Question
2. Problem-Solving Question
3. Fill-in-the-blank Question
4. Comparison Question
5. Interactive Code-Based Question (if applicable)
6. Real-World Analogy Question

Each question should include:
- question
- options (as an array)
- correct_answer
- explanation

Return in JSON array format.`;

      try {
        const result = await AiQuizRecall.sendMessage(prompt);
        const responseText = await result.response.text();

        try {
          const jsonFormatted = JSON.parse(responseText);

          combinedResponses.push(jsonFormatted);
        } catch (parseError) {
          console.error(
            `Failed to parse quiz JSON for chapter ${index + 1}:`,
            parseError
          );
        }
      } catch (error) {
        console.error(`Quiz generation error for chapter ${index + 1}:`, error);
      }
    }

    if (combinedResponses.length === courseData.chapters.length) {
      const structuredQuizzes = courseData.chapters.reduce((acc, _, i) => {
        acc[`${i + 1}`] = combinedResponses[i];
        return acc;
      }, {});

      try {
        const recallRef = doc(db, "recall", recallId);
        await updateDoc(recallRef, {
          quiz: structuredQuizzes,
        });

        setState((prevState) => ({
          ...prevState,
          quiz: true,
        }));
      } catch (error) {
        console.error("Error saving quiz to Firestore:", error);
      }
    } else {
      alert("Quiz not generated for all chapters. Please regenerate.");
    }

    setLoading((prevState) => ({
      ...prevState,
      quiz: false,
    }));
  };

  const generateQA = async () => {
    if (!recallId) {
      alert("Recall ID not found.");
      return;
    }

    try {
      const recallRef = doc(db, "recall", recallId);
      const recallSnap = await getDoc(recallRef);

      if (recallSnap.exists()) {
        const existingQA = recallSnap.data().qa;
        if (existingQA && Object.keys(existingQA).length > 0) {
          const confirmRegenerate = confirm(
            "QA content already exists. Do you want to regenerate it?"
          );
          setState((prevState) => ({
            ...prevState,
            qa: true,
          }));
          if (!confirmRegenerate) return;
        }
      }
    } catch (err) {
      console.error("Error checking existing QA:", err);
      alert("Error checking QA data.");
      return;
    }

    setLoading((prevState) => ({
      ...prevState,
      qa: true,
    }));

    const prompt = `Generate a list of the most commonly asked interview questions and answers on topic: ${courseData.courseTitle}. 
Include categories like behavioral, technical, problem-solving, and role-specific questions. 
Focus on questions that test a candidate's skills, experience, and personality traits, ensuring they apply to both entry-level and experienced positions. 
Provide concise, professional phrasing for each question. In JSON format.`;

    try {
      const result = await AiQueAns.sendMessage(prompt);
      const responseText = await result.response.text();
      const jsonFormatted = JSON.parse(responseText);

      const recallRef = doc(db, "recall", recallId);
      await updateDoc(recallRef, {
        qa: jsonFormatted,
      });

      setState((prevState) => ({
        ...prevState,
        qa: true,
      }));
    } catch (error) {
      console.error("Error generating QA:", error);
      alert("Failed to generate QA content.");
    } finally {
      setLoading((prevState) => ({
        ...prevState,
        qa: false,
      }));
    }
  };

  const teachToOther = async () => {
    setLoading((prevState) => ({
      ...prevState,
      teachToOther: true,
    }));
    if (!recallId) {
      alert("Recall ID not found.");
      return;
    }
    try {
      const recallRef = doc(db, "recall", recallId);
      const recallSnap = await getDoc(recallRef);

      if (recallSnap.exists()) {
        const existingTeach = recallSnap.data().teachToOther;
        if (existingTeach && Object.keys(existingTeach).length > 0) {
          const confirmRegenerate = confirm(
            "TeachToOther content already exists. Do you want to regenerate it?"
          );
          setState((prevState) => ({
            ...prevState,
            teachToOther: true,
          }));
          if (!confirmRegenerate) return;
        }
      }
    } catch (err) {
      console.error("Error checking existing TeachToOther:", err);
      alert("Error checking TeachToOther data.");
      return;
    }

    const prompt = `You are an advanced AI trained to generate educational questions for a 'learn-by-teaching' module. Your task is to create five types of questions and key_topics: topics to be covered in that, for a given topic to help students deepen their understanding by teaching others. The question types include: Conceptual Understanding, Application-Based, Problem-Solving, Reflective, and Open-Ended Exploration.
For the topic: ${courseData.courseTitle}, generate one question for each type. In JSON format.`;

    try {
      const result = await AiTeachToOther.sendMessage(prompt);
      const responseText = await result.response.text();
      const jsonFormatted = JSON.parse(responseText);

      const recallRef = doc(db, "recall", recallId);
      await updateDoc(recallRef, {
        teachToOther: jsonFormatted,
      });

      setState((prevState) => ({
        ...prevState,
        teachToOther: true,
      }));
    } catch (error) {
      console.error("Error generating TeachToOther:", error);
      alert("Failed to generate TeachToOther content.");
    } finally {
      setLoading((prevState) => ({
        ...prevState,
        teachToOther: false,
      }));
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex flex-col">
        {/* Background Blurs */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-blue-700/30 blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          {/* Course Overview */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-white text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
              {courseData?.courseTitle}
            </h1>

            <p className="text-xl text-white mb-8 opacity-90">
              {courseData?.courseSummary}
            </p>

            {/* Chapters List */}
            <div className="space-y-4">
              {courseData?.chapters?.map((chapter, index) => (
                <div
                  key={index}
                  onClick={() => setActiveChapter(index)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                    activeChapter === index
                      ? "bg-white/20 border border-white/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Book className="text-white" size={24} />
                      <h3 className="text-xl font-semibold text-white">
                        {chapter.chapterTitle}
                      </h3>
                    </div>
                    <ChevronRight
                      className={`text-blue-200 transition-transform ${
                        activeChapter === index ? "rotate-90" : ""
                      }`}
                      size={24}
                    />
                  </div>

                  {activeChapter === index && (
                    <div className="mt-4 space-y-2">
                      <p className="text-white opacity-80 mb-4">
                        {chapter?.chapterSummary}
                      </p>
                      {chapter?.topics?.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="flex items-center space-x-3 text-white"
                        >
                          <CheckCircle className="text-white" size={16} />
                          <span>{topic}</span>
                        </div>
                      ))}
                      {state.notes && (
                        <div className="flex justify-end space-x-3 font-bold">
                          <Button
                            className="font-bold"
                            variant="outline"
                            onClick={() => {
                              window.location.href = `/recall/start?value=0&chapter=${
                                index + 1
                              }`;
                            }}
                            disabled={
                              loading.notes ||
                              loading.flashcard ||
                              loading.quiz ||
                              loading.qa ||
                              loading.teachToOther
                            }
                          >
                            View Notes
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Course Details Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Course Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Terminal className="text-blue-300" size={24} />
                  <span className="text-white">
                    {courseData?.chapters?.length} Comprehensive Chapters
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-blue-300" size={24} />
                  <span className="text-white">Practical Coding Exercises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Book className="text-blue-300" size={24} />
                  <span className="text-white">Interview-Focused Content</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <button
              className="w-full group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-full 
              hover:bg-blue-50 transition-all duration-300 ease-in-out 
              flex items-center justify-center space-x-3 
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300 before:to-blue-500 
              before:opacity-0 hover:before:opacity-20 before:rounded-full 
              before:transition-all before:duration-300 before:ease-in-out
              shadow-xl hover:shadow-2xl"
              onClick={() => {
                state.notes
                  ? (window.location.href = `/learn/recall/start?recallId=${recallId}&value=0&chapter=1`)
                  : generateNotes();
              }}
              disabled={
                loading.notes ||
                loading.flashcard ||
                loading.quiz ||
                loading.qa ||
                loading.teachToOther
              }
            >
              {loading.notes ? (
                <div className="flex items-center gap-3">
                  <span>Generating...</span>
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>
                    {state.notes ? "View Notes 📝" : "Generate Notes 📝"}
                  </span>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              )}
            </button>
            <button
              className="w-full group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-full 
              hover:bg-blue-50 transition-all duration-300 ease-in-out 
              flex items-center justify-center space-x-3 
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300 before:to-blue-500 
              before:opacity-0 hover:before:opacity-20 before:rounded-full 
              before:transition-all before:duration-300 before:ease-in-out
              shadow-xl hover:shadow-2xl"
              onClick={() => {
                state.flashcard
                  ? (window.location.href = `/learn/recall/start?recallId=${recallId}&value=1&chapter=1`)
                  : generateFlashCards();
              }}
              disabled={
                loading.notes ||
                loading.flashcard ||
                loading.quiz ||
                loading.qa ||
                loading.teachToOther
              }
            >
              {loading.flashcard ? (
                <div className="flex items-center gap-3">
                  <span>Generating...</span>
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>
                    {state.flashcard
                      ? "View Flash Cards 🎴"
                      : "Generate Flash Cards 🎴"}
                  </span>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              )}
            </button>
            <button
              className="w-full group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-full 
              hover:bg-blue-50 transition-all duration-300 ease-in-out 
              flex items-center justify-center space-x-3 
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300 before:to-blue-500 
              before:opacity-0 hover:before:opacity-20 before:rounded-full 
              before:transition-all before:duration-300 before:ease-in-out
              shadow-xl hover:shadow-2xl"
              onClick={() => {
                state.quiz
                  ? (window.location.href = `/learn/recall/start?recallId=${recallId}&value=2&chapter=1`)
                  : generateQuiz();
              }}
              disabled={
                loading.notes ||
                loading.flashcard ||
                loading.quiz ||
                loading.qa ||
                loading.teachToOther
              }
            >
              {loading.quiz ? (
                <div className="flex items-center gap-3">
                  <span>Generating...</span>
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>
                    {state.quiz ? "View MCQs 🚀" : "Generate MCQs 🚀"}
                  </span>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              )}
            </button>
            <button
              className="w-full group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-full 
              hover:bg-blue-50 transition-all duration-300 ease-in-out 
              flex items-center justify-center space-x-3 
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300 before:to-blue-500 
              before:opacity-0 hover:before:opacity-20 before:rounded-full 
              before:transition-all before:duration-300 before:ease-in-out
              shadow-xl hover:shadow-2xl"
              onClick={() => {
                state.qa
                  ? (window.location.href = `/learn/recall/start?recallId=${recallId}&value=4`)
                  : generateQA();
              }}
              disabled={
                loading.notes ||
                loading.flashcard ||
                loading.quiz ||
                loading.qa ||
                loading.teachToOther
              }
            >
              {loading.qa ? (
                <div className="flex items-center gap-3">
                  <span>Generating...</span>
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>{state.qa ? "View QA ❔" : "Generate QA ❔"}</span>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              )}
            </button>
            <button
              className="w-full group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-full 
              hover:bg-blue-50 transition-all duration-300 ease-in-out 
              flex items-center justify-center space-x-3 
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-300 before:to-blue-500 
              before:opacity-0 hover:before:opacity-20 before:rounded-full 
              before:transition-all before:duration-300 before:ease-in-out
              shadow-xl hover:shadow-2xl"
              onClick={() => {
                state.teachToOther
                  ? (window.location.href = `/learn/recall/start?recallId=${recallId}&value=3`)
                  : teachToOther();
              }}
              disabled={
                loading.notes ||
                loading.flashcard ||
                loading.quiz ||
                loading.qa ||
                loading.teachToOther
              }
            >
              {loading.teachToOther ? (
                <div className="flex items-center gap-3">
                  <span>Generating...</span>
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>
                    {state.teachToOther
                      ? "View Teach to Other 🧑‍🏫"
                      : "Teach to Other 🧑‍🏫"}
                  </span>
                  <ChevronRight
                    className="transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SyallbusOutline;
