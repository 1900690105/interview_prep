"use client";
import ChatBot from "@/app/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const componentMap = {
  ColdMail: dynamic(() => import("@/app/profiling/components/ColdMail")),
  CoverLetter: dynamic(() =>
    import("@/app/profiling/components/CoverLetterMain")
  ),
  githubProfile: dynamic(() =>
    import("@/app/profiling/components/GithubProfile")
  ),
  linkedinProfile: dynamic(() =>
    import("@/app/profiling/components/LinkedinProfile")
  ),
  CV: dynamic(() => import("@/app/profiling/components/CV")),
};

const profiling = () => {
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

export default profiling;
