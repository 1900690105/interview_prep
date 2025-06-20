"use client";
import ChatBot from "@/app/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

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

const ParamsPage = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("@/app/components/Instruction"));
  return (
    <>
      <Component />
      <ChatBot />
    </>
  );
};

export default ParamsPage;
