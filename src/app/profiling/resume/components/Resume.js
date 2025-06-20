"use client";
import Head from "next/head";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Resume({ setPro, setAchievement, setResp }) {
  const [pvalue, setPvalue] = useState({
    objectives: 0,
    responsibilities: 0,
    metrics: 0,
  });
  const [svalue, setSvalue] = useState(0);
  const data = localStorage.getItem("resumeData");
  const resumeData = JSON.parse(data);
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica");
    doc.setFontSize(12);

    // Header Section
    doc.setFontSize(22);
    doc.text("Saraswati Adkine", 50, 20);
    doc.setFontSize(16);
    doc.text("Computer Science Student", 20, 30);
    doc.setFontSize(12);
    doc.text(
      "johndoe@example.com | (123) 456-7890 | www.linkedin.com/in/johndoe",
      20,
      40
    );

    // Profile Summary
    doc.setFontSize(18);
    doc.text("Profile Summary", 20, 50);
    doc.setFontSize(12);
    doc.text(
      "Enthusiastic Computer Science student with strong programming skills in JavaScript, Python, and C++. Experienced in developing web applications and passionate about learning new technologies. Looking for internship opportunities to apply my skills and contribute to real-world projects.",
      20,
      60,
      { maxWidth: 170 }
    );

    // Education Section
    doc.setFontSize(18);
    doc.text("Education", 20, 80);
    doc.setFontSize(14);
    doc.text("Bachelor of Science in Computer Science", 20, 90);
    doc.setFontSize(12);
    doc.text(
      "XYZ University, City, State | Expected Graduation: 2025",
      20,
      100
    );
    doc.text("GPA: 3.8/4.0", 20, 110);

    // Internship Experience Section
    doc.setFontSize(18);
    doc.text("Internship Experience", 20, 130);
    doc.setFontSize(14);
    doc.text("Software Development Intern", 20, 140);
    doc.setFontSize(12);
    doc.text("ABC Tech, City, State | June 2023 - Aug 2023", 20, 150);
    doc.text(
      "- Developed a web-based inventory management system using React and Node.js.",
      20,
      160,
      { maxWidth: 170 }
    );
    doc.text(
      "- Collaborated with a team of 4 interns to design and implement new features.",
      20,
      170,
      { maxWidth: 170 }
    );
    doc.text(
      "- Improved application performance by 20% by optimizing database queries.",
      20,
      180,
      { maxWidth: 170 }
    );

    // Projects Section
    doc.setFontSize(18);
    doc.text("Projects", 20, 200);
    doc.setFontSize(14);
    doc.text("Personal Portfolio Website", 20, 210);
    doc.setFontSize(12);
    doc.text(
      "- Designed and developed a personal portfolio website using HTML, CSS, and JavaScript.",
      20,
      220,
      { maxWidth: 170 }
    );
    doc.text("- Showcased projects, resume, and blog posts.", 20, 230, {
      maxWidth: 170,
    });
    doc.text(
      "- Integrated contact form with Firebase to handle user inquiries.",
      20,
      240,
      { maxWidth: 170 }
    );

    doc.setFontSize(14);
    doc.text("Machine Learning Model for Predicting Student Grades", 20, 260);
    doc.setFontSize(12);
    doc.text(
      "- Developed a machine learning model in Python to predict student grades based on study habits and attendance.",
      20,
      270,
      { maxWidth: 170 }
    );
    doc.text(
      "- Achieved an accuracy of 85% using scikit-learn and pandas libraries.",
      20,
      280,
      { maxWidth: 170 }
    );
    doc.text(
      "- Presented the project at the university’s annual tech fair.",
      20,
      290,
      { maxWidth: 170 }
    );

    // Skills Section
    doc.setFontSize(18);
    doc.text("Skills", 20, 310);
    doc.setFontSize(12);
    doc.text("- Programming: JavaScript, Python, C++", 20, 320, {
      maxWidth: 170,
    });
    doc.text("- Web Development: HTML, CSS, React, Node.js", 20, 330, {
      maxWidth: 170,
    });
    doc.text("- Databases: MySQL, MongoDB, Firebase", 20, 340, {
      maxWidth: 170,
    });
    doc.text("- Tools: Git, GitHub, VS Code", 20, 350, { maxWidth: 170 });

    // Save PDF
    doc.save("resume.pdf");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 border p-5">
      <Head>
        <title>Student Resume</title>
      </Head>
      <div className="bg-white max-w-3xl w-full mx-auto">
        <div id="resume-content">
          {/* Header Section */}

          <div>
            <div className="text-center border-b pb-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-800">
                {resumeData[0].personalInfo.name}
              </h1>
              {/* <p className="text-lg text-gray-600">Computer Science Student</p> */}
              <p className="text-sm text-gray-500 mt-2 ">
                {resumeData[0].personalInfo.email} |{" "}
                {resumeData[0].personalInfo.phone} |
                {resumeData[0].personalInfo.linkedin}
              </p>
            </div>
            {/* summary option to change */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">
                Professional Summary
              </h2>
              <p className="text-gray-600 mt-2 text-sm text-justify">
                {resumeData[1].map((pro, ind) => (
                  <div key={ind} onClick={() => setPro(ind)}>
                    <p>
                      {ind + 1}. {pro.profileSummary}
                    </p>
                  </div>
                ))}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">Skills</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                {resumeData[2].my_skills?.resume_skills?.map((skill, index) => (
                  <div key={index}>
                    <span className="font-semibold">
                      {index + 1}.{skill.name}:
                    </span>

                    <div className="m-2">
                      <p>
                        <span className="font-semibold">Description:</span>{" "}
                        {skill.description}
                      </p>
                      <p>
                        <span className="font-semibold">
                          Quantifiable Achievement :
                        </span>
                        {skill.quantifiable_achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            {/* Internship Experience */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">
                Internship Experience
              </h2>
              {resumeData[3].map((inter, ind) => (
                <div className="mt-2" key={ind}>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {inter.internship.position}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {inter.internship.company} | {inter.internship.date}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                    <span className="font-semibold text-lg">Achievements</span>
                    {inter.internship.achievements.map((achievement, index) => (
                      <li key={index} onClick={() => setAchievement(index)}>
                        {achievement}
                      </li>
                    ))}
                    <div>
                      <span className="font-semibold text-lg">
                        Responsibilities (Optional)
                      </span>
                      {inter.internship.responsibilities.map(
                        (responsibilities, index) => (
                          <li key={index} onClick={() => setResp(index)}>
                            {responsibilities}
                          </li>
                        )
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-lg">
                        Skills Developed (Optional)
                      </span>
                      {inter.internship.skills_developed.map(
                        (responsibilities, index) => (
                          <li key={index}>{responsibilities}</li>
                        )
                      )}
                    </div>
                  </ul>
                </div>
              ))}
            </div>

            {/* project option to change */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">Projects</h2>
              {resumeData[4].map((project, index) => (
                <div className="mt-2" key={index}>
                  <h3 className=" ">
                    <p>Name:{project.project_name}</p>{" "}
                    <p>Time:{project.timeframe}</p>
                    <p>Problem Statement:{project.problem_statement}</p>
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                    <div>
                      <span className="font-semibold text-lg">Objectives</span>
                      {project.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </div>

                    <div>
                      <span className="font-semibold text-lg">
                        Results Achievements{" "}
                      </span>
                      <p className="text-lg font-semibold">Metrics</p>
                      <div className="m-2">
                        {project.results_achievements.metrics.map(
                          (metrics, index) => (
                            <ul key={index} className="mt-2">
                              <li>
                                <span className="font-semibold">
                                  improvement:
                                </span>{" "}
                                {metrics.improvement}
                              </li>
                              <li>
                                <span className="font-semibold">Metric:</span>{" "}
                                {metrics.metric}
                              </li>
                              <li>
                                <span className="font-semibold">
                                  Quantification:
                                </span>{" "}
                                {metrics.quantification}
                              </li>
                            </ul>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-lg">Responsibilities </p>
                      <div className="m-2">
                        {project.role_contributions.responsibilities.map(
                          (resp, index) => (
                            <div key={index} className="mt-2">
                              <li>{resp}</li>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">Education</h2>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {resumeData[0].education[0].school}
                </h3>
                <p className="text-gray-600 text-sm">
                  {resumeData[0].education[0].location} | Expected Graduation:{" "}
                  {resumeData[0].education[0].graduationYear}
                </p>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {resumeData[0].education[0].achievements}
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={generatePDF}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
