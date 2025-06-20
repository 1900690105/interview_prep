import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  BookOpen, // Not used in the original code, but kept for potential future use
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
  const [liveRegionMessage, setLiveRegionMessage] = useState(""); // State for ARIA live region

  // Refs for focus management
  const mainContentRef = useRef(null);
  const problemDetailRef = useRef(null);
  const addProblemFormRef = useRef(null);
  const searchInputRef = useRef(null); // Ref for search input

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
    "Artificial Intelligence",
    "IoT",
    "Blockchain",
    "Healthcare",
    "VR/AR",
    "AI/ML",
    "Social Impact",
    "Developer Tools",
  ];

  const filteredProblems = problems.filter((problem) => {
    const matchesCategory =
      filterCategory === "All" || problem.category === filterCategory;
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      ); // Search within skills too
    return matchesCategory && matchesSearch;
  });

  // Effect for focus management when view changes
  useEffect(() => {
    if (isAddingProblem && addProblemFormRef.current) {
      addProblemFormRef.current.focus();
    } else if (selectedProblem && problemDetailRef.current) {
      problemDetailRef.current.focus();
    } else if (!selectedProblem && !isAddingProblem && searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on search input when returning to list
    }
  }, [selectedProblem, isAddingProblem]);

  const handleSelectProblem = (problem) => {
    setSelectedProblem(problem);
    setLiveRegionMessage(`Viewing details for problem: ${problem.title}`);
  };

  const handleBackToList = () => {
    setSelectedProblem(null);
    setIsAddingProblem(false);
    setLiveRegionMessage("Returned to problem list.");
  };

  const handleAddProblem = () => {
    setIsAddingProblem(true);
    setSelectedProblem(null);
    setLiveRegionMessage("Navigated to Add New Problem form.");
  };

  const handleSubmitProblem = (e) => {
    e.preventDefault();
    // In a real app, this would send the new problem to your backend API
    setLiveRegionMessage("Problem submitted successfully!");
    // For this example, we'll just go back to the list
    setIsAddingProblem(false);
    // You might want to clear the form or add the new problem to the 'problems' state if it's managed client-side
    setNewProblem({
      title: "",
      company: "",
      category: "Data Science",
      difficulty: "Medium",
      deadline: "",
      description: "",
      skills: [],
    });
    setNewSkill("");
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (
      newSkill.trim() !== "" &&
      !newProblem.skills.includes(newSkill.trim())
    ) {
      setNewProblem((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setLiveRegionMessage(`Skill "${newSkill.trim()}" added.`);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setNewProblem((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
    setLiveRegionMessage(`Skill "${skillToRemove}" removed.`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProblem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="sr-only-focusable skip-link">
        Skip to main content
      </a>

      {/* Live Region for ARIA announcements */}
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        {liveRegionMessage}
      </div>

      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Industry Problems
          </h1>
          <p className="text-gray-600">
            Select and solve real-world problems posted by companies
          </p>
        </div>
        <button
          onClick={handleAddProblem}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Add a new problem"
        >
          <PlusCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          Add Problem
        </button>
      </header>

      <main id="main-content" ref={mainContentRef} tabIndex="-1">
        {" "}
        {/* Main content region for skip link target */}
        {!selectedProblem && !isAddingProblem ? (
          <section aria-labelledby="problem-list-heading">
            <h2 id="problem-list-heading" className="sr-only">
              Available Problems
            </h2>
            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <label htmlFor="search-problems" className="sr-only">
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
                  id="search-problems"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search problems by title, company or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search problems by title, company, or keywords"
                  ref={searchInputRef} // Attach ref here
                />
              </div>
              <div className="relative w-full md:w-64">
                <label htmlFor="filter-category" className="sr-only">
                  Filter by category
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <select
                  id="filter-category"
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

            {/* Problems List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProblems.length > 0 ? (
                filteredProblems.map((problem) => (
                  <article
                    key={problem.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col"
                    onClick={() => handleSelectProblem(problem)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleSelectProblem(problem);
                      }
                    }}
                    tabIndex="0" // Make the card keyboard focusable
                    role="listitem" // Indicate it's an item in a list (implicitly by grid)
                    aria-label={`Problem: ${problem.title} from ${problem.company}, Difficulty: ${problem.difficulty}, Due: ${problem.deadline}`}
                  >
                    <div className="px-4 py-5 sm:p-6 flex-grow">
                      <div className="flex items-center justify-between mb-3">
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
                          Due:{" "}
                          <time dateTime={problem.deadline}>
                            {problem.deadline}
                          </time>
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
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
                    </div>
                    <div className="px-4 py-4 sm:px-6 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span>{problem.participants} participants</span>
                      </div>
                      {/* Button to view details within the card, ensuring it's focusable */}
                      <button
                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card's onClick from firing again
                          handleSelectProblem(problem);
                        }}
                        aria-label={`View details for ${problem.title}`}
                      >
                        View Details
                        <ArrowUpRight
                          className="ml-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100 col-span-full">
                  <p className="text-gray-500 mb-2">
                    No problems found matching your criteria
                  </p>
                  <button
                    className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => {
                      setSearchQuery("");
                      setFilterCategory("All");
                      setLiveRegionMessage("Filters cleared.");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>
        ) : isAddingProblem ? (
          /* Add New Problem Form */
          <section
            ref={addProblemFormRef}
            tabIndex="-1" // Make focusable for programmatic focus
            aria-labelledby="add-problem-heading"
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="px-6 py-8">
              <button
                className="text-blue-600 flex items-center mb-6 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleBackToList}
                aria-label="Back to problem list"
              >
                ← Back to problem list
                <span className="sr-only">
                  Go back to the main list of problems
                </span>
              </button>

              <h2
                id="add-problem-heading"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Add New Problem
              </h2>

              <form
                onSubmit={handleSubmitProblem}
                aria-describedby="add-problem-form-description"
              >
                <p id="add-problem-form-description" className="sr-only">
                  Fill out this form to add a new industry problem. All fields
                  marked with an asterisk are required.
                </p>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Problem Title{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      aria-required="true"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newProblem.title}
                      onChange={handleChange}
                      placeholder="Enter a descriptive title for the problem"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      aria-required="true"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newProblem.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Category{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        aria-required="true"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newProblem.category}
                        onChange={handleChange}
                        aria-label="Select problem category"
                      >
                        {categories
                          .filter((c) => c !== "All") // 'All' is not a valid category for adding
                          .map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="difficulty"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Difficulty Level{" "}
                        <span className="text-red-500" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <select
                        id="difficulty"
                        name="difficulty"
                        required
                        aria-required="true"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newProblem.difficulty}
                        onChange={handleChange}
                        aria-label="Select difficulty level"
                      >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="deadline"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Submission Deadline{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      required
                      aria-required="true"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newProblem.deadline}
                      onChange={handleChange}
                      aria-description="Enter the submission deadline for the problem"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Problem Description{" "}
                      <span className="text-red-500" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      required
                      aria-required="true"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newProblem.description}
                      onChange={handleChange}
                      placeholder="Provide a detailed description of the problem"
                      aria-description="Detailed explanation of the problem statement and requirements"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="new-skill-input"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Required Skills
                    </label>
                    <ul
                      className="flex flex-wrap gap-2 mb-2"
                      aria-live="polite"
                      aria-atomic="false"
                    >
                      {newProblem.skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg flex items-center"
                          role="listitem"
                          aria-label={`Skill: ${skill}. Press delete to remove.`}
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-0.5"
                            aria-label={`Remove skill ${skill}`}
                          >
                            <X className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">
                              Remove skill {skill}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                    <form onSubmit={handleAddSkill} className="flex gap-2">
                      <input
                        type="text"
                        id="new-skill-input"
                        className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a required skill, then press Add"
                        aria-label="Add a new required skill"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Add skill to list"
                      >
                        Add
                      </button>
                    </form>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={handleBackToList}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Submit Problem
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        ) : (
          /* Problem Detail View */
          <section
            ref={problemDetailRef}
            tabIndex="-1" // Make focusable for programmatic focus
            aria-labelledby="problem-detail-heading"
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="px-6 py-8">
              <button
                className="text-blue-600 flex items-center mb-6 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleBackToList}
                aria-label="Back to problem list"
              >
                ← Back to problem list
                <span className="sr-only">
                  Go back to the main list of problems
                </span>
              </button>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2
                  id="problem-detail-heading"
                  className="text-2xl font-bold text-gray-900 mb-2 md:mb-0"
                >
                  {selectedProblem.title}
                </h2>
                <div className="flex items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium mr-3
                    ${
                      selectedProblem.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : selectedProblem.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                    aria-label={`Difficulty: ${selectedProblem.difficulty}`}
                  >
                    {selectedProblem.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">
                    Due:{" "}
                    <time dateTime={selectedProblem.deadline}>
                      {selectedProblem.deadline}
                    </time>
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <Building
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-700 font-medium">
                  {selectedProblem.company}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Problem Statement
                </h3>
                <div
                  className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  aria-labelledby="problem-statement-heading" // Can link to an ID on h3 if available, or just describe
                >
                  <p id="problem-statement-heading" className="sr-only">
                    Problem Description
                  </p>
                  <p className="text-gray-700">{selectedProblem.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
                <div
                  className="flex flex-wrap gap-2"
                  aria-label="List of required skills"
                >
                  {selectedProblem.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center mb-8">
                <Users
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                <span className="text-gray-600">
                  {selectedProblem.participants} students are working on this
                  problem
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Accept Challenge
                </button>
                <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Save for Later
                </button>
                <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Contact Company
                </button>
                <button
                  onClick={() => {
                    // In a real app, this would likely be handled by a router
                    setLiveRegionMessage("Navigating to courses page.");
                    window.location.href = "/course";
                  }}
                  className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors flex-grow sm:flex-grow-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Go for Courses
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default CompanyProblem;
