"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import ChatBot from "@/app/components/ChatBot";
import { Suspense } from "react";

// Map of dynamic components
const componentMap = {
  Agency: dynamic(() => import("@/app/prejobsearch/components/Agency")),
  GhostJobs: dynamic(() => import("@/app/prejobsearch/components/GhostJobs")),
  JobPortals: dynamic(() => import("@/app/prejobsearch/components/JobPortals")),
  JobScam: dynamic(() => import("@/app/prejobsearch/components/JobScam")),
  JobsTerms: dynamic(() => import("@/app/prejobsearch/components/JobsTerms")),
  Laws: dynamic(() => import("@/app/prejobsearch/components/Laws")),
  SearchJobs: dynamic(() => import("@/app/prejobsearch/components/SearchJobs")),
  Jobs: dynamic(() => import("@/app/prejobsearch/components/SearchJobs")),
  InterviewFollow: dynamic(() =>
    import("@/app/technical/components/InterviewFollow")
  ),
  InterviewFollowupForm: dynamic(() =>
    import("@/app/prejobsearch/components/FollowUpMail")
  ),
  Referral: dynamic(() => import("@/app/prejobsearch/components/Referral")),
};

const DefaultComponent = dynamic(() => import("@/app/components/Instruction"));

const ParamsPage = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component = componentMap[page_name] || DefaultComponent;

  return (
    <main
      role="main"
      className="relative"
      aria-live="polite"
      aria-label="Main content"
    >
      {/* Suspense fallback for loading accessibility */}
      <Suspense
        fallback={<p className="text-center py-10">Loading content...</p>}
      >
        <Component />
      </Suspense>
      <ChatBot />
    </main>
  );
};

export default ParamsPage;
