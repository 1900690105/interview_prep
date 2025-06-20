import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Layers, GraduationCap } from "lucide-react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  AiChapterContent,
  AiEngagingContent,
} from "../../../../../config/AllAiModels";
import LoadingDialog from "@/app/components/LoadingDialog";
import service from "../../../../../config/service";
import { db } from "@/lib/firebaseConfig";

function PreviewCourse({ activeStep, handleBack, content, setContent }) {
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const formData = JSON.parse(localStorage.getItem("formData"));
  const language = formData?.video_language || "hindi";

  useEffect(() => {
    const fetchCourseData = async () => {
      const courseId = localStorage.getItem("courseId");
      const content = localStorage.getItem("content");
      if (!courseId) {
        setDataLoading(false);
        return;
      }
      if (content) {
        setContent(JSON.parse(content));
        setDataLoading(false);
        return;
      }

      // try {
      //   setDataLoading(true);
      //   const docRef = doc(db, "courses", courseId);
      //   const docSnap = await getDoc(docRef);

      //   if (docSnap.exists()) {
      //     const data = docSnap.data();
      //     console.log("Fetched data:", data); // Debug log
      //     console.log("Chapters type:", typeof data.chapters);
      //     console.log("Chapters value:", data.chapters);
      //     console.log("Is array?", Array.isArray(data.chapters));

      //     // Handle different chapter data formats
      //     let chapters = [];
      //     if (Array.isArray(data.chapters)) {
      //       chapters = data.chapters;
      //     } else if (typeof data.chapters === "string") {
      //       // If chapters is a string number, create dummy chapters
      //       const chapterCount = parseInt(data.chapters) || 0;
      //       chapters = Array.from({ length: chapterCount }, (_, index) => ({
      //         chapterName: `Chapter ${index + 1}`,
      //         about: `This is chapter ${index + 1} of the course`,
      //         duration: "30 min",
      //       }));
      //     }

      //     const finalContent = {
      //       ...data,
      //       chapters: chapters,
      //     };

      //     console.log("Final content after processing:", finalContent);
      //     console.log("Final chapters:", finalContent.chapters);
      //     console.log("Final chapters length:", finalContent.chapters.length);

      //     setContent(finalContent);
      //   } else {
      //     console.error("No such document!");
      //     setContent({
      //       chapters: [],
      //       courseName: "",
      //       description: "",
      //     });
      //   }
      // } catch (error) {
      //   console.error("Error fetching course data:", error);
      //   setContent({
      //     chapters: [],
      //     courseName: "",
      //     description: "",
      //   });
      // } finally {
      //   setDataLoading(false);
      // }
    };

    fetchCourseData();
  }, []); // Empty dependency array to run only once

  const StartChapter = async () => {
    const topicName = localStorage.getItem("topicName");
    const courseId = localStorage.getItem("courseId");

    // Check if chapters exist and is an array
    if (!content?.chapters || !Array.isArray(content.chapters)) {
      console.error("No chapters available to process");
      return;
    }

    setLoading(true);
    const combinedResponses = [];

    for (const [index, chapterName] of content.chapters.entries()) {
      const total = index + 1;
      const Prompt = `explain the concept in details on topic:${topicName},chapter:${chapterName.chapterName}.include title:title of content.description:detailed descritpion.code:code example (<precode> formate ) if applicable.in json formate`;

      if (index <= total) {
        try {
          const result = await AiChapterContent.sendMessage(Prompt);
          const responseText = await result.response.text();
          console.log("Response Text: ", responseText);

          const videoResponse = await service.getVideos(
            `${topicName}+${chapterName.chapterName}+in ${language}`
          );
          const videoId = videoResponse[0]?.id?.videoId;

          const chapterData = {
            chapterName: chapterName.chapterName,
            content: JSON.parse(responseText),
            videoId,
          };

          combinedResponses.push(chapterData);
        } catch (error) {
          console.error("Error fetching chapter data: ", error);
        }
      }
    }

    // Save data to Firebase Firestore under the course document
    try {
      const courseRef = doc(db, "courses", courseId);
      await updateDoc(courseRef, {
        combinedChapterData: combinedResponses,
      });

      console.log("Chapters successfully saved to Firebase.");
      window.location.href = `/learn/course/start?courseId=${courseId}`;
    } catch (error) {
      console.error("Error saving to Firebase: ", error);
    }

    setLoading(false);
  };

  if (dataLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto bg-white shadow-lg">
          <CardContent className="text-center py-8">
            <div className="text-gray-500">Loading course data...</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Card
          className="max-w-3xl mx-auto bg-white shadow-lg"
          role="region"
          aria-labelledby="course-preview-title"
        >
          <CardHeader className="border-b pb-6">
            <header>
              <h2
                id="course-preview-title"
                className="text-2xl font-bold text-blue-800 mb-4"
              >
                Course Preview
              </h2>
            </header>

            <section
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100 p-6"
              aria-label="Course Overview"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Topic */}
                <article
                  className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105"
                  role="group"
                  aria-label="Topic"
                >
                  <div
                    className="bg-blue-600 rounded-xl p-2.5 shadow-md"
                    aria-hidden="true"
                  >
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Topic</p>
                    <p className="text-gray-900 font-semibold">
                      {formData.topicName || "Python"}
                    </p>
                  </div>
                </article>

                {/* Level */}
                <article
                  className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105"
                  role="group"
                  aria-label="Level"
                >
                  <div
                    className="bg-blue-600 rounded-xl p-2.5 shadow-md"
                    aria-hidden="true"
                  >
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">Level</p>
                    <p className="text-gray-900 font-semibold">
                      {formData.difficulty || "Beginner"}
                    </p>
                  </div>
                </article>

                {/* Chapters */}
                <article
                  className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105"
                  role="group"
                  aria-label="Number of Chapters"
                >
                  <div
                    className="bg-blue-600 rounded-xl p-2.5 shadow-md"
                    aria-hidden="true"
                  >
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-700 font-medium">
                      Chapters
                    </p>
                    <p className="text-gray-900 font-semibold">
                      {formData.chapters || content?.chapters?.length || "0"}
                    </p>
                  </div>
                </article>

                {/* Category */}
                <article
                  className="flex items-center space-x-3 bg-blue-50/80 rounded-xl p-4 hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105"
                  role="group"
                  aria-label="Course Category"
                >
                  <div
                    className="bg-blue-600 rounded-xl p-2.5 shadow-md"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm text-blue-700 font-medium">
                      Category
                    </p>
                    <p className="text-gray-900 font-semibold">
                      {formData.category || "Programming"}
                    </p>
                  </div>
                </article>
              </div>
            </section>
          </CardHeader>

          <CardContent className="space-y-8 pt-6">
            {/* Course Description */}
            <section className="space-y-6" aria-label="Course Description">
              <article className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl text-blue-800 font-bold mb-2">
                  {content?.courseName || "Introduction to Python Programming"}
                </h3>
                <p className="text-gray-600">
                  {content?.description ||
                    "Learn the fundamentals of Python programming language with hands-on exercises and practical examples."}
                </p>
              </article>

              {/* Chapters */}
              <div
                className="space-y-4"
                role="list"
                aria-label="Course Chapters"
              >
                {content?.chapters?.map((chapter, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-xl p-6 border border-blue-100 hover:border-blue-300 transition-colors"
                    role="listitem"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-700 font-semibold"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </div>
                      <h4 className="text-lg text-gray-900 font-semibold">
                        {chapter.chapterName}
                      </h4>
                    </div>
                    <p className="mt-3 text-gray-600">{chapter.about}</p>
                    <div className="mt-3 flex items-center text-sm text-blue-600">
                      <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                      <span>{chapter.duration}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Navigation Buttons */}
            <nav
              className="flex justify-between items-center pt-6 border-t"
              aria-label="Course Navigation"
            >
              <div className="space-x-4">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  onClick={handleBack}
                  disabled={activeStep === 1}
                  aria-label="Go to previous step"
                >
                  Back
                </Button>
                <Button
                  className="w-32 bg-blue-700 hover:bg-blue-800"
                  onClick={StartChapter}
                  disabled={
                    !content?.chapters ||
                    !Array.isArray(content.chapters) ||
                    content.chapters.length === 0
                  }
                  aria-label="Start course"
                >
                  {activeStep === 3 && "Start course"}
                </Button>
                <LoadingDialog loading={loading} />
              </div>
            </nav>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default PreviewCourse;
