"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown } from "lucide-react";

// Fallback data in case external data files are missing
const defaultMegaMenuData = [
  {
    title: "Planning",
    items: [
      {
        name: "Department-wise Role",
        href: "/careerplanning?page=DepartmentJobRoles",
      },
      { name: "Check my Role", href: "/careerplanning/checkcareer" },
      { name: "Role Roadmap", href: "/careerplanning?page=RoleRoadMap" },
      { name: "Course Roadmap", href: "/careerplanning?page=CourseRoadmap" },
      {
        name: "List Of 100 Companies",
        href: "/careerplanning?page=TopCompany",
      },
      {
        name: "Exam for Jobs",
        href: "/careerplanning?page=CompetitiveExamsDashboard",
      },
    ],
  },
  {
    title: "Learning",
    items: [
      { name: "Courses", href: "/learn/course" },
      { name: "Created Courses", href: "/learn?page=CreatedCourses" },
      { name: "Projects", href: "/learn?page=Projects" },
      { name: "Soft Skills", href: "/learn?page=SoftSkill" },
      { name: "Recall", href: "/learn/recall" },
      { name: "30 days Preparation", href: "/learn?page=DayRemains" },
      { name: "Tool Company Use", href: "/learn?page=ToolsCompanyUse" },
      { name: "Check my Resume", href: "/learn?page=ResumeExtractor" },
    ],
  },
  {
    title: "Profile Building",
    items: [
      { name: "Github Profile", href: "/profiling?page=githubProfile" },
      { name: "LinkedIn Profile", href: "/profiling?page=linkedinProfile" },
      { name: "Cold Mail", href: "/profiling?page=ColdMail" },
      { name: "Resume", href: "/profiling/resume" },
      { name: "Cover Letter", href: "/profiling?page=CoverLetter" },
    ],
  },
  {
    title: "Pre-Search",
    items: [
      { name: "Search Jobs", href: "/prejobsearch?page=Jobs" },
      { name: "Job Portals", href: "/prejobsearch?page=JobPortals" },
      { name: "Hiring Agency", href: "/prejobsearch?page=Agency" },
      { name: "Job Scam", href: "/prejobsearch?page=JobScam" },
      { name: "Ghost Jobs", href: "/prejobsearch?page=GhostJobs" },
      { name: "Job Terms", href: "/prejobsearch?page=JobsTerms" },
      { name: "Job Laws", href: "/prejobsearch?page=Laws" },
      {
        name: "Interview Followup",
        href: "/prejobsearch?page=InterviewFollowupForm",
      },
      { name: "Reference Message", href: "/prejobsearch?page=Referral" },
    ],
  },
  {
    title: "Technical",
    items: [
      { name: "Soft Skill Interview", href: "/technical/softskill" },
      { name: "Aptitude Exam", href: "/technical?page=AptitudeExam" },
      { name: "Mock Interview", href: "/technical/mockinterview" },
      { name: "Coding Round", href: "/technical?page=CodingRound" },
      {
        name: "College Teacher Interview",
        href: "/technical?page=StartInterview",
      },
      { name: "Common Questions", href: "/technical?page=CommanQuestion" },
      { name: "Group Discussion", href: "/technical?page=GroupDiscussion" },
    ],
  },
];

const defaultCompanyMenuData = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
];

// Try to import external data, fallback to defaults
let megaMenuData, companyMenuData;

try {
  // Attempt to import external data
  const { DataCompanyMenu, DatamegaMenuData } = require("../data/MegaMenu");
  megaMenuData = DatamegaMenuData || defaultMegaMenuData;
  companyMenuData = DataCompanyMenu || defaultCompanyMenuData;
} catch (error) {
  // Use fallback data if import fails
  megaMenuData = defaultMegaMenuData;
  companyMenuData = defaultCompanyMenuData;
  console.warn(
    "Could not load external menu data, using defaults:",
    error.message
  );
}

const MegaMenuContent = React.memo(({ isMobile = false, onLinkClick }) => (
  <div className="p-6">
    <div
      className={`grid gap-6 ${
        isMobile ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 md:grid-cols-5"
      }`}
    >
      {megaMenuData.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-600 block py-1 transition-colors"
                  onClick={onLinkClick}
                  aria-label={`Go to ${item.name}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
));

MegaMenuContent.displayName = "MegaMenuContent";

const CompanyDropdownMenu = React.memo(({ isMobile = false, onLinkClick }) => (
  <div
    className={`${
      isMobile
        ? "bg-gray-50 rounded-md mt-2 pl-4 pr-2 pb-2"
        : "bg-white rounded-lg shadow-lg border border-gray-200 p-4"
    }`}
  >
    <ul className="space-y-2">
      {companyMenuData.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="text-gray-600 hover:text-indigo-600 block py-2 transition-colors"
            onClick={onLinkClick}
            aria-label={`Go to ${item.name}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
));

CompanyDropdownMenu.displayName = "CompanyDropdownMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

  const megaMenuRef = useRef(null);
  const servicesRef = useRef(null);
  const companyMenuRef = useRef(null);
  const companyRef = useRef(null);

  // Get brand name with fallback
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || "TechSolutions";

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        setIsMegaMenuOpen(false);
        setIsCompanyMenuOpen(false);
      }
      return !prev;
    });
  }, []);

  const toggleMegaMenu = useCallback(() => {
    setIsMegaMenuOpen((prev) => !prev);
    setIsCompanyMenuOpen(false);
  }, []);

  const toggleCompanyMenu = useCallback(() => {
    setIsCompanyMenuOpen((prev) => !prev);
    setIsMegaMenuOpen(false);
  }, []);

  const closeMegaMenu = useCallback(() => {
    setIsMegaMenuOpen(false);
  }, []);

  const closeCompanyMenu = useCallback(() => {
    setIsCompanyMenuOpen(false);
  }, []);

  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsCompanyMenuOpen(false);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsMegaMenuOpen(false);
      }

      if (
        companyMenuRef.current &&
        !companyMenuRef.current.contains(event.target) &&
        companyRef.current &&
        !companyRef.current.contains(event.target)
      ) {
        setIsCompanyMenuOpen(false);
      }
    };

    if (isMegaMenuOpen || isCompanyMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMegaMenuOpen, isCompanyMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    if (isMenuOpen || isMegaMenuOpen || isCompanyMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMenuOpen, isMegaMenuOpen, isCompanyMenuOpen, closeAllMenus]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <Link
                href="/"
                title="Go to homepage"
                className="flex items-center cursor-pointer"
                aria-label="Go to homepage"
              >
                <span className="text-xl md:text-2xl font-bold text-indigo-600 capitalize">
                  {brandName}
                  <span className="text-gray-600 font-normal text-xs md:text-sm ml-1">
                    Beta
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-4 lg:space-x-8"
              role="navigation"
            >
              <Link
                href="/home"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/students?page=AuthPortal"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                For Students
              </Link>

              {/* For Company with Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onClick={toggleCompanyMenu}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCompanyMenu();
                    }
                  }}
                  tabIndex={0}
                  className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                  aria-expanded={isCompanyMenuOpen}
                  aria-haspopup="true"
                  aria-label="Company services menu"
                >
                  For Company
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isCompanyMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Desktop Company Dropdown */}
                {isCompanyMenuOpen && (
                  <div
                    ref={companyMenuRef}
                    className="absolute top-full left-0 mt-2 w-64 z-50"
                    role="menu"
                    aria-label="Company services"
                  >
                    <CompanyDropdownMenu onLinkClick={closeCompanyMenu} />
                  </div>
                )}
              </div>

              {/* Services with Mega Menu */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleMegaMenu}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleMegaMenu();
                    }
                  }}
                  className="flex items-center text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                  aria-label="Services menu"
                >
                  Services
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Desktop Mega Menu Dropdown */}
                {isMegaMenuOpen && (
                  <div
                    ref={megaMenuRef}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    role="menu"
                    aria-label="All services"
                  >
                    <MegaMenuContent onLinkClick={closeMegaMenu} />
                  </div>
                )}
              </div>

              <Link
                href="/job-board"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Job Board
              </Link>
              <Link
                href="/home/about"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition-colors p-2"
                aria-label={
                  isMenuOpen ? "Close mobile menu" : "Open mobile menu"
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {!isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden border-t border-gray-200 bg-white"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/home"
                aria-label="Go to home page"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/students?page=AuthPortal"
                aria-label="Student portal login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                onClick={closeAllMenus}
              >
                For Students
              </Link>

              {/* Mobile For Company Menu */}
              <div className="px-3 py-2">
                <button
                  onClick={toggleCompanyMenu}
                  aria-label="Company services menu"
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                  aria-expanded={isCompanyMenuOpen}
                >
                  For Company
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isCompanyMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Mobile Company Dropdown */}
                {isCompanyMenuOpen && (
                  <CompanyDropdownMenu
                    isMobile={true}
                    onLinkClick={closeAllMenus}
                  />
                )}
              </div>

              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <button
                  onClick={toggleMegaMenu}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                  aria-expanded={isMegaMenuOpen}
                  aria-label="All services menu"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Mobile Services Dropdown */}
                {isMegaMenuOpen && (
                  <div className="mt-2 pl-4 pr-2 pb-2 bg-gray-50 rounded-md">
                    <MegaMenuContent
                      isMobile={true}
                      onLinkClick={closeAllMenus}
                    />
                  </div>
                )}
              </div>

              <Link
                href="/job-board"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                onClick={closeAllMenus}
                aria-label="Search for jobs"
              >
                Job Board
              </Link>
              <Link
                href="/home/about"
                aria-label="Learn about our company"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                onClick={closeAllMenus}
              >
                About Us
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 px-4">
                <Link
                  href="/login"
                  aria-label="Login to your account"
                  className="text-gray-700 hover:text-indigo-600 font-medium text-base px-3 py-2 transition-colors"
                  onClick={closeAllMenus}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  aria-label="Create new account"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={closeAllMenus}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer div to prevent content from being hidden behind fixed header */}
      <div className="h-16" aria-hidden="true"></div>
    </>
  );
}

export default Header;
