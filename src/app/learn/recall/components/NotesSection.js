"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import {
  BookOpen,
  Trophy,
  MessageSquare,
  Smartphone,
  Play,
  Menu,
  X,
} from "lucide-react";
import Note from "./Note";
import FlashCard from "../start/components/FlashCard";
import McqPrepare from "../start/components/McqPrepare";
import TeachToOther from "../start/components/TeachToOther";
import QueAns from "../start/components/QueAns";
import { useSearchParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const CourseInterface = () => {
  const searchParams = useSearchParams();
  const value = searchParams?.get("value");
  const chapter = Number(searchParams?.get("chapter")) - 1;
  const recallId = searchParams?.get("recallId");

  const [course, setCourse] = useState("");
  const [active, setActive] = useState(0); // chapter
  const [active2, setActive2] = useState(chapter || 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);

  // Ref to trap focus inside sidebar when open (optional for better keyboard nav)
  const sidebarRef = useRef(null);
  const chaptersRef = useRef(null);

  // Skip nav link focus handler
  const mainContentRef = useRef(null);

  useEffect(() => {
    setActive(Number(value) || 0);

    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".sidebar") &&
        !event.target.closest(".menu-button") &&
        !event.target.closest(".chapters-sidebar")
      ) {
        setIsSidebarOpen(false);
        setIsChaptersOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    const fetchRecallData = async () => {
      if (!recallId) return;
      try {
        const docRef = doc(db, "recall", recallId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourse(docSnap.data());
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching recall data:", error);
      }
    };

    fetchRecallData();

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [recallId, value]);

  // Keyboard trap for sidebar (optional)
  useEffect(() => {
    if (!isSidebarOpen || !sidebarRef.current) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const focusableElements = sidebarRef.current.querySelectorAll(
      focusableElementsString
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTrapFocus(e) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTrapFocus);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleTrapFocus);
  }, [isSidebarOpen]);

  // Keyboard trap for chapters sidebar (optional)
  useEffect(() => {
    if (!isChaptersOpen || !chaptersRef.current) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const focusableElements = chaptersRef.current.querySelectorAll(
      focusableElementsString
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTrapFocus(e) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTrapFocus);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleTrapFocus);
  }, [isChaptersOpen]);

  const sidebarItems = useMemo(
    () => [
      { icon: BookOpen, label: "Notes" },
      { icon: MessageSquare, label: "Flash Cards" },
      { icon: Trophy, label: "Quiz" },
      { icon: Smartphone, label: "Teach to Other" },
      { icon: Play, label: "Questions/Answers" },
    ],
    []
  );

  // Live region state for announcements
  const [liveMessage, setLiveMessage] = useState("");

  // Announce tab change to screen readers
  useEffect(() => {
    if (sidebarItems[active]) {
      setLiveMessage(`Selected tab: ${sidebarItems[active].label}`);
    }
  }, [active, sidebarItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-3 focus:py-2 rounded"
      >
        Skip to main content
      </a>

      {/* Mobile Header */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-50"
        role="banner"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 bg-blue-600 rounded-full"
              aria-hidden="true"
            />
            <span className="font-semibold">Recall</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsChaptersOpen(!isChaptersOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-expanded={isChaptersOpen}
              aria-controls="chapters-sidebar"
              aria-label="Toggle chapters sidebar"
              type="button"
            >
              <Trophy className="w-6 h-6" aria-hidden="true" />
            </button>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg menu-button"
              aria-expanded={isSidebarOpen}
              aria-controls="main-sidebar"
              aria-label={
                isSidebarOpen ? "Close main sidebar" : "Open main sidebar"
              }
              type="button"
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex relative pt-16 lg:pt-0">
        {/* Sidebar */}
        <aside
          id="main-sidebar"
          ref={sidebarRef}
          className={`
            fixed lg:static lg:block sidebar
            ${isSidebarOpen ? "block" : "hidden"}
            w-72 h-screen bg-white border-r border-gray-200 p-4 z-40
          `}
          role="navigation"
          aria-label="Main course navigation"
          tabIndex={-1} // Allow programmatic focus when sidebar opens
        >
          <div className="mb-8 hidden lg:block">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 bg-blue-600 rounded-full"
                aria-hidden="true"
              />
              <span className="font-semibold">Recall</span>
            </div>
          </div>

          <nav>
            {sidebarItems?.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg mb-1 cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  active === index
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
                onClick={() => {
                  setActive(index);
                  setIsSidebarOpen(false);
                  mainContentRef.current?.focus(); // Focus main content after selecting
                }}
                aria-current={active === index ? "page" : undefined}
                type="button"
              >
                <item.icon
                  className={`w-5 h-5 ${
                    active === index ? "text-white" : "text-gray-500"
                  }`}
                  aria-hidden="true"
                />
                <span className={active === index ? "font-medium" : ""}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          id="main-content"
          tabIndex={-1} // Allow focus via skip link
          ref={mainContentRef}
          className="flex-1 p-4 lg:p-6"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="max-w-5xl mx-auto">
            <header className="mb-6">
              <h1 className="text-xl lg:text-2xl font-bold mb-2" tabIndex={-1}>
                {course?.data?.courseTitle || "Loading course..."}
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">
                {course?.data?.courseSummary}
              </p>
            </header>

            <Card className="mb-6">
              <CardHeader className="pb-4 font-bold" id="section-title">
                {sidebarItems[active]?.label}
              </CardHeader>
              <section aria-labelledby="section-title" tabIndex={-1}>
                {active === 0 && <Note Course={course} active2={active2} />}
                {active === 1 && (
                  <FlashCard course={course} active2={active2} />
                )}
                {active === 2 && (
                  <McqPrepare course={course} active2={active2} />
                )}
                {active === 3 && <TeachToOther course={course} />}
                {active === 4 && <QueAns course={course} />}
              </section>
            </Card>
          </div>
        </main>

        {/* Chapters Sidebar */}
        {active !== 3 && active !== 4 && (
          <aside
            id="chapters-sidebar"
            ref={chaptersRef}
            className={`
              fixed lg:static sidebar mt-2 chapters-sidebar
              ${isChaptersOpen ? "block" : "hidden lg:block"}
              w-72 h-screen bg-white border-l border-gray-200 p-4 z-30
              right-0 top-0 pt-16 lg:pt-4
            `}
            role="navigation"
            aria-label="Course chapters navigation"
            tabIndex={-1}
          >
            <nav>
              <ul>
                {course?.data?.chapters?.map((chapter, index) => (
                  <li key={index}>
                    <button
                      className={`p-2 mb-1 cursor-pointer text-sm lg:text-base w-full text-left rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        active2 === index
                          ? "bg-blue-400 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        setActive2(index);
                        setIsChaptersOpen(false);
                        mainContentRef.current?.focus(); // Move focus back to main content
                      }}
                      aria-current={active2 === index ? "page" : undefined}
                      type="button"
                    >
                      {index + 1}. {chapter?.chapterTitle}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        {/* Live region for announcements */}
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          id="live-region"
        >
          {liveMessage}
        </div>
      </div>
    </div>
  );
};

export default CourseInterface;
