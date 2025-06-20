"use client";
import Head from "next/head";
import jsPDF from "jspdf";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Resumeedit({
  pro,
  achievement,
  resp,
  skill,
  objective,
}) {
  const data = localStorage.getItem("resumeData");
  const resumeData = JSON.parse(data);
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(12);
    // Header Section
    doc.setFontSize(22);
    doc.text(`${resumeData[0].personalInfo.name || "Nikhil kandhare"}`, 50, 20);
    doc.setFontSize(16);
    // doc.text("Computer Science Student", 20, 30);
    doc.setFontSize(12);
    doc.text(
      `${resumeData[0].personalInfo.email || "your@gmail.com"} | ${
        resumeData[0].personalInfo.phone || "+91 123456789"
      } | ${resumeData[0].personalInfo.linkedin || "linkedun.com/your"}`,
      20,
      40
    );

    // Profile Summary
    doc.setFontSize(18);
    doc.text("Profile Summary", 20, 50);
    doc.setFontSize(10);
    doc.text(
      `${
        resumeData[1][0].profileSummary ||
        "Enthusiastic Computer Science student with strong programming skills in JavaScript, Python, and C++."
      }`,
      20,
      55,
      { maxWidth: 170 }
    );

    //skills
    doc.setFontSize(14);
    doc.text("Skills", 20, 100);
    if (resumeData[2]?.my_skills?.resume_skills?.length) {
      doc.setFontSize(10);
      resumeData[2].my_skills.resume_skills.forEach((skill, index) => {
        doc.text(
          `${skill.name}:${skill.description}` || "Unknown Skill",
          20,
          110 + index * 10,
          { maxWidth: 170 }
        );
      });
    }

    //projects
    doc.setFontSize(14);
    doc.text(
      "Projects",
      20,
      120 + resumeData[2]?.my_skills?.resume_skills?.length * 10
    );

    if (resumeData[4]?.length) {
      doc.setFontSize(12);

      doc.text(
        `${resumeData[4][0]?.project_name} (${resumeData[4][0]?.timeframe})` ||
          "Unknown projects",
        20,
        130 + resumeData[2]?.my_skills?.resume_skills?.length * 10
      );
      doc.setFontSize(10);
      doc.text(
        `${resumeData[4][0]?.problem_statement}` || "Unknown projects",
        20,
        135 + resumeData[2]?.my_skills?.resume_skills?.length * 10,
        { maxWidth: 170 }
      );
    }

    // Save PDF
    doc.save("resumenow.pdf");
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
              <h1 className="text-3xl font-bold text-gray-800 capitalize">
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
                {resumeData[1][pro].profileSummary}
              </p>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">Skills</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                {resumeData[2].my_skills?.resume_skills?.map((skill, index) => (
                  <div key={index} className="space-x-1 mt-1">
                    <span className="font-semibold">
                      {index + 1}.{skill.name}:
                    </span>
                    <span>{skill.description}</span>
                    <span>{skill.quantifiable_achievement}</span>
                  </div>
                ))}
              </ul>
            </div>

            {/* Internship Experience */}
            {resumeData[3].length > 0 && (
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
                      <span className="font-semibold text-lg">
                        Achievements
                      </span>
                      <li>{inter.internship.achievements[achievement]}</li>
                      <div>
                        <span className="font-semibold text-lg">
                          Responsibilities (Optional)
                        </span>
                        <li>{inter.internship.responsibilities[resp]}</li>
                      </div>
                      <div>
                        <span className="font-semibold text-lg">
                          Skills Developed (Optional)
                        </span>
                        <li>{inter.internship.skills_developed[skill]}</li>
                      </div>
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* project option to change */}
            {resumeData[4].length > 0 && (
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-700">Projects</h2>
                {resumeData[4].map((project, index) => (
                  <div className="mt-2" key={index}>
                    <div className="flex justify-between text-lg font-semibold">
                      <p className="">{project.project_name}</p>{" "}
                      <p>{project.timeframe}</p>
                    </div>
                    <p>{project.problem_statement}</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 text-sm">
                      <li key={index}>{project.objectives[objective]}</li>

                      <div className="">
                        {project?.results_achievements?.metrics?.map(
                          (metrics, index) => (
                            <div key={index}>
                              {index < 2 && (
                                <li>
                                  {metrics.improvement} {metrics.metric}
                                  {metrics.quantification}
                                </li>
                              )}
                            </div>
                          )
                        )}
                        {project.role_contributions.responsibilities.map(
                          (resp, index) => (
                            <div key={index} className="">
                              {index < 2 && <li>{resp}</li>}
                            </div>
                          )
                        )}
                      </div>
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-700">Education</h2>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {resumeData[0]?.education[0]?.school}
                </h3>
                <p className="text-gray-600 text-sm">
                  {resumeData[0]?.education[0]?.location} | Expected Graduation:{" "}
                  {resumeData[0]?.education[0]?.graduationYear}
                </p>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {resumeData[0]?.education[0]?.achievements}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          generatePDF();
        }}
      >
        Dowload
      </Button>
    </div>
  );
}
