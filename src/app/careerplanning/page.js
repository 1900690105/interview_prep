"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import ChatBot from "@/app/components/ChatBot";
import { useMemo } from "react";

// Dynamic component imports
const componentMap = {
  DepartmentJobRoles: dynamic(() =>
    import("@/app/careerplanning/components/DepartmentJobs")
  ),
  RoleRoadMap: dynamic(() =>
    import("@/app/careerplanning/components/RoleRoadMap")
  ),
  MoreInfoRole: dynamic(() =>
    import("@/app/careerplanning/components/MoreInfoRole")
  ),
  CourseRoadmap: dynamic(() =>
    import("@/app/careerplanning/components/CourseRoadmap")
  ),
  CompetitiveExamsDashboard: dynamic(() =>
    import("@/app/careerplanning/components/ExamForJobs")
  ),
  TopCompany: dynamic(() =>
    import("@/app/careerplanning/components/TopCompany")
  ),
};

// Main functional component
const CareerPlanning = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");

  // Memoize component to avoid unnecessary dynamic evaluation
  const Component = useMemo(() => {
    return (
      componentMap[page_name] ||
      dynamic(() => import("@/app/components/Instruction"))
    );
  }, [page_name]);

  return (
    <>
      {/* Semantic header for accessibility */}
      <header role="banner">
        <Header />
      </header>

      {/* Main content container */}
      <main
        role="main"
        aria-label="Career planning content"
        className="min-h-screen bg-gray-50"
      >
        <Component />
      </main>

      {/* Chat assistant at page end */}
      <footer role="contentinfo" aria-label="Chat assistant">
        <ChatBot />
      </footer>
    </>
  );
};

export default CareerPlanning;
