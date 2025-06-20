"use client";
import ChatBot from "@/app/jobPreparation/components/ChatBot";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const componentMap = {
  Agency: dynamic(() => import("@/app/[p]/components/Agency")),
  Certificate: dynamic(() => import("@/app/[p]/components/Certificate")),
  ColdMail: dynamic(() => import("@/app/[p]/components/ColdMail")),
  CommanQuestion: dynamic(() => import("@/app/[p]/components/CommanQuestion")),
  CoverLetter: dynamic(() => import("@/app/[p]/components/CoverLetterMain")),
  DepartmentJobRoles: dynamic(() =>
    import("@/app/[p]/components/DepartmentJobs")
  ),
  GhostJobs: dynamic(() => import("@/app/[p]/components/GhostJobs")),
  githubProfile: dynamic(() => import("@/app/[p]/components/GithubProfile")),
  GroupDiscussion: dynamic(() =>
    import("@/app/jobPreparation/components/GroupDescusion")
  ),
  JobPortals: dynamic(() => import("@/app/[p]/components/JobPortals")),
  JobsTerms: dynamic(() => import("@/app/[p]/components/JobsTerms")),
  // JobsRoll: dynamic(() => import("@/app/[p]/components/ShowJobRoles")),
  JobScam: dynamic(() => import("@/app/[p]/components/JobScam")),
  RoleRoadMap: dynamic(() => import("@/app/[p]/components/RoleRoadMap")),
  Projects: dynamic(() => import("@/app/[p]/components/Projects")),
  linkedinProfile: dynamic(() =>
    import("@/app/[p]/components/LinkedinProfile")
  ),
  ResumeHome: dynamic(() => import("@/app/jobPreparation/components/Resumes")),
  Laws: dynamic(() => import("@/app/[p]/components/Laws")),
  SearchJobs: dynamic(() => import("@/app/[p]/components/SearchJobs")),
  // SocialAccount: dynamic(() =>
  //   import("@/app/jobPreparation/components/SocialAccount")
  // ),
  SoftSkill: dynamic(() => import("@/app/[p]/components/SoftSkill")),
  StartInterview: dynamic(() =>
    import("@/app/[p]/components/StartHumanInterview")
  ),
  AptitudeExam: dynamic(() => import("@/app/[p]/components/AptitudeExam")),
  CodingRound: dynamic(() => import("@/app/[p]/components/CodingRound")),
  Jobs: dynamic(() => import("@/app/[p]/components/SearchJobs")),
  TopCompany: dynamic(() => import("@/app/[p]/components/TopCompany")),
  InterviewFollow: dynamic(() =>
    import("@/app/jobPreparation/components/InterviewFollow")
  ),
  CompetitiveExamsDashboard: dynamic(() =>
    import("@/app/[p]/components/ExamForJobs")
  ),
  CompanyResearch: dynamic(() =>
    import("@/app/jobPreparation/components/CompanyResearch")
  ),
  FreelancingGuideUI: dynamic(() =>
    import("@/app/jobPreparation/components/Freelancing")
  ),
  ToolsCompanyUse: dynamic(() =>
    import("@/app/[p]/components/ToolsCompanyUse")
  ),
  DayRemains: dynamic(() => import("@/app/[p]/components/Days30Preparation")),
  InterviewFollowupForm: dynamic(() =>
    import("@/app/jobPreparation/components/FollowUpMail")
  ),
  Referral: dynamic(() => import("@/app/[p]/components/Referral")),
  CV: dynamic(() => import("@/app/[p]/components/CV")),
  MoreInfoRole: dynamic(() => import("@/app/[p]/components/MoreInfoRole")),
  FirstProgram: dynamic(() => import("@/app/[p]/components/HelloworldFornt")),
  ResumeExtractor: dynamic(() =>
    import("@/app/[p]/components/ResumeExtractor")
  ),
  HiringTalent: dynamic(() => import("@/app/[p]/components/HiringTalent")),
  TakeAssisment: dynamic(() => import("@/app/[p]/components/TakeAssisment")),
};

const ParamsPage = () => {
  const searchParams = useSearchParams();
  const page_name = searchParams.get("page");
  const Component =
    componentMap[page_name] ||
    dynamic(() => import("@/app/jobPreparation/components/Instruction"));
  return (
    <>
      <Component />
      <ChatBot />
    </>
  );
};

export default ParamsPage;
