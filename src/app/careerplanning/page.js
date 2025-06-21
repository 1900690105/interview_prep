"use client";

import dynamic from "next/dynamic";
import Header from "../components/Header";
import ChatBot from "@/app/components/ChatBot";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";

// Dynamic component map
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

const DefaultComponent = dynamic(() => import("@/app/components/Instruction"));

// Extracted dynamic content into a separate suspense-wrapped component
function DynamicContent() {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");

  const Component = useMemo(() => {
    return componentMap[page_name] || DefaultComponent;
  }, [page_name]);

  return <Component />;
}

const CareerPlanning = () => {
  return (
    <>
      <header role="banner">
        <Header />
      </header>

      <main
        role="main"
        aria-label="Career planning content"
        className="min-h-screen bg-gray-50"
      >
        <Suspense
          fallback={<div className="text-center py-10">Loading...</div>}
        >
          <DynamicContent />
        </Suspense>
      </main>

      <footer role="contentinfo" aria-label="Chat assistant">
        <ChatBot />
      </footer>
    </>
  );
};

export default CareerPlanning;
