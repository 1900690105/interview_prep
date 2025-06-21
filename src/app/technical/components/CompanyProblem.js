"use client";
import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Building,
  Users,
  ArrowUpRight,
  Filter,
  PlusCircle,
  X,
} from "lucide-react";

function CompanyProblem() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingProblem, setIsAddingProblem] = useState(false);
  const [newProblem, setNewProblem] = useState({
    title: "",
    company: "",
    category: "Data Science",
    difficulty: "Medium",
    deadline: "",
    description: "",
    skills: [],
  });
  const [newSkill, setNewSkill] = useState("");

  // Example data - in a real app this would come from an API
  const problems = [
    {
      id: 1,
      title: "Optimize Supply Chain Management System",
      company: "LogiTech Solutions",
      category: "Data Science",
      difficulty: "Hard",
      deadline: "June 15, 2025",
      description:
        "Design an algorithm to optimize warehouse distribution networks across multiple regions while minimizing transportation costs and delivery times.",
      skills: ["Python", "Optimization", "Machine Learning"],
      participants: 12,
    },
    {
      id: 2,
      title: "Mobile App UI/UX Redesign",
      company: "FinanceHub",
      category: "Design",
      difficulty: "Medium",
      deadline: "May 30, 2025",
      description:
        "Create a more intuitive and accessible mobile banking interface that improves user engagement and satisfaction metrics.",
      skills: ["UI/UX", "Figma", "User Research"],
      participants: 24,
    },
    {
      id: 3,
      title: "Cybersecurity Threat Detection System",
      company: "SecureNet",
      category: "Security",
      difficulty: "Hard",
      deadline: "July 10, 2025",
      description:
        "Develop a real-time network monitoring system that can detect and classify unusual patterns indicating potential security breaches.",
      skills: ["Network Security", "Machine Learning", "Java"],
      participants: 8,
    },
    {
      id: 4,
      title: "E-commerce Recommendation Engine",
      company: "ShopWave",
      category: "Data Science",
      difficulty: "Medium",
      deadline: "June 5, 2025",
      description:
        "Build a product recommendation system that improves cross-selling opportunities based on user browsing and purchase history.",
      skills: ["Recommendation Systems", "Python", "SQL"],
      participants: 19,
    },
    {
      id: 5,
      title: "AI Chatbot for Customer Support",
      company: "TechEase",
      category: "Artificial Intelligence",
      difficulty: "Medium",
      deadline: "June 25, 2025",
      description:
        "Design and implement an AI-powered chatbot capable of handling tier-1 customer support queries with a high accuracy rate and human-like interaction.",
      skills: ["NLP", "Python", "TensorFlow"],
      participants: 15,
    },
    {
      id: 6,
      title: "Smart Waste Management System",
      company: "EcoTrack",
      category: "IoT",
      difficulty: "Hard",
      deadline: "July 18, 2025",
      description:
        "Develop an IoT-based solution to monitor and optimize waste collection routes based on real-time bin status and predictive analytics.",
      skills: ["IoT", "Embedded Systems", "Data Analytics"],
      participants: 10,
    },
    {
      id: 7,
      title: "Blockchain Voting System",
      company: "CivicChain",
      category: "Blockchain",
      difficulty: "Hard",
      deadline: "August 5, 2025",
      description:
        "Create a secure and transparent voting platform using blockchain to ensure integrity, anonymity, and real-time result verification.",
      skills: ["Blockchain", "Smart Contracts", "Solidity"],
      participants: 7,
    },
    {
      id: 8,
      title: "Personal Finance Tracker App",
      company: "BudgetBuddy",
      category: "Mobile Development",
      difficulty: "Easy",
      deadline: "May 28, 2025",
      description:
        "Build a mobile application to help users track their expenses, set budgets, and get insights into their financial habits.",
      skills: ["React Native", "Firebase", "UX Design"],
      participants: 22,
    },
    {
      id: 9,
      title: "Virtual Reality-Based Education Platform",
      company: "EduVerse",
      category: "VR/AR",
      difficulty: "Hard",
      deadline: "August 20, 2025",
      description:
        "Develop a VR platform for immersive learning experiences, focusing on STEM subjects for high school students.",
      skills: ["Unity", "C#", "3D Modeling"],
      participants: 6,
    },
    {
      id: 10,
      title: "Smart Health Monitoring Wearable",
      company: "MediTrack",
      category: "Healthcare",
      difficulty: "Medium",
      deadline: "July 2, 2025",
      description:
        "Design a wearable device that continuously monitors vital signs and alerts users and doctors of abnormalities in real-time.",
      skills: ["IoT", "Sensor Integration", "Mobile App"],
      participants: 11,
    },
    {
      id: 11,
      title: "Automated Resume Screening System",
      company: "HireRight",
      category: "AI/ML",
      difficulty: "Medium",
      deadline: "June 22, 2025",
      description:
        "Build a system that automatically filters resumes and scores candidates based on role-specific keywords and experience.",
      skills: ["NLP", "Python", "Data Processing"],
      participants: 18,
    },
    {
      id: 12,
      title: "Crowdsourced Disaster Response App",
      company: "ReliefNow",
      category: "Social Impact",
      difficulty: "Medium",
      deadline: "August 1, 2025",
      description:
        "Create a mobile app to connect volunteers, NGOs, and citizens for effective coordination during natural disasters.",
      skills: ["React Native", "Google Maps API", "Firebase"],
      participants: 14,
    },
    {
      id: 13,
      title: "Automated Code Review Tool",
      company: "DevSmart",
      category: "Developer Tools",
      difficulty: "Hard",
      deadline: "July 15, 2025",
      description:
        "Design a tool that performs static code analysis, provides suggestions, and flags potential bugs across multiple languages.",
      skills: ["JavaScript", "Python", "AST Parsing"],
      participants: 9,
    },
    {
      id: 14,
      title: "Voice-Controlled Smart Home Dashboard",
      company: "HomeSync",
      category: "IoT",
      difficulty: "Medium",
      deadline: "June 28, 2025",
      description:
        "Develop a centralized dashboard that allows users to control smart devices in their home using voice commands.",
      skills: ["IoT", "Speech Recognition", "Node.js"],
      participants: 13,
    },
    {
      id: 15,
      title: "Voice-Controlled Smart Home Dashboard web",
      company: "HomeSync",
      category: "Web Development",
      difficulty: "Hard",
      deadline: "June 12, 2025",
      description:
        "Develop a centralized dashboard that allows users to control smart devices in their home using voice commands.",
      skills: ["React", "Speech Recognition", "Node.js", "Express.js"],
      participants: 13,
    },
  ];

  const categories = [
    "All",
    "Data Science",
    "Design",
    "Security",
    "Web Development",
    "Mobile Development",
  ];

  const filteredProblems = problems.filter((problem) => {
    const matchesCategory =
      filterCategory === "All" || problem.category === filterCategory;
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
  };

  const handleBackToList = () => {
    setSelectedProblem(null);
    setIsAddingProblem(false);
  };

  const handleAddProblem = () => {
    setIsAddingProblem(true);
    setSelectedProblem(null);
  };

  const handleSubmitProblem = (e) => {
    e.preventDefault();
    // Here you would typically send the new problem to your backend API
    alert("Problem submitted successfully!");
    setIsAddingProblem(false);
    // In a real app, you would add the new problem to your problems array
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (
      newSkill.trim() !== "" &&
      !newProblem.skills.includes(newSkill.trim())
    ) {
      setNewProblem({
        ...newProblem,
        skills: [...newProblem.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setNewProblem({
      ...newProblem,
      skills: newProblem.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProblem({
      ...newProblem,
      [name]: value,
    });
  };

  return (
    <main className="max-w-6xl mx-auto p-6 bg-gray-50" role="main">
      <header
        className="flex justify-between items-center mb-8"
        aria-label="Page header"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2" id="page-title">
            Industry Problems
          </h1>
          <p className="text-gray-600" id="page-description">
            Select and solve real-world problems posted by companies
          </p>
        </div>
        <button
          onClick={handleAddProblem}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          aria-label="Add a new problem"
        >
          <PlusCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          <span>Add Problem</span>
        </button>
      </header>

      {!selectedProblem && !isAddingProblem ? (
        <>
          <section aria-labelledby="search-filter-heading" className="mb-6">
            <h2 id="search-filter-heading" className="sr-only">
              Search and Filter Problems
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <label htmlFor="search" className="sr-only">
                  Search problems
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search problems by title, company or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-describedby="page-description"
                />
              </div>

              <div className="relative w-full md:w-64">
                <label htmlFor="category-filter" className="sr-only">
                  Filter by category
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <select
                  id="category-filter"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  aria-label="Filter problems by category"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section aria-labelledby="problem-list-heading">
            <h2 id="problem-list-heading" className="sr-only">
              List of Industry Problems
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProblems.map((problem) => (
                <li
                  key={problem.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  role="region"
                  aria-labelledby={`problem-title-${problem.id}`}
                >
                  <article className="px-4 py-5 sm:p-6">
                    <header className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        problem.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : problem.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                        aria-label={`Difficulty: ${problem.difficulty}`}
                      >
                        {problem.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">
                        Due: {problem.deadline}
                      </span>
                    </header>
                    <h3
                      id={`problem-title-${problem.id}`}
                      className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2"
                    >
                      {problem.title}
                    </h3>
                    <div className="flex items-center mb-3">
                      <Building
                        className="h-4 w-4 text-gray-400 mr-1"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-600">
                        {problem.company}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {problem.description}
                    </p>
                    <div
                      className="flex flex-wrap gap-1 mb-4"
                      aria-label="Required skills"
                    >
                      {problem.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <footer className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span>{problem.participants} participants</span>
                      </div>
                      <button
                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => handleSelectProblem(problem)}
                        aria-label={`View details for ${problem.title}`}
                      >
                        View Details
                        <ArrowUpRight
                          className="ml-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      </button>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          {filteredProblems.length === 0 && (
            <div
              className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100"
              role="alert"
              aria-live="polite"
            >
              <p className="text-gray-500 mb-2">
                No problems found matching your criteria
              </p>
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={() => {
                  setSearchQuery("");
                  setFilterCategory("All");
                }}
                aria-label="Clear all filters"
              >
                Clear filters
              </button>
            </div>
          )}
        </>
      ) : (
        // Continue with similar accessibility structure for Add and Detail Views
        <></>
      )}
    </main>
  );
}

export default CompanyProblem;
