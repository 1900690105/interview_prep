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
  AiProfileSummary,
  AiProjectSection,
  AiSkillSection,
} from "../../../../config/AllAiModels";

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

    console.log("Resume Data:", resumeData);
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    // const mySkill = `"php-intermidiate,nextjs-inermidete,react-advance,mongo db-biginer,git-bigginer,mysql-advance".`;
    // const keyword = `maintain CSS frameworks flask responsibilities solutions strong needs teams bootstrap primary collaborate django mysql git focus maintaining high-quality skills work applications designing responsive designers experience knowledge key development javascript using python wordpress web html developing nice-to develop developer websites responsible design php clients meet deliver"`;
    // const description = `As a Web Developer, you will be responsible for designing, developing, and maintaining websites and web applications. Your primary focus will be on JavaScript and WordPress, with a nice-to-have knowledge of Python. You will collaborate with our design and development teams to deliver high-quality solutions that meet our clients' needs.Key ResponsibilitiesDevelop and maintain responsive websites using JavaScript and WordPress.Collaborate with designers to translate UI/UX designs into functional web pages.Write clean, maintainable, and efficient code.Troubleshoot and debug website issues to enhance performance and user experience.Optimize applications for maximum speed and scalability.Implement and manage WordPress plugins, themes, and custom functionalities.Stay updated with emerging web technologies and best practices.(Optional) Work on back-end development using Python for web applications.QualificationsProven experience as a Web Developer with a strong portfolio of work.Proficiency in JavaScript, HTML, CSS, and WordPress development.Familiarity with responsive design principles and frameworks (e.g., Bootstrap).Experience with PHP and MySQL for WordPress development.Nice to have: Basic understanding of Python and related frameworks (e.g., Django, Flask).Knowledge of version control systems (e.g., Git).Strong problem-solving skills and attention to detail.Excellent communication and teamwork abilities.Skills: mysql,javascript,javascript frameworks,flask,wordpress,java,git,python,html,css,php,bootstrap,django`;

    const skillprompt = `identify the job description and my skills.suggest me 5-10 skills that i should include in my resume. tailor these skills to my actual experience level and quantify my achievement.description:${skills.skillDescription}.My skills:${skills.skilllevel}.keywords to be use:${skills.skillKeywords}.in json formate.`;
    const profilepropt = `generate a professional profile summary for job roll ${profileSummary.jobRole} as a fresher, starting with actionable adjective word falling with job roll i am applying for after that add the skill that help to achieve goal.My skill:${skills.skilllevel}.you can use keywords from:${skills.skillKeywords}.in json formate.`;
    const experienceprompt = `write a experience in internship section,include position,company name,date,bullet point responsibility,quantify accomplishments achievements ,skill developed.position:${resumeData.experiences[0].position},company:${resumeData.experiences[0].company},date:${resumeData.experiences[0].startDate} - ${resumeData.experiences[0].endDate},keywords to be use:${skills.skillKeywords}.json formate.`;
    const projectpromopt = `write a project section, include title, timeframe, tools/technology used, bullet point objective or problem statement, your role: contributions and responsibilities, result/achievements: quantify the impact.project name:"Ai chatbot for customer support",timeframe:"jan 2023-feb 2023",tools/technology:"NLP,Python,ML".in json formate.`;
    try {
      // const result = await AiSkillSection.sendMessage(skillprompt);
      // const responseText = result.response.text();
      // console.log(responseText);
      console.log(skillprompt);
    } catch (error) {
      console.log(error);
    }

    try {
      // const result = await AiProfileSummary.sendMessage(profilepropt);
      // const responseText = result.response.text();
      // console.log(responseText);
      console.log(profilepropt);
    } catch (error) {
      console.log(error);
    }

    try {
      // const result = await AiExperienceSection.sendMessage(experienceprompt);
      // const responseText = result.response.text();
      // console.log(responseText);
      console.log(experienceprompt);
    } catch (error) {
      console.log(error);
    }

    try {
      // const result = await AiProjectSection.sendMessage(projectpromopt);
      // const responseText = result.response.text();
      // console.log(responseText);
      console.log(projectpromopt);
    } catch (error) {
      console.log(error);
    }

    alert("Resume data has been logged to the console!");
  };

  return (
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
            onChange={(e) => updatePersonalInfo("location", e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="LinkedIn Profile"
            value={personalInfo.linkedin}
            onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
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
            onChange={(e) => updateProfileSummary("jobRole", e.target.value)}
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
          <p>Skills </p>
          <textarea
            placeholder="Job Descriptions"
            value={skills.skillDescription}
            onChange={(e) => updateSkills("skillDescription", e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            rows="3"
          ></textarea>
          <textarea
            placeholder="Job Descriptions Keywords"
            value={skills.skillKeywords}
            onChange={(e) => updateSkills("skillKeywords", e.target.value)}
            className="w-full mt-2 p-2 border rounded"
            rows="3"
          ></textarea>
          <div>
            <textarea
              type="text"
              placeholder="skill-level"
              value={skills.skill}
              onChange={(e) => updateSkills("skilllevel", e.target.value)}
              className="w-full mt-2 p-2 border rounded"
              rows="3"
            ></textarea>
            <span className="text-zinc-600 text-xs">
              *use comma(,) to add more skill,ex:
              HTML-begginer,CSS-intermidiate,JS-advance
            </span>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2 text-blue-500" /> Work Experience (Recent
          First)
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
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(index, "startDate", e.target.value)
                }
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="End Date"
                value={exp.endDate}
                onChange={(e) =>
                  updateExperience(index, "endDate", e.target.value)
                }
                className="w-1/2 p-2 border rounded"
              />
            </div>
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
              type="text"
              placeholder="timeframe"
              value={edu.timeframe}
              onChange={(e) =>
                updateProject(index, "timeframe", e.target.value)
              }
              className="w-full mb-2 p-2 border rounded"
            />

            <input
              type="text"
              placeholder="tools/technology"
              value={edu.tool}
              onChange={(e) => updateProject(index, "tool", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <button
          onClick={addProject}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          + Add Education
        </button>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <GraduationCap className="mr-2 text-blue-500" /> Education (Recent
          First)
        </h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p>Education {index + 1}</p>
            <input
              type="text"
              placeholder="School/University"
              value={edu.school}
              onChange={(e) => updateEducation(index, "school", e.target.value)}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
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
              placeholder="Graduation Year"
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
          <GraduationCap className="mr-2 text-blue-500" /> Certification (Recent
          First)
        </h2>
        {certification.map((cert, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p>Certificate {index + 1}</p>
            <input
              type="text"
              placeholder="Certification Name"
              value={cert.certification_name}
              onChange={(e) =>
                updateCertification(index, "certification_name", e.target.value)
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
                updateCertification(index, "completionDate", e.target.value)
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
    </div>
  );
};

export default ResumeBuilder;
