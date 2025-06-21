"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  // Close mega menu when clicking outside
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center"
              onClick={() => {
                window.location.href = "/home";
              }}
            >
              <span className="text-xl md:text-2xl font-bold text-indigo-600">
                CareerLaunch
                <span className="text-gray-600 font-normal text-xs md:text-sm">
                  Beta
                </span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link
                href={"/"}
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                For Student
              </Link>
              <Link
                href={"/home/company"}
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                For Company
              </Link>

              {/* Services with Mega Menu */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={toggleMegaMenu}
                  className="flex items-center text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transform transition-transform ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mega Menu Dropdown */}
                {isMegaMenuOpen && (
                  <div
                    ref={megaMenuRef}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Career Development */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Career Development
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/services/resume-builder"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Resume Builder
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/interview-prep"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Interview Preparation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/career-coaching"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Career Coaching
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/skill-assessment"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Skill Assessment
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Job Matching */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Job Matching
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/services/job-search"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Smart Job Search
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/job-alerts"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Job Alerts
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/company-insights"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Company Insights
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/salary-insights"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Salary Insights
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Learning & Growth */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Learning & Growth
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/services/online-courses"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Online Courses
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/certifications"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Certifications
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/mentorship"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Mentorship Program
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/networking"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Networking Events
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* For Companies */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            For Companies
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/services/talent-acquisition"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Talent Acquisition
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/recruitment-solutions"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Recruitment Solutions
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/employer-branding"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Employer Branding
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/campus-recruitment"
                                className="text-gray-600 hover:text-indigo-600 block py-1"
                              >
                                Campus Recruitment
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Featured Service */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-indigo-900">
                                Premium Career Package
                              </h4>
                              <p className="text-indigo-700 text-sm">
                                Complete career transformation with 1-on-1
                                coaching
                              </p>
                            </div>
                            <Link
                              href="/services/premium"
                              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm font-medium"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        For Companies
                      </h4>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/services/talent-acquisition"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Talent Acquisition
                        </Link>
                        <Link
                          href="/services/recruitment-solutions"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Recruitment Solutions
                        </Link>
                        <Link
                          href="/services/employer-branding"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Employer Branding
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Job Board
              </a>
              <Link
                href={"/home/about"}
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                About Us
              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium"
              >
                Log In
              </a>
              <a
                href="#"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                {!isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                For Student
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                For Company
              </a>

              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <button
                  onClick={toggleMegaMenu}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-indigo-600"
                >
                  Services
                  <svg
                    className={`h-4 w-4 transform transition-transform ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isMegaMenuOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <div className="py-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Career Development
                      </h4>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/services/resume-builder"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Resume Builder
                        </Link>
                        <Link
                          href="/services/interview-prep"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Interview Prep
                        </Link>
                        <Link
                          href="/services/career-coaching"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Career Coaching
                        </Link>
                      </div>
                    </div>
                    <div className="py-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Job Matching
                      </h4>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/services/job-search"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Smart Job Search
                        </Link>
                        <Link
                          href="/services/job-alerts"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Job Alerts
                        </Link>
                        <Link
                          href="/services/company-insights"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Company Insights
                        </Link>
                      </div>
                    </div>
                    <div className="py-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Learning & Growth
                      </h4>
                      <div className="space-y-1 pl-2">
                        <Link
                          href="/services/online-courses"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Online Courses
                        </Link>
                        <Link
                          href="/services/certifications"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Certifications
                        </Link>
                        <Link
                          href="/services/mentorship"
                          className="block text-sm text-gray-600 hover:text-indigo-600"
                        >
                          Mentorship
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                Job Board
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                About Us
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 px-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-indigo-600 font-medium text-base px-3 py-2"
                >
                  Log In
                </a>
                <a
                  href="#"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-base"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
