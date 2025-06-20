"use client";
import React, { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  FileText,
  Award,
  BookOpen,
  Code,
  Plus,
  Trash2,
  Download,
  Eye,
  Sparkles,
} from "lucide-react";
import {
  AiExperienceSection,
  AiKeyWordsFinder,
  AiProfileSummary,
  AiProjectSection,
  AiSkillSection,
} from "../../../../config/AllAiModels";
import SideBar from "./components/SideBar";
import MainContaint from "./components/MainContaint";

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState(null);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
  });

  const [profileSummary, setProfileSummary] = useState({
    jobRole: "",
    skillsMatch: "",
  });

  const [skills, setSkills] = useState({
    skillDescription: "",
    skillKeywords: "",
    skill: "",
  });

  const [experiences, setExperiences] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      projectName: "",
      url: "",
      timeframe: "",
      tool: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      location: "",
      graduationYear: "",
      achievements: "",
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      certification_name: "",
      issuingOrganization: "",
      completionDate: "",
    },
  ]);

  const [courses, setCourses] = useState([
    {
      course_name: "",
      organizationName: "",
      completedDate: "",
    },
  ]);

  const updatePersonalInfo = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const updateProfileSummary = (field, value) => {
    setProfileSummary((prev) => ({ ...prev, [field]: value }));
  };

  const updateSkills = (field, value) => {
    setSkills((prev) => ({ ...prev, [field]: value }));
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const updateCertification = (index, field, value) => {
    const updated = [...certifications];
    updated[index][field] = value;
    setCertifications(updated);
  };

  const updateCourse = (index, field, value) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { company: "", position: "", startDate: "", endDate: "" },
    ]);
  };

  const removeExperience = (index) => {
    if (experiences.length > 1) {
      setExperiences(experiences.filter((_, i) => i !== index));
    }
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { projectName: "", url: "", timeframe: "", tool: "", description: "" },
    ]);
  };

  const removeProject = (index) => {
    if (projects.length > 1) {
      setProjects(projects.filter((_, i) => i !== index));
    }
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        location: "",
        graduationYear: "",
        achievements: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    if (education.length > 1) {
      setEducation(education.filter((_, i) => i !== index));
    }
  };

  const addCertification = () => {
    setCertifications([
      ...certifications,
      { certification_name: "", issuingOrganization: "", completionDate: "" },
    ]);
  };

  const removeCertification = (index) => {
    if (certifications.length > 1) {
      setCertifications(certifications.filter((_, i) => i !== index));
    }
  };

  const addCourse = () => {
    setCourses([
      ...courses,
      { course_name: "", organizationName: "", completedDate: "" },
    ]);
  };

  const removeCourse = (index) => {
    if (courses.length > 1) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  const generateResume = async () => {
    setLoading(true);
    const resumeData = {
      personalInfo,
      profileSummary,
      experiences,
      projects,
      education,
      certifications,
      courses,
      skills,
    };
    const alldata = [resumeData];

    const profilepropt = `generate a professional 2 profile summary for job roll ${profileSummary.jobRole} as a fresher, starting with actionable adjective word falling with job roll i am applying for after that add the skill that help to achieve goal.My skill:${skills.skilllevel}.you can use keywords from:${skills.skillKeywords}.in json formate.`;
    try {
      const result = await AiProfileSummary.sendMessage(profilepropt);
      const responseText = result.response.text();
      const resultjson = JSON.parse(responseText);
      localStorage.setItem("profileSummary", JSON.stringify(resultjson));
      setSummary(resultjson);
      console.log(responseText);
      setHide(true);
      alldata.push(resultjson);
    } catch (error) {
      console.log(error);
    }

    const skillprompt = `identify the job description and my skills.suggest me 5-10 skills that i should include in my resume. tailor these skills to my actual experience level and quantify my achievement.description:${skills.skillDescription}.My skills:${skills.skilllevel}.keywords to be use:${skills.skillKeywords}.in json formate.`;
    try {
      const result = await AiSkillSection.sendMessage(skillprompt);
      const responseText = result.response.text();
      console.log(responseText);
      const jsonresponse = JSON.parse(responseText);
      localStorage.setItem("skills", JSON.stringify(jsonresponse));
      console.log(jsonresponse);
      alldata.push(jsonresponse);
    } catch (error) {
      console.log(error);
    }

    try {
      const combinedResponsesexperience = [];
      for (let i = 0; i < resumeData.experiences.length; i++) {
        const experiences = resumeData.experiences[i];
        const experiencePrompt = `
          Write an experience in the internship section, including position, company name, date, bullet point responsibilities, quantify accomplishments/achievements, and skills developed.
          Position: ${experiences.position},
          Company: ${experiences.company},
          Date: ${experiences.startDate} - ${experiences.endDate},
          Keywords to be used: ${skills.skillKeywords}.
          Output in JSON format.
        `;
        // console.log(experiencePrompt);

        const result = await AiExperienceSection.sendMessage(experiencePrompt);
        const responseText = await result.response.text();
        combinedResponsesexperience.push(JSON.parse(responseText));
      }
      // Store the combined result in localStorage
      localStorage.setItem(
        "combinedResponsesexperience",
        JSON.stringify(combinedResponsesexperience)
      );
      console.log("All experience sections have been stored in localStorage.");
      alldata.push(combinedResponsesexperience);
    } catch (error) {
      console.error(
        "An error occurred while generating experience sections:",
        error
      );
    }

    try {
      const combinedResponsesproject = [];
      for (let i = 0; i < resumeData.projects.length; i++) {
        const projects = resumeData.projects[i];
        const projectpromopt = `write a project section, include title, timeframe, tools/technology used, bullet point objective or problem statement, your role: contributions and responsibilities, result/achievements: quantify the impact.project name:${project.projectName},timeframe:${project.timeframe},tools/technology:${project.tools}.in json formate.`;
        const result = await AiProjectSection.sendMessage(projectpromopt);
        const responseText = await result.response.text();
        combinedResponsesproject.push(JSON.parse(responseText));
      }

      localStorage.setItem(
        "combinedResponsesproject",
        JSON.stringify(combinedResponsesproject)
      );
      console.log("All project sections have been stored in localStorage.");
      alldata.push(combinedResponsesproject);
    } catch (error) {
      console.log(error);
    }

    alert("Resume data has been logged to the console!");
    setLoading(false);
    localStorage.setItem("resumeData", JSON.stringify(alldata));
    window.location.href = "/profiling/resume/prev";
  };

  function removeExtraSpaces(paragraph) {
    return paragraph
      .trim() // Remove leading and trailing white spaces
      .replace(/\s+/g, " "); // Replace multiple spaces with a single space
  }
  const findKeywords = async (desc) => {
    const keyword = removeExtraSpaces(desc);
    const prompt = `I have the following job description:${keyword}.Analyze the description and provide a list of keywords, skills, qualifications, tools, and technologies mentioned that are most relevant for tailoring an ATS-friendly resume. Categorize the keywords under the following headings:,Technical_Skills,Soft_Skills,Job_Specific_Keywords,Certifications_Education,Tools_Software,Action_Verbs_Power_WordsEnsure the keywords are directly extracted from the job description and focus on making the resume optimized for ATS parsing. Provide the output in a structured, easy-to-use format.in json formate.`;
    try {
      const result = await AiKeyWordsFinder.sendMessage(prompt);
      const responseText = await result.response.text();
      const keywords = JSON.parse(responseText);
      setKeywords(keywords);
      console.log(keywords);
    } catch (error) {
      console.error("An error occurred while finding keywords:", error);
    }
  };

  const sections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Sparkles },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "courses", label: "Courses", icon: BookOpen },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={personalInfo.name}
                  onChange={(e) => updatePersonalInfo("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City, State"
                  value={personalInfo.location}
                  onChange={(e) =>
                    updatePersonalInfo("location", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="text"
                  placeholder="linkedin.com/in/johndoe"
                  value={personalInfo.linkedin}
                  onChange={(e) =>
                    updatePersonalInfo("linkedin", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        );

      case "summary":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Job Role
              </label>
              <input
                type="text"
                placeholder="e.g., Senior Software Engineer"
                value={profileSummary.jobRole}
                onChange={(e) =>
                  updateProfileSummary("jobRole", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Professional Summary
              </label>
              <textarea
                placeholder="Write a brief summary highlighting your key skills and experience that match the job role..."
                value={profileSummary.skillsMatch}
                onChange={(e) =>
                  updateProfileSummary("skillsMatch", e.target.value)
                }
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description
              </label>
              <textarea
                placeholder="Paste the job description here to extract relevant keywords..."
                value={skills.skillDescription}
                onChange={(e) =>
                  updateSkills("skillDescription", e.target.value)
                }
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
              <button
                onClick={() => findKeywords(skills.skillDescription)}
                disabled={loading || !skills.skillDescription.trim()}
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Extract Keywords
                  </>
                )}
              </button>
            </div>

            {keywords && (
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Extracted Keywords
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(keywords).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h4 className="font-medium text-gray-700 capitalize">
                        {category.replace(/_/g, " ")}
                      </h4>
                      <div className="space-y-1">
                        {items.map((item, index) => (
                          <div
                            key={index}
                            className="text-sm text-gray-600 bg-white px-2 py-1 rounded"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  💡 Select relevant keywords to include in your resume
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Keywords
              </label>
              <textarea
                placeholder="Enter comma-separated keywords that match your skills and the job requirements..."
                value={skills.skillKeywords}
                onChange={(e) => updateSkills("skillKeywords", e.target.value)}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills with Proficiency Level
              </label>
              <textarea
                placeholder="e.g., JavaScript-Advanced, React-Intermediate, Python-Beginner"
                value={skills.skill}
                onChange={(e) => updateSkills("skill", e.target.value)}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use comma (,) to separate skills. Format: Skill-Level
              </p>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Work Experience
              </h3>
              <p className="text-sm text-gray-500">(Most recent first)</p>
            </div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">
                    Experience {index + 1}
                  </h4>
                  {experiences.length > 1 && (
                    <button
                      onClick={() => removeExperience(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={exp.company}
                      onChange={(e) =>
                        updateExperience(index, "company", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={exp.position}
                      onChange={(e) =>
                        updateExperience(index, "position", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Jan 2021"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(index, "startDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Feb 2022 or Present"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(index, "endDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addExperience}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Work Experience
            </button>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
              <p className="text-sm text-gray-500">(Most recent first)</p>
            </div>
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">
                    Project {index + 1}
                  </h4>
                  {projects.length > 1 && (
                    <button
                      onClick={() => removeProject(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Name
                      </label>
                      <input
                        type="text"
                        placeholder="Project Title"
                        value={project.projectName}
                        onChange={(e) =>
                          updateProject(index, "projectName", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project URL (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={project.url}
                        onChange={(e) =>
                          updateProject(index, "url", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Timeframe
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Jan 2020 - Feb 2021"
                        value={project.timeframe}
                        onChange={(e) =>
                          updateProject(index, "timeframe", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Technologies Used
                      </label>
                      <input
                        type="text"
                        placeholder="React, Node.js, MongoDB"
                        value={project.tool}
                        onChange={(e) =>
                          updateProject(index, "tool", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      placeholder="Describe what the project does, your role, and key achievements..."
                      value={project.description}
                      onChange={(e) =>
                        updateProject(index, "description", e.target.value)
                      }
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addProject}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Project
            </button>
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Education</h3>
              <p className="text-sm text-gray-500">(Most recent first)</p>
            </div>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">
                    Education {index + 1}
                  </h4>
                  {education.length > 1 && (
                    <button
                      onClick={() => removeEducation(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School/University
                    </label>
                    <input
                      type="text"
                      placeholder="Institution Name"
                      value={edu.school}
                      onChange={(e) =>
                        updateEducation(index, "school", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Degree/Program
                    </label>
                    <input
                      type="text"
                      placeholder="Bachelor's in Computer Science"
                      value={edu.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="City, State"
                      value={edu.location}
                      onChange={(e) =>
                        updateEducation(index, "location", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Graduation Year
                    </label>
                    <input
                      type="text"
                      placeholder="2023"
                      value={edu.graduationYear}
                      onChange={(e) =>
                        updateEducation(index, "graduationYear", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Achievements & Honors (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Dean's List, Magna Cum Laude, etc."
                    value={edu.achievements}
                    onChange={(e) =>
                      updateEducation(index, "achievements", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addEducation}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Education
            </button>
          </div>
        );

      case "certifications":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Certifications
              </h3>
              <p className="text-sm text-gray-500">(Most recent first)</p>
            </div>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">
                    Certification {index + 1}
                  </h4>
                  {certifications.length > 1 && (
                    <button
                      onClick={() => removeCertification(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Certification Name
                    </label>
                    <input
                      type="text"
                      placeholder="AWS Certified Solutions Architect"
                      value={cert.certification_name}
                      onChange={(e) =>
                        updateCertification(
                          index,
                          "certification_name",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Issuing Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Amazon Web Services"
                      value={cert.issuingOrganization}
                      onChange={(e) =>
                        updateCertification(
                          index,
                          "issuingOrganization",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Completion Date
                    </label>
                    <input
                      type="text"
                      placeholder="March 2023"
                      value={cert.completionDate}
                      onChange={(e) =>
                        updateCertification(
                          index,
                          "completionDate",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addCertification}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Certification
            </button>
          </div>
        );

      case "courses":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Courses</h3>
              <p className="text-sm text-gray-500">(Most recent first)</p>
            </div>
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-800">
                    Course {index + 1}
                  </h4>
                  {courses.length > 1 && (
                    <button
                      onClick={() => removeCourse(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course Name
                    </label>
                    <input
                      type="text"
                      placeholder="Complete React Developer Course"
                      value={course.course_name}
                      onChange={(e) =>
                        updateCourse(index, "course_name", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Udemy, Coursera, etc."
                      value={course.organizationName}
                      onChange={(e) =>
                        updateCourse(index, "organizationName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Completion Date
                    </label>
                    <input
                      type="text"
                      placeholder="January 2023"
                      value={course.completedDate}
                      onChange={(e) =>
                        updateCourse(index, "completedDate", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addCourse}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Course
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume Builder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a professional, ATS-friendly resume that gets you noticed by
            employers
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:gap-8">
            {/* Sidebar Navigation */}
            <SideBar
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            {/* Main Content */}
            <MainContaint
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              renderSection={renderSection}
            />
          </div>

          {/* Generate Resume Button */}
          {(activeSection === "certifications" ||
            activeSection === "courses") && (
            <div className="mt-8 text-center">
              <button
                onClick={() => generateResume()}
                disabled={loading}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center gap-3 mx-auto"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Generating Resume...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Generate Resume
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {activeSection === "skills" && keywords === null
                  ? "Analyzing Job Description..."
                  : "Generating Your Resume..."}
              </h3>
              <p className="text-gray-600">
                {activeSection === "skills" && keywords === null
                  ? "Extracting relevant keywords and skills from the job description."
                  : "Creating your professional resume. This may take a few moments."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;

// "use client";
// import React, { useState } from "react";
// import { FilePen, User, Briefcase, GraduationCap } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   AiExperienceSection,
//   AiKeyWordsFinder,
//   AiProfileSummary,
//   AiProjectSection,
//   AiSkillSection,
// } from "../../../../config/AllAiModels";

// const ResumeBuilder = () => {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     location: "",
//     linkedin: "",
//   });
//   const [profileSummary, setProfileSummary] = useState({
//     jobRole: "",
//     skillsMatch: "",
//     summery: "",
//   });
//   const [skills, setSkills] = useState({
//     skilllevel: "",
//     skillKeywords: "",
//     skillDescription: "",
//   });

//   const [experiences, setExperiences] = useState([]);
//   const [education, setEducation] = useState([]);
//   const [certification, setCertification] = useState([]);
//   const [course, setCourse] = useState([]);
//   const [project, setProject] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hide, setHide] = useState(true);
//   const [summary, setSummary] = useState("");
//   const [keywords, setKeywords] = useState();

//   const updateProfileSummary = (field, value) => {
//     setProfileSummary((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const updateSkills = (field, value) => {
//     setSkills((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const updateProject = (index, field, value) => {
//     const updateProject = [...project];
//     updateProject[index] = {
//       ...updateProject[index],
//       [field]: value,
//     };
//     setProject(updateProject);
//   };

//   const updateExperience = (index, field, value) => {
//     const updatedExperiences = [...experiences];
//     updatedExperiences[index] = {
//       ...updatedExperiences[index],
//       [field]: value,
//     };
//     setExperiences(updatedExperiences);
//   };

//   const updateEducation = (index, field, value) => {
//     const updatedEducation = [...education];
//     updatedEducation[index] = {
//       ...updatedEducation[index],
//       [field]: value,
//     };
//     setEducation(updatedEducation);
//   };

//   const updateCertification = (index, field, value) => {
//     const updatedCertifications = [...certification];
//     updatedCertifications[index] = {
//       ...updatedCertifications[index],
//       [field]: value,
//     };
//     setCertification(updatedCertifications);
//   };

//   const updateCourse = (index, field, value) => {
//     const updatedCourses = [...course];
//     updatedCourses[index] = {
//       ...updatedCourses[index],
//       [field]: value,
//     };
//     setCourse(updatedCourses);
//   };
//   const addExperience = () => {
//     setExperiences([
//       ...experiences,
//       {
//         company: "",
//         position: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ]);
//   };

//   const addProject = () => {
//     setProject([
//       ...project,
//       {
//         projectName: "",
//         timeframe: "",
//         tools: "",
//         description: "",
//         url: "",
//       },
//     ]);
//   };

//   const addEducation = () => {
//     setEducation([
//       ...education,
//       {
//         school: "",
//         degree: "",
//         graduationYear: "",
//         location: "",
//         achievements: "",
//       },
//     ]);
//   };

//   const addCertificate = () => {
//     setCertification([
//       ...certification,
//       {
//         certification_name: "",
//         issuingOrganization: "",
//         completionDate: "",
//       },
//     ]);
//   };

//   const addCourse = () => {
//     setCourse([
//       ...course,
//       {
//         course_name: "",
//         organizationName: "",
//         completedDate: "",
//       },
//     ]);
//   };

//   const updatePersonalInfo = (field, value) => {
//     setPersonalInfo((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const generateResume = async () => {
//     setLoading(true);
//     const resumeData = {
//       personalInfo,
//       profileSummary,
//       experiences,
//       project,
//       education,
//       certification,
//       course,
//       skills,
//     };
//     const alldata = [resumeData];

//     const profilepropt = `generate a professional 2 profile summary for job roll ${profileSummary.jobRole} as a fresher, starting with actionable adjective word falling with job roll i am applying for after that add the skill that help to achieve goal.My skill:${skills.skilllevel}.you can use keywords from:${skills.skillKeywords}.in json formate.`;
//     try {
//       const result = await AiProfileSummary.sendMessage(profilepropt);
//       const responseText = result.response.text();
//       const resultjson = JSON.parse(responseText);
//       localStorage.setItem("profileSummary", JSON.stringify(resultjson));
//       setSummary(resultjson);
//       console.log(responseText);
//       // setLoading(false);
//       setHide(true);
//       alldata.push(resultjson);
//     } catch (error) {
//       console.log(error);
//     }

//     const skillprompt = `identify the job description and my skills.suggest me 5-10 skills that i should include in my resume. tailor these skills to my actual experience level and quantify my achievement.description:${skills.skillDescription}.My skills:${skills.skilllevel}.keywords to be use:${skills.skillKeywords}.in json formate.`;
//     try {
//       const result = await AiSkillSection.sendMessage(skillprompt);
//       const responseText = result.response.text();
//       console.log(responseText);
//       const jsonresponse = JSON.parse(responseText);
//       localStorage.setItem("skills", JSON.stringify(jsonresponse));
//       console.log(jsonresponse);
//       alldata.push(jsonresponse);
//     } catch (error) {
//       console.log(error);
//     }

//     try {
//       const combinedResponsesexperience = [];
//       for (let i = 0; i < resumeData.experiences.length; i++) {
//         const experiences = resumeData.experiences[i];
//         const experiencePrompt = `
//           Write an experience in the internship section, including position, company name, date, bullet point responsibilities, quantify accomplishments/achievements, and skills developed.
//           Position: ${experiences.position},
//           Company: ${experiences.company},
//           Date: ${experiences.startDate} - ${experiences.endDate},
//           Keywords to be used: ${skills.skillKeywords}.
//           Output in JSON format.
//         `;
//         // console.log(experiencePrompt);

//         const result = await AiExperienceSection.sendMessage(experiencePrompt);
//         const responseText = await result.response.text();
//         combinedResponsesexperience.push(JSON.parse(responseText));
//       }
//       // Store the combined result in localStorage
//       localStorage.setItem(
//         "combinedResponsesexperience",
//         JSON.stringify(combinedResponsesexperience)
//       );
//       console.log("All experience sections have been stored in localStorage.");
//       alldata.push(combinedResponsesexperience);
//     } catch (error) {
//       console.error(
//         "An error occurred while generating experience sections:",
//         error
//       );
//     }

//     try {
//       const combinedResponsesproject = [];
//       for (let i = 0; i < resumeData.project.length; i++) {
//         const project = resumeData.project[i];
//         const projectpromopt = `write a project section, include title, timeframe, tools/technology used, bullet point objective or problem statement, your role: contributions and responsibilities, result/achievements: quantify the impact.project name:${project.projectName},timeframe:${project.timeframe},tools/technology:${project.tools}.in json formate.`;
//         const result = await AiProjectSection.sendMessage(projectpromopt);
//         const responseText = await result.response.text();
//         combinedResponsesproject.push(JSON.parse(responseText));
//       }

//       localStorage.setItem(
//         "combinedResponsesproject",
//         JSON.stringify(combinedResponsesproject)
//       );
//       console.log("All project sections have been stored in localStorage.");
//       alldata.push(combinedResponsesproject);
//     } catch (error) {
//       console.log(error);
//     }

//     alert("Resume data has been logged to the console!");
//     setLoading(false);
//     localStorage.setItem("resumeData", JSON.stringify(alldata));
//     window.location.href = "/jobPreparation/resume/prev";
//   };

//   function removeExtraSpaces(paragraph) {
//     return paragraph
//       .trim() // Remove leading and trailing white spaces
//       .replace(/\s+/g, " "); // Replace multiple spaces with a single space
//   }
//   const findKeywords = async (desc) => {
//     const keyword = removeExtraSpaces(desc);
//     const prompt = `I have the following job description:${keyword}.Analyze the description and provide a list of keywords, skills, qualifications, tools, and technologies mentioned that are most relevant for tailoring an ATS-friendly resume. Categorize the keywords under the following headings:,Technical_Skills,Soft_Skills,Job_Specific_Keywords,Certifications_Education,Tools_Software,Action_Verbs_Power_WordsEnsure the keywords are directly extracted from the job description and focus on making the resume optimized for ATS parsing. Provide the output in a structured, easy-to-use format.in json formate.`;
//     try {
//       const result = await AiKeyWordsFinder.sendMessage(prompt);
//       const responseText = await result.response.text();
//       const keywords = JSON.parse(responseText);
//       setKeywords(keywords);
//       console.log(keywords);
//     } catch (error) {
//       console.error("An error occurred while finding keywords:", error);
//     }
//   };

//   return (
//     <>
//       {hide ? (
//         <>
//           <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//             <h1 className="text-2xl font-bold mb-6 flex items-center">
//               <FilePen className="mr-3 text-blue-600" /> Resume Builder
//             </h1>

//             {/* Personal Information Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <User className="mr-2 text-blue-500" /> Personal Information
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={personalInfo.name}
//                   onChange={(e) => updatePersonalInfo("name", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={personalInfo.email}
//                   onChange={(e) => updatePersonalInfo("email", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={personalInfo.phone}
//                   onChange={(e) => updatePersonalInfo("phone", e.target.value)}
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   value={personalInfo.location}
//                   onChange={(e) =>
//                     updatePersonalInfo("location", e.target.value)
//                   }
//                   className="border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="LinkedIn Profile"
//                   value={personalInfo.linkedin}
//                   onChange={(e) =>
//                     updatePersonalInfo("linkedin", e.target.value)
//                   }
//                   className="border p-2 rounded"
//                 />
//               </div>
//             </section>

//             {/* Profile Summary Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <Briefcase className="mr-2 text-blue-500" /> Profile Summary
//               </h2>
//               <div className="mb-4 p-4 border rounded">
//                 <input
//                   type="text"
//                   placeholder="Job Role"
//                   value={profileSummary.jobRole}
//                   onChange={(e) =>
//                     updateProfileSummary("jobRole", e.target.value)
//                   }
//                   className="w-full mb-2 p-2 border rounded"
//                 />

//                 <textarea
//                   placeholder="Skills Match With Job Role"
//                   value={profileSummary.skillsMatch}
//                   onChange={(e) =>
//                     updateProfileSummary("skillsMatch", e.target.value)
//                   }
//                   className="w-full mt-2 p-2 border rounded"
//                   rows="3"
//                 ></textarea>
//               </div>
//             </section>

//             {/* Skills Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <GraduationCap className="mr-2 text-blue-500" /> Skills
//               </h2>
//               <div className="mb-4 p-4 border rounded">
//                 <p>Job description </p>
//                 <textarea
//                   placeholder="Job Descriptions"
//                   value={skills.skillDescription}
//                   onChange={(e) =>
//                     updateSkills("skillDescription", e.target.value)
//                   }
//                   className="w-full mt-2 p-2 border rounded"
//                   rows="3"
//                 ></textarea>
//                 <div>
//                   <div>
//                     {keywords && (
//                       <>
//                         <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 m-5">
//                           <div>
//                             <span className="font-bold">Technical Skills</span>
//                             {keywords?.Technical_Skills?.map((word, index) => (
//                               <div key={index}>
//                                 {index + 1}.{word}
//                               </div>
//                             ))}
//                           </div>
//                           <div>
//                             <span className="font-bold">
//                               Job Specific Keywords
//                             </span>
//                             {keywords?.Job_Specific_Keywords?.map(
//                               (word, index) => (
//                                 <div key={index}>
//                                   {index + 1}.{word}
//                                 </div>
//                               )
//                             )}
//                           </div>
//                           <div>
//                             <span className="font-bold">Soft Skills</span>
//                             {keywords?.Soft_Skills?.map((word, index) => (
//                               <div key={index}>
//                                 {index + 1}.{word}
//                               </div>
//                             ))}
//                           </div>
//                           <div>
//                             <span className="font-bold">
//                               Action Verbs & Power Words
//                             </span>
//                             {keywords?.Action_Verbs_Power_Words?.map(
//                               (word, index) => (
//                                 <div key={index}>
//                                   {index + 1}.{word}
//                                 </div>
//                               )
//                             )}
//                           </div>
//                           {keywords?.Tools_Software.length > 0 && (
//                             <div>
//                               <span className="font-bold">
//                                 Tools & Software
//                               </span>
//                               {keywords?.Tools_Software?.map((word, index) => (
//                                 <div key={index}>
//                                   {index + 1}.{word}
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                           {keywords?.Certifications_Education.length > 0 && (
//                             <div>
//                               <span className="font-bold">
//                                 Certifications Education
//                               </span>
//                               {keywords?.Certifications_Education?.map(
//                                 (word, index) => (
//                                   <div key={index}>
//                                     {index + 1}.{word}
//                                   </div>
//                                 )
//                               )}
//                             </div>
//                           )}
//                         </div>
//                         <span className="text-gray-500 text-sm">
//                           Pick Your Keywords
//                         </span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex justify-end">
//                   <Button
//                     onClick={() => {
//                       const desc = skills.skillDescription;
//                       findKeywords(desc);
//                     }}
//                     className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mt-2"
//                     title="Find Keywords which help you to improve ATS performance"
//                   >
//                     Find Key Word
//                   </Button>
//                 </div>
//                 <p>Keywords</p>
//                 <textarea
//                   placeholder="Job Descriptions Keywords"
//                   value={skills.skillKeywords}
//                   onChange={(e) =>
//                     updateSkills("skillKeywords", e.target.value)
//                   }
//                   className="w-full mt-2 p-2 border rounded"
//                   rows="3"
//                 ></textarea>
//                 <div>
//                   <textarea
//                     type="text"
//                     placeholder="Skill Level"
//                     value={skills.skill}
//                     title="Eg. HTML-beginner,CSS-intermidiate,javascript-advance"
//                     onChange={(e) => updateSkills("skilllevel", e.target.value)}
//                     className="w-full mt-2 p-2 border rounded"
//                     rows="3"
//                   ></textarea>
//                   <span className="text-zinc-600 text-xs">
//                     *use comma(,) to add more skill,ex:
//                     HTML-beginner,CSS-intermidiate,JS-advance
//                   </span>
//                 </div>
//               </div>
//             </section>

//             {/* Work Experience Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <Briefcase className="mr-2 text-blue-500" /> Work Experience
//                 (Recent First)
//               </h2>
//               {experiences.map((exp, index) => (
//                 <div key={index} className="mb-4 p-4 border rounded">
//                   <p>Experience {index + 1}</p>
//                   <input
//                     type="text"
//                     placeholder="Company"
//                     value={exp.company}
//                     onChange={(e) =>
//                       updateExperience(index, "company", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded mt-2"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Position"
//                     value={exp.position}
//                     onChange={(e) =>
//                       updateExperience(index, "position", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <div className="flex gap-4">
//                     <input
//                       type="text"
//                       placeholder="Eg. Jan 2021"
//                       value={exp.startDate}
//                       onChange={(e) =>
//                         updateExperience(index, "startDate", e.target.value)
//                       }
//                       className="w-1/2 p-2 border rounded"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Eg. Feb 2022"
//                       value={exp.endDate}
//                       onChange={(e) =>
//                         updateExperience(index, "endDate", e.target.value)
//                       }
//                       className="w-1/2 p-2 border rounded"
//                     />
//                   </div>
//                   <span className="text-sm text-gray-400 ml-2">
//                     Insert date in mm yyyy format like this Jan 2023
//                   </span>
//                 </div>
//               ))}
//               <button
//                 onClick={addExperience}
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 + Add Work Experience
//               </button>
//             </section>

//             {/* Project Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <GraduationCap className="mr-2 text-blue-500" /> Project (Recent
//                 First)
//               </h2>
//               {project.map((edu, index) => (
//                 <div key={index} className="mb-4 p-4 border rounded">
//                   <p>Project {index + 1}</p>
//                   <input
//                     type="text"
//                     placeholder="Project Name"
//                     value={edu.projectName}
//                     onChange={(e) =>
//                       updateProject(index, "projectName", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="url"
//                     placeholder="Project url (optional)"
//                     value={edu.url}
//                     onChange={(e) =>
//                       updateProject(index, "url", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="timeframe"
//                     title="Eg. Jan 2020 - Feb 2021"
//                     value={edu.timeframe}
//                     onChange={(e) =>
//                       updateProject(index, "timeframe", e.target.value)
//                     }
//                     className="w-full  p-2 border rounded"
//                   />
//                   <span className="text-xs text-gray-400 mb-2 ml-2">
//                     Eg. Jan 2020 - Feb 2021
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="tools/technology"
//                     value={edu.tool}
//                     onChange={(e) =>
//                       updateProject(index, "tool", e.target.value)
//                     }
//                     className="w-full p-2 border rounded mb-2"
//                   />
//                   <textarea
//                     type="text"
//                     placeholder="Description"
//                     value={edu.description}
//                     onChange={(e) =>
//                       updateProject(index, "description", e.target.value)
//                     }
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               ))}
//               <button
//                 onClick={addProject}
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 + Add Project
//               </button>
//             </section>

//             {/* Education Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <GraduationCap className="mr-2 text-blue-500" /> Education
//                 (Recent First)
//               </h2>
//               {education.map((edu, index) => (
//                 <div key={index} className="mb-4 p-4 border rounded">
//                   <p>Education {index + 1}</p>
//                   <input
//                     type="text"
//                     placeholder="School/University"
//                     value={edu.school}
//                     onChange={(e) =>
//                       updateEducation(index, "school", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="type"
//                     value={edu.degree}
//                     onChange={(e) =>
//                       updateEducation(index, "degree", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Location"
//                     value={edu.location}
//                     onChange={(e) =>
//                       updateEducation(index, "location", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Completion Year"
//                     value={edu.graduationYear}
//                     onChange={(e) =>
//                       updateEducation(index, "graduationYear", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Achievement and honors(Optional)"
//                     value={edu.achievements}
//                     onChange={(e) =>
//                       updateEducation(index, "achievements", e.target.value)
//                     }
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               ))}
//               <button
//                 onClick={addEducation}
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 + Add Education
//               </button>
//             </section>

//             {/* Certification Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <GraduationCap className="mr-2 text-blue-500" /> Certification
//                 (Recent First)
//               </h2>
//               {certification.map((cert, index) => (
//                 <div key={index} className="mb-4 p-4 border rounded">
//                   <p>Certificate {index + 1}</p>
//                   <input
//                     type="text"
//                     placeholder="Certification Name"
//                     value={cert.certification_name}
//                     onChange={(e) =>
//                       updateCertification(
//                         index,
//                         "certification_name",
//                         e.target.value
//                       )
//                     }
//                     className="w-full mb-2 p-2 border rounded mt-2"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Issuing Organization"
//                     value={cert.issuingOrganization}
//                     onChange={(e) =>
//                       updateCertification(
//                         index,
//                         "issuingOrganization",
//                         e.target.value
//                       )
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Completion Date"
//                     value={cert.completionDate}
//                     onChange={(e) =>
//                       updateCertification(
//                         index,
//                         "completionDate",
//                         e.target.value
//                       )
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                 </div>
//               ))}
//               <button
//                 onClick={addCertificate}
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 + Add Certification
//               </button>
//             </section>

//             {/* Courses Section */}
//             <section className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <GraduationCap className="mr-2 text-blue-500" /> Courses (Recent
//                 First)
//               </h2>
//               {course.map((courseItem, index) => (
//                 <div key={index} className="mb-4 p-4 border rounded">
//                   <p>Course {index + 1}</p>
//                   <input
//                     type="text"
//                     placeholder="Course Name"
//                     value={courseItem.course_name}
//                     onChange={(e) =>
//                       updateCourse(index, "course_name", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Organization Name"
//                     value={courseItem.organizationName}
//                     onChange={(e) =>
//                       updateCourse(index, "organizationName", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Completed Date"
//                     value={courseItem.completedDate}
//                     onChange={(e) =>
//                       updateCourse(index, "completedDate", e.target.value)
//                     }
//                     className="w-full mb-2 p-2 border rounded"
//                   />
//                 </div>
//               ))}
//               <button
//                 onClick={addCourse}
//                 className="w-full p-2 bg-blue-500 text-white rounded hover:bg"
//               >
//                 + Add Course
//               </button>
//             </section>

//             {/* Generate Resume Button */}
//             <div className="mt-6">
//               <button
//                 onClick={generateResume}
//                 className="w-full p-3 bg-green-500 text-white text-lg rounded hover:bg-green-600 transition-colors"
//               >
//                 Generate Resume
//               </button>
//             </div>
//             {loading && <LoadingDialog loading={loading} />}
//           </div>
//         </>
//       ) : (
//         <>
//           <PreviewGeneratedData />
//         </>
//       )}
//     </>
//   );
// };

// export default ResumeBuilder;
