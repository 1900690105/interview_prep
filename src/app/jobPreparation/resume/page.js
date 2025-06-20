"use client";
import React, { useState } from "react";
import {
  FilePen,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  AiExperienceSection,
  AiKeyWordsFinder,
  AiProfileSummary,
  AiProjectSection,
  AiSkillSection,
} from "../../../../config/AllAiModels";
import LoadingDialog from "../components/LoadingDialog";
import PreviewGeneratedData from "./components/PreviewGeneratedData";
import { Button } from "@/components/ui/button";

const ResumeBuilder = () => {
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
    summery: "",
  });
  const [skills, setSkills] = useState({
    skilllevel: "",
    skillKeywords: "",
    skillDescription: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);
  const [course, setCourse] = useState([]);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const [summary, setSummary] = useState("");
  const [keywords, setKeywords] = useState();

  const updateProfileSummary = (field, value) => {
    setProfileSummary((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSkills = (field, value) => {
    setSkills((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateProject = (index, field, value) => {
    const updateProject = [...project];
    updateProject[index] = {
      ...updateProject[index],
      [field]: value,
    };
    setProject(updateProject);
  };

  const updateExperience = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setExperiences(updatedExperiences);
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setEducation(updatedEducation);
  };

  const updateCertification = (index, field, value) => {
    const updatedCertifications = [...certification];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [field]: value,
    };
    setCertification(updatedCertifications);
  };

  const updateCourse = (index, field, value) => {
    const updatedCourses = [...course];
    updatedCourses[index] = {
      ...updatedCourses[index],
      [field]: value,
    };
    setCourse(updatedCourses);
  };
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const addProject = () => {
    setProject([
      ...project,
      {
        projectName: "",
        timeframe: "",
        tools: "",
        description: "",
        url: "",
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        graduationYear: "",
        location: "",
        achievements: "",
      },
    ]);
  };

  const addCertificate = () => {
    setCertification([
      ...certification,
      {
        certification_name: "",
        issuingOrganization: "",
        completionDate: "",
      },
    ]);
  };

  const addCourse = () => {
    setCourse([
      ...course,
      {
        course_name: "",
        organizationName: "",
        completedDate: "",
      },
    ]);
  };

  const updatePersonalInfo = (field, value) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateResume = async () => {
    setLoading(true);
    const resumeData = {
      personalInfo,
      profileSummary,
      experiences,
      project,
      education,
      certification,
      course,
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
      // setLoading(false);
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
      for (let i = 0; i < resumeData.project.length; i++) {
        const project = resumeData.project[i];
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
    window.location.href = "/jobPreparation/resume/prev";
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

  return (
    <>
      {hide ? (
        <>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 flex items-center">
              <FilePen className="mr-3 text-blue-600" /> Resume Builder
            </h1>

            {/* Personal Information Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <User className="mr-2 text-blue-500" /> Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={personalInfo.name}
                  onChange={(e) => updatePersonalInfo("name", e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={personalInfo.email}
                  onChange={(e) => updatePersonalInfo("email", e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={personalInfo.phone}
                  onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={personalInfo.location}
                  onChange={(e) =>
                    updatePersonalInfo("location", e.target.value)
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="LinkedIn Profile"
                  value={personalInfo.linkedin}
                  onChange={(e) =>
                    updatePersonalInfo("linkedin", e.target.value)
                  }
                  className="border p-2 rounded"
                />
              </div>
            </section>

            {/* Profile Summary Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2 text-blue-500" /> Profile Summary
              </h2>
              <div className="mb-4 p-4 border rounded">
                <input
                  type="text"
                  placeholder="Job Role"
                  value={profileSummary.jobRole}
                  onChange={(e) =>
                    updateProfileSummary("jobRole", e.target.value)
                  }
                  className="w-full mb-2 p-2 border rounded"
                />

                <textarea
                  placeholder="Skills Match With Job Role"
                  value={profileSummary.skillsMatch}
                  onChange={(e) =>
                    updateProfileSummary("skillsMatch", e.target.value)
                  }
                  className="w-full mt-2 p-2 border rounded"
                  rows="3"
                ></textarea>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> Skills
              </h2>
              <div className="mb-4 p-4 border rounded">
                <p>Job description </p>
                <textarea
                  placeholder="Job Descriptions"
                  value={skills.skillDescription}
                  onChange={(e) =>
                    updateSkills("skillDescription", e.target.value)
                  }
                  className="w-full mt-2 p-2 border rounded"
                  rows="3"
                ></textarea>
                <div>
                  <div>
                    {keywords && (
                      <>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 m-5">
                          <div>
                            <span className="font-bold">Technical Skills</span>
                            {keywords?.Technical_Skills?.map((word, index) => (
                              <div key={index}>
                                {index + 1}.{word}
                              </div>
                            ))}
                          </div>
                          <div>
                            <span className="font-bold">
                              Job Specific Keywords
                            </span>
                            {keywords?.Job_Specific_Keywords?.map(
                              (word, index) => (
                                <div key={index}>
                                  {index + 1}.{word}
                                </div>
                              )
                            )}
                          </div>
                          <div>
                            <span className="font-bold">Soft Skills</span>
                            {keywords?.Soft_Skills?.map((word, index) => (
                              <div key={index}>
                                {index + 1}.{word}
                              </div>
                            ))}
                          </div>
                          <div>
                            <span className="font-bold">
                              Action Verbs & Power Words
                            </span>
                            {keywords?.Action_Verbs_Power_Words?.map(
                              (word, index) => (
                                <div key={index}>
                                  {index + 1}.{word}
                                </div>
                              )
                            )}
                          </div>
                          {keywords?.Tools_Software.length > 0 && (
                            <div>
                              <span className="font-bold">
                                Tools & Software
                              </span>
                              {keywords?.Tools_Software?.map((word, index) => (
                                <div key={index}>
                                  {index + 1}.{word}
                                </div>
                              ))}
                            </div>
                          )}
                          {keywords?.Certifications_Education.length > 0 && (
                            <div>
                              <span className="font-bold">
                                Certifications Education
                              </span>
                              {keywords?.Certifications_Education?.map(
                                (word, index) => (
                                  <div key={index}>
                                    {index + 1}.{word}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                        <span className="text-gray-500 text-sm">
                          Pick Your Keywords
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      const desc = skills.skillDescription;
                      findKeywords(desc);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mt-2"
                    title="Find Keywords which help you to improve ATS performance"
                  >
                    Find Key Word
                  </Button>
                </div>
                <p>Keywords</p>
                <textarea
                  placeholder="Job Descriptions Keywords"
                  value={skills.skillKeywords}
                  onChange={(e) =>
                    updateSkills("skillKeywords", e.target.value)
                  }
                  className="w-full mt-2 p-2 border rounded"
                  rows="3"
                ></textarea>
                <div>
                  <textarea
                    type="text"
                    placeholder="Skill Level"
                    value={skills.skill}
                    title="Eg. HTML-beginner,CSS-intermidiate,javascript-advance"
                    onChange={(e) => updateSkills("skilllevel", e.target.value)}
                    className="w-full mt-2 p-2 border rounded"
                    rows="3"
                  ></textarea>
                  <span className="text-zinc-600 text-xs">
                    *use comma(,) to add more skill,ex:
                    HTML-beginner,CSS-intermidiate,JS-advance
                  </span>
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2 text-blue-500" /> Work Experience
                (Recent First)
              </h2>
              {experiences.map((exp, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <p>Experience {index + 1}</p>
                  <input
                    type="text"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded mt-2"
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Eg. Jan 2021"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(index, "startDate", e.target.value)
                      }
                      className="w-1/2 p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Eg. Feb 2022"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(index, "endDate", e.target.value)
                      }
                      className="w-1/2 p-2 border rounded"
                    />
                  </div>
                  <span className="text-sm text-gray-400 ml-2">
                    Insert date in mm yyyy format like this Jan 2023
                  </span>
                </div>
              ))}
              <button
                onClick={addExperience}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                + Add Work Experience
              </button>
            </section>

            {/* Project Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> Project (Recent
                First)
              </h2>
              {project.map((edu, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <p>Project {index + 1}</p>
                  <input
                    type="text"
                    placeholder="Project Name"
                    value={edu.projectName}
                    onChange={(e) =>
                      updateProject(index, "projectName", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="url"
                    placeholder="Project url (optional)"
                    value={edu.url}
                    onChange={(e) =>
                      updateProject(index, "url", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="timeframe"
                    title="Eg. Jan 2020 - Feb 2021"
                    value={edu.timeframe}
                    onChange={(e) =>
                      updateProject(index, "timeframe", e.target.value)
                    }
                    className="w-full  p-2 border rounded"
                  />
                  <span className="text-xs text-gray-400 mb-2 ml-2">
                    Eg. Jan 2020 - Feb 2021
                  </span>
                  <input
                    type="text"
                    placeholder="tools/technology"
                    value={edu.tool}
                    onChange={(e) =>
                      updateProject(index, "tool", e.target.value)
                    }
                    className="w-full p-2 border rounded mb-2"
                  />
                  <textarea
                    type="text"
                    placeholder="Description"
                    value={edu.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
              <button
                onClick={addProject}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                + Add Project
              </button>
            </section>

            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> Education
                (Recent First)
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <p>Education {index + 1}</p>
                  <input
                    type="text"
                    placeholder="School/University"
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(index, "school", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="type"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(index, "degree", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={edu.location}
                    onChange={(e) =>
                      updateEducation(index, "location", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Completion Year"
                    value={edu.graduationYear}
                    onChange={(e) =>
                      updateEducation(index, "graduationYear", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Achievement and honors(Optional)"
                    value={edu.achievements}
                    onChange={(e) =>
                      updateEducation(index, "achievements", e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              ))}
              <button
                onClick={addEducation}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                + Add Education
              </button>
            </section>

            {/* Certification Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> Certification
                (Recent First)
              </h2>
              {certification.map((cert, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <p>Certificate {index + 1}</p>
                  <input
                    type="text"
                    placeholder="Certification Name"
                    value={cert.certification_name}
                    onChange={(e) =>
                      updateCertification(
                        index,
                        "certification_name",
                        e.target.value
                      )
                    }
                    className="w-full mb-2 p-2 border rounded mt-2"
                  />
                  <input
                    type="text"
                    placeholder="Issuing Organization"
                    value={cert.issuingOrganization}
                    onChange={(e) =>
                      updateCertification(
                        index,
                        "issuingOrganization",
                        e.target.value
                      )
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Completion Date"
                    value={cert.completionDate}
                    onChange={(e) =>
                      updateCertification(
                        index,
                        "completionDate",
                        e.target.value
                      )
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                </div>
              ))}
              <button
                onClick={addCertificate}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                + Add Certification
              </button>
            </section>

            {/* Courses Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-500" /> Courses (Recent
                First)
              </h2>
              {course.map((courseItem, index) => (
                <div key={index} className="mb-4 p-4 border rounded">
                  <p>Course {index + 1}</p>
                  <input
                    type="text"
                    placeholder="Course Name"
                    value={courseItem.course_name}
                    onChange={(e) =>
                      updateCourse(index, "course_name", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={courseItem.organizationName}
                    onChange={(e) =>
                      updateCourse(index, "organizationName", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Completed Date"
                    value={courseItem.completedDate}
                    onChange={(e) =>
                      updateCourse(index, "completedDate", e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />
                </div>
              ))}
              <button
                onClick={addCourse}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg"
              >
                + Add Course
              </button>
            </section>

            {/* Generate Resume Button */}
            <div className="mt-6">
              <button
                onClick={generateResume}
                className="w-full p-3 bg-green-500 text-white text-lg rounded hover:bg-green-600 transition-colors"
              >
                Generate Resume
              </button>
            </div>
            {loading && <LoadingDialog loading={loading} />}
          </div>
        </>
      ) : (
        <>
          <PreviewGeneratedData />
        </>
      )}
    </>
  );
};

export default ResumeBuilder;
