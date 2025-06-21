"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ChatBot from "@/app/components/ChatBot";

// Mapping page names to dynamic components
const componentMap = {
  CommanQuestion: dynamic(() =>
    import("@/app/technical/components/CommanQuestion")
  ),
  GroupDiscussion: dynamic(() =>
    import("@/app/technical/components/GroupDescusion")
  ),
  StartInterview: dynamic(() =>
    import("@/app/technical/components/StartHumanInterview")
  ),
  AptitudeExam: dynamic(() =>
    import("@/app/technical/components/AptitudeExam")
  ),
  InterviewFollow: dynamic(() =>
    import("@/app/technical/components/InterviewFollow")
  ),
  CompanyResearch: dynamic(() =>
    import("@/app/technical/components/CompanyResearch")
  ),
  FreelancingGuideUI: dynamic(() =>
    import("@/app/technical/components/Freelancing")
  ),
  CompanyProblem: dynamic(() =>
    import("@/app/technical/components/CompanyProblem")
  ),
  CodingRound: dynamic(() => import("@/app/technical/components/CodingRound")),
};

const DefaultComponent = dynamic(() => import("@/app/components/Instruction"));

// Separate client-only component to use `useSearchParams`
function DynamicContent() {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component = componentMap[page_name] || DefaultComponent;

  return <Component />;
}

export default function ParamsPage() {
  return (
    <>
      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <DynamicContent />
      </Suspense>
      <ChatBot />
    </>
  );
}
