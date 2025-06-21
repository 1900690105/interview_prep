"use client";

import ChatBot from "@/app/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Dynamic component map
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

const DefaultComponent = dynamic(() => import("@/app/components/Instruction"));

// Inner dynamic content component (wrapped with Suspense)
function DynamicContent() {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component = componentMap[page_name] || DefaultComponent;

  return <Component />;
}

// Main profiling page
export default function Profiling() {
  return (
    <>
      <main className="min-h-screen p-4">
        <Suspense
          fallback={<div className="text-center py-10">Loading content...</div>}
        >
          <DynamicContent />
        </Suspense>
      </main>
      <ChatBot />
    </>
  );
}
