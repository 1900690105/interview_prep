"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, EditIcon } from "lucide-react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

function EditCourse({ activeStep, handleBack, handleNext }) {
  const [content, setContent] = useState({
    courseName: "",
    description: "",
    chapters: [],
  });

  const [loading, setLoading] = useState(false);
  const courseId =
    typeof window !== "undefined" ? localStorage.getItem("courseId") : null;

  // 🔄 Fetch course data on load
  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;

      setLoading(true);
      try {
        const docRef = doc(db, "courses", courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const courseData = docSnap.data();
          setContent({
            courseName: courseData.content.courseName || "",
            description: courseData.content.description || "",
            chapters: courseData.content.chapters || [],
          });
        } else {
          console.warn("Course not found.");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  // ✏️ Handlers
  const handleCourseNameChange = (e) => {
    setContent({ ...content, courseName: e.target.value });
  };

  const handleChapterNameChange = (index, value) => {
    const updatedChapters = [...content.chapters];
    updatedChapters[index].chapterName = value;
    setContent({ ...content, chapters: updatedChapters });
  };

  const handleSaveChanges = async () => {
    if (!courseId) return;
    setLoading(true);
    try {
      const docRef = doc(db, "courses", courseId);
      await updateDoc(docRef, {
        "content.courseName": content.courseName,
        "content.chapters": content.chapters,
      });
      alert("Course updated successfully.");
    } catch (error) {
      console.error("Error updating course:", error);
      alert("Error updating course.");
    } finally {
      setLoading(false);
      localStorage.setItem("content", JSON.stringify(content));
    }
  };

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-blue-700 p-2 z-50 rounded-md shadow"
      >
        Skip to main content
      </a>

      <div
        className="container mx-auto px-4 py-8"
        id="main-content"
        role="main"
      >
        <Card className="max-w-3xl mx-auto bg-white shadow-lg">
          <CardHeader className="border-b">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="courseName" className="sr-only">
                Course Name
              </label>
              <input
                id="courseName"
                type="text"
                value={content.courseName}
                onChange={handleCourseNameChange}
                placeholder="Enter Course Name"
                title="Edit Course Name"
                aria-label="Course Name"
                className="w-full text-2xl font-semibold text-gray-800 bg-transparent outline-none border-b focus:border-blue-500 focus:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400"
              />
              <EditIcon aria-hidden="true" />
            </div>

            <p className="text-gray-500" aria-live="polite">
              {content.description || "No Description Available"}
            </p>
          </CardHeader>

          <CardContent className="space-y-8 pt-6">
            <section aria-labelledby="chapter-list">
              <h2 id="chapter-list" className="sr-only">
                List of Chapters
              </h2>
              <div className="space-y-4">
                {(content.chapters || []).map((chapter, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </div>
                      <label
                        htmlFor={`chapterName-${index}`}
                        className="sr-only"
                      >
                        Chapter {index + 1} Name
                      </label>
                      <input
                        id={`chapterName-${index}`}
                        type="text"
                        value={chapter.chapterName}
                        title={`Edit name for Chapter ${index + 1}`}
                        onChange={(e) =>
                          handleChapterNameChange(index, e.target.value)
                        }
                        placeholder="Enter Chapter Name"
                        aria-label={`Chapter ${index + 1} Name`}
                        className="text-lg text-gray-900 font-semibold bg-transparent outline-none border-b focus:border-blue-500 w-full focus:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400"
                      />
                    </div>
                    <p
                      className="mt-3 text-gray-600"
                      aria-label="Chapter Description"
                    >
                      {chapter.about}
                    </p>
                    <div
                      className="mt-3 flex items-center text-sm text-blue-600"
                      aria-label={`Duration ${chapter.duration}`}
                    >
                      <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                      <span>{chapter.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t">
              <div className="space-x-4">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 focus:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400"
                  onClick={handleBack}
                  disabled={activeStep === 1}
                  aria-label="Go back"
                >
                  Back
                </Button>
                <Button
                  className="bg-blue-500 hover:bg-blue-600 focus:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400"
                  onClick={handleSaveChanges}
                  disabled={loading}
                  aria-label="Save changes"
                >
                  Save Changes
                </Button>
                <Button
                  className="w-32 bg-blue-700 hover:bg-blue-800 focus:outline-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400"
                  onClick={handleNext}
                  disabled={activeStep === 3}
                  aria-label={activeStep === 3 ? "Start course" : "Next step"}
                >
                  {activeStep === 3 ? "Start" : "Next Step"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VoiceOver Developer Instructions (for devs only) */}
      {/* 
    - Use VoiceOver (macOS: Cmd + F5) or NVDA/JAWS (Windows) to test:
      1. Tab through inputs and buttons, ensure all are reachable.
      2. Check if each input reads its label (e.g. Chapter Name, Course Name).
      3. Observe if timer/description/live regions update with voice feedback.
      4. Try "Skip to main content" to jump from top of page.
  */}
    </>
  );
}

export default EditCourse;
