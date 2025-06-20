"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

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

const student = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("@/app/components/Instruction"));
  return (
    <>
      <Component />
    </>
  );
};

export default student;
