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
import ChatBot from "../components/ChatBot";

export default function Home() {
  const navigationItems = [
    {
      category: "Phase 1 :Career Planning",
      items: [
        {
          href: " /careerplanning?page=DepartmentJobRoles",
          icon: Briefcase,
          text: "Department-wise Job Roles",
        },
        {
          href: " /careerplanning/checkcareer",
          icon: Briefcase,
          text: "Check my Role",
        },
        {
          href: " /careerplanning?page=RoleRoadMap",
          icon: Map,
          text: "Role Roadmap",
        },
        {
          href: "/careerplanning?page=CourseRoadmap",
          icon: Map,
          text: "Course Roadmap",
        },
        {
          href: " /careerplanning?page=TopCompany",
          icon: PenTool,
          text: "List Of 100 Companies",
        },
        {
          href: " /careerplanning?page=CompetitiveExamsDashboard",
          icon: PenTool,
          text: "Exam for Jobs",
        },
      ],
    },
    {
      category: "Phase 2 :Learning",
      items: [
        {
          href: "/learn/course",
          icon: GraduationCap,
          text: "Courses",
        },
        {
          href: "/learn?page=CreateCourse",
          icon: FolderGit2,
          text: "Created Courses",
        },
        {
          href: " /learn?page=Projects",
          icon: FolderGit2,
          text: "Projects",
        },
        // {
        //   href: " /page?page=Certificate",
        //   icon: BookmarkCheck,
        //   text: "Certification",
        // },
        {
          href: " /learn?page=SoftSkill",
          icon: BookmarkCheck,
          text: "Soft Skills",
        },
        {
          href: "/learn/recall",
          icon: BookOpen,
          text: "Recall",
        },
        {
          href: " /learn?page=DayRemains",
          icon: BookOpenCheck,
          text: "30 days preparation",
        },
        {
          href: " /learn?page=ToolsCompanyUse",
          icon: BookOpenCheck,
          text: "Tool company use",
        },
        {
          href: "/learn?page=ResumeExtractor",
          icon: BookOpenCheck,
          text: "Check my Resume",
        },
      ],
    },
    {
      category: "Phase 3: Profile Building/Showcase",
      items: [
        {
          href: " /profiling?page=githubProfile",
          icon: Github,
          text: "Github Profile",
        },
        {
          href: " /profiling?page=linkedinProfile",
          icon: Linkedin,
          text: "LinkedIn Profile",
        },
        { href: " /profiling?page=ColdMail", icon: Mail, text: "Cold Mail" },
        {
          href: "/profiling/resume",
          icon: FileText,
          text: "Resume",
        },
        {
          href: " /profiling?page=CoverLetter",
          icon: FileCheck,
          text: "Cover Letter",
        },
      ],
    },
    {
      category: "Phase 4 :Pre-Search Knowledge",
      items: [
        {
          href: " /prejobsearch?page=Jobs",
          icon: Briefcase,
          text: "Search Jobs",
        },
        {
          href: " /prejobsearch?page=JobPortals",
          icon: Globe,
          text: "Job Portals",
        },
        {
          href: " /prejobsearch?page=Agency",
          icon: Building,
          text: "Hiring Agency",
        },

        {
          href: " /prejobsearch?page=JobScam",
          icon: AlertTriangle,
          text: "Job Scam",
        },
        {
          href: "/prejobsearch?page=GhostJobs",
          icon: Ghost,
          text: "Ghost Jobs",
        },
        {
          href: "/prejobsearch?page=JobsTerms",
          icon: BookmarkCheck,
          text: "Job Terms",
        },
        { href: "/prejobsearch?page=Laws", icon: Scale, text: "Job Laws" },
        {
          href: " /prejobsearch?page=InterviewFollowupForm",
          icon: FaPaperPlane,
          text: "Interview Followup Mail",
        },
        {
          href: "/prejobsearch?page=Referral",
          icon: PenTool,
          text: "Reference message",
        },
        // {
        //   href: "/rolecheck",
        //   icon: PenTool,
        //   text: "Check for role chances",
        // },
      ],
    },
    {
      category: "Phase 5 :Technical Assessment",
      items: [
        {
          href: "/technical/softskill",
          icon: Brain,
          text: "Soft Skill Interview",
        },

        {
          href: " /technical?page=AptitudeExam",
          icon: FileSpreadsheet,
          text: "Aptitude Exam",
        },

        {
          href: "/technical/mockinterview",
          icon: PenTool,
          text: "Mock Interview",
        },

        {
          href: " /technical?page=CodingRound",
          icon: Code,
          text: "Coding Round",
        },
        {
          href: " /technical?page=StartInterview",
          icon: BookOpen,
          text: "College Teacher Interview",
        },
        {
          href: " /technical?page=CommanQuestion",
          icon: MessageSquare,
          text: "Common Questions",
        },
        {
          href: " /technical?page=GroupDiscussion",
          icon: Users,
          text: "Group Discussion",
        },
      ],
    },
    {
      category: "For Companies",
      items: [
        {
          href: "/company?page=HiringTalent",
          icon: Brain,
          text: "Hire Talents",
        },
        {
          href: "/company?page=TakeAssisment",
          icon: FileSpreadsheet,
          text: "Arrange Assessment",
        },
        {
          href: "/company?page=CompanyProblem",
          icon: FileSpreadsheet,
          text: "Company Problem",
        },
      ],
    },
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
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
            AI Powered Career Coach for Job Preparation
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </>
  );
}
