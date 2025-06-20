"use client";
import Link from "next/link";
import {
  BookOpen,
  Code,
  Users,
  FileText,
  Building,
  Mail,
  MessageSquare,
  FileCheck,
  Ghost,
  Github,
  Globe,
  AlertTriangle,
  BookmarkCheck,
  Scale,
  Linkedin,
  FolderGit2,
  FileSpreadsheet,
  Map,
  Briefcase,
  Brain,
  GraduationCap,
  PenTool,
  BookOpenCheck,
} from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";
import ChatBot from "./jobPreparation/components/ChatBot";

export default function Home() {
  const navigationItems = [
    {
      category: "Phase 1 :Career Planning",
      items: [
        {
          href: " /page?page=DepartmentJobRoles",
          icon: Briefcase,
          text: "Department-wise Job Roles",
        },
        {
          href: " /checkcareer",
          icon: Briefcase,
          text: "Check my Role",
        },
        {
          href: " /page?page=RoleRoadMap",
          icon: Map,
          text: "Role Roadmap",
        },
        // {
        //   href: " /page?page=TopCompany",
        //   icon: PenTool,
        //   text: "List Of 100 Companies",
        // },
        // {
        //   href: " /page?page=CompetitiveExamsDashboard",
        //   icon: PenTool,
        //   text: "Exam for Jobs",
        // },
      ],
    },
    {
      category: "Phase 2 :Learning",
      items: [
        {
          href: "/course",
          icon: GraduationCap,
          text: "Courses",
        },
        {
          href: " /page?page=Projects",
          icon: FolderGit2,
          text: "Projects",
        },
        {
          href: " /page?page=Certificate",
          icon: BookmarkCheck,
          text: "Certification",
        },
        // {
        //   href: " /page?page=SoftSkill",
        //   icon: BookmarkCheck,
        //   text: "Soft Skills",
        // },
        {
          href: "/recall",
          icon: BookOpen,
          text: "Recall",
        },
        {
          href: " /page?page=DayRemains",
          icon: BookOpenCheck,
          text: "30 days preparation",
        },
        {
          href: " /page?page=ToolsCompanyUse",
          icon: BookOpenCheck,
          text: "Tool company use",
        },
        {
          href: "page?page=ResumeExtractor",
          icon: BookOpenCheck,
          text: "Check my Resume",
        },
      ],
    },
    // {
    //   category: "Phase 3: Profile Building/Showcase",
    //   items: [
    //     {
    //       href: " /page?page=githubProfile",
    //       icon: Github,
    //       text: "Github Profile",
    //     },
    //     {
    //       href: " /page?page=linkedinProfile",
    //       icon: Linkedin,
    //       text: "LinkedIn Profile",
    //     },
    //     { href: " /page?page=ColdMail", icon: Mail, text: "Cold Mail" },
    //     {
    //       href: " /jobPreparation/resume",
    //       icon: FileText,
    //       text: "Resume",
    //     },
    //     {
    //       href: " /page?page=CoverLetter",
    //       icon: FileCheck,
    //       text: "Cover Letter",
    //     },
    //   ],
    // },
    // {
    //   category: "Phase 4 :Pre-Search Knowledge",
    //   items: [
    //     {
    //       href: " /page?page=Jobs",
    //       icon: Briefcase,
    //       text: "Search Jobs",
    //     },
    //     {
    //       href: " /page?page=JobPortals",
    //       icon: Globe,
    //       text: "Job Portals",
    //     },
    //     {
    //       href: " /page?page=Agency",
    //       icon: Building,
    //       text: "Hiring Agency",
    //     },

    //     {
    //       href: " /page?page=JobScam",
    //       icon: AlertTriangle,
    //       text: "Job Scam",
    //     },
    //     {
    //       href: "/page?page=GhostJobs",
    //       icon: Ghost,
    //       text: "Ghost Jobs",
    //     },
    //     {
    //       href: "/page?page=JobsTerms",
    //       icon: BookmarkCheck,
    //       text: "Job Terms",
    //     },
    //     { href: "/page?page=Laws", icon: Scale, text: "Job Laws" },
    //     {
    //       href: " /page?page=InterviewFollowupForm",
    //       icon: FaPaperPlane,
    //       text: "Interview Followup Mail",
    //     },
    //     {
    //       href: "/page?page=Referral",
    //       icon: PenTool,
    //       text: "Reference message",
    //     },
    //     {
    //       href: "/rolecheck",
    //       icon: PenTool,
    //       text: "Check for role chances",
    //     },
    //   ],
    // },
    // {
    //   category: "Phase 5 :Technical Assessment",
    //   items: [
    //     {
    //       href: "/softskill",
    //       icon: Brain,
    //       text: "Soft Skill Interview",
    //     },

    //     {
    //       href: " /page?page=AptitudeExam",
    //       icon: FileSpreadsheet,
    //       text: "Aptitude Exam",
    //     },

    //     {
    //       href: "/mockinterview",
    //       icon: PenTool,
    //       text: "Mock Interview",
    //     },

    //     {
    //       href: " /page?page=CodingRound",
    //       icon: Code,
    //       text: "Coding Round",
    //     },
    //     {
    //       href: " /page?page=StartInterview",
    //       icon: BookOpen,
    //       text: "College Teacher Interview",
    //     },
    //     {
    //       href: " /page?page=CommanQuestion",
    //       icon: MessageSquare,
    //       text: "Common Questions",
    //     },
    //     {
    //       href: " /page?page=GroupDiscussion",
    //       icon: Users,
    //       text: "Group Discussion",
    //     },
    //   ],
    // },
    // {
    //   category: "For Companies",
    //   items: [
    //     {
    //       href: "page?page=HiringTalent",
    //       icon: Brain,
    //       text: "Hire Talents",
    //     },
    //     {
    //       href: "page?page=TakeAssisment",
    //       icon: FileSpreadsheet,
    //       text: "Arrange Assessment",
    //     },
    //   ],
    // },
    // {
    //   category: "Future Scope",
    //   items: [
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "CV Building",
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "job match suggestions", //use that api and match user with job match suggestions
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "Online interview of company",
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "Online Technical Assessments",
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "Fast Hiring Process",
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "Physical Interview",
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "Student community",
    //     },
    //     {
    //       href: "#",
    //       icon: PenTool,
    //       text: "teach to other student",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          AI Powered Career Coach for Job Preparation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {navigationItems.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors duration-150 text-gray-700 hover:text-gray-900"
                  >
                    <item.icon className="w-5 h-5 mr-3 text-blue-600" />
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <ChatBot />
        </div>
      </div>
    </div>
  );
}
