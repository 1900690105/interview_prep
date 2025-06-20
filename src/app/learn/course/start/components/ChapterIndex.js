import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ChevronRight } from "lucide-react";
import React from "react";

function ChapterIndex({
  combinedChapterData,
  setActiveChapter,
  setExam,
  activeChapter,
  activeChapterlocal,
  exam,
}) {
  return (
    <div>
      <div className="lg:col-span-1">
        <Card className="sticky top-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="w-5 h-5 text-blue-600" />
              Course Chapters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {combinedChapterData?.combinedChapterData?.map(
                (chapter, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveChapter(index);
                      setExam(1);
                    }}
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-2 transition-colors ${
                      activeChapter === index
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-blue-50"
                    }`}
                    disabled={activeChapterlocal < index}
                    title={chapter?.chapterName}
                  >
                    <ChevronRight
                      className={`w-4 h-4 ${
                        activeChapter === index
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                    <span className="flex-1">{chapter?.chapterName}</span>
                  </button>
                )
              )}
              <button
                onClick={() => {
                  setExam(1);
                  setActiveChapter("");
                }}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-2 transition-colors ${
                  exam ? "hover:bg-blue-50" : "bg-blue-100 text-blue-700"
                }`}
                disabled={
                  parseInt(activeChapterlocal, 10) !==
                  combinedChapterData?.length - 1
                }
                title="This section work after final chapter"
              >
                <ChevronRight
                  className={`w-4 h-4 ${
                    exam ? "text-gray-400" : "text-blue-600"
                  }`}
                />
                <span className="flex-1">Final Exam</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ChapterIndex;
