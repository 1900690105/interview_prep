"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const componentMap = {
  CompanyAuthPortal: dynamic(() =>
    import("@/app/company/components/CompanyAuthPortal")
  ),
  HiringTalent: dynamic(() => import("@/app/company/components/HiringTalent")),
  TakeAssisment: dynamic(() =>
    import("@/app/company/components/TakeAssisment")
  ),
  CompanyProblem: dynamic(() =>
    import("@/app/company/components/CompanyProblem")
  ),
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
const Student = () => {
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
    </>
  );
};

export default Student;
