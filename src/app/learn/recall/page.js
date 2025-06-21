"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
// import ChatBot from "@/components/ChatBot";

// Dynamic imports with SSR disabled
const componentMap = {
  Projects: dynamic(() => import("@/app/learn/components/Projects"), {
    ssr: false,
  }),
  ToolsCompanyUse: dynamic(
    () => import("@/app/learn/components/ToolsCompanyUse"),
    { ssr: false }
  ),
  DayRemains: dynamic(
    () => import("@/app/learn/components/Days30Preparation"),
    { ssr: false }
  ),
  ResumeExtractor: dynamic(
    () => import("@/app/learn/components/ResumeExtractor"),
    { ssr: false }
  ),
  CreatedCourses: dynamic(() => import("@/app/learn/components/CreateCourse"), {
    ssr: false,
  }),
  SoftSkill: dynamic(() => import("@/app/learn/components/SoftSkill"), {
    ssr: false,
  }),
};

const DefaultComponent = dynamic(() => import("@/app/components/Instruction"), {
  ssr: false,
});

const DynamicContent = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component = componentMap[page_name] || DefaultComponent;

  return <Component />;
};

const ParamsPage = () => {
  return (
    <>
      <main
        id="main-content"
        role="main"
        aria-label="Dynamic learning content"
        className="min-h-screen p-4"
      >
        <Suspense
          fallback={<p className="text-center py-6">Loading content...</p>}
        >
          <DynamicContent />
        </Suspense>
      </main>

      {/* <section role="complementary" aria-label="AI support chatbot">
        <ChatBot />
      </section> */}
    </>
  );
};

export default ParamsPage;
