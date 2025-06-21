"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiProjectIdea } from "../../../../config/AllAiModels";
import ProjectIdeas from "./GenerateProjectPlan";
import { FaArrowRight } from "react-icons/fa";
import LoadingDialog from "@/app/components/LoadingDialog";
const Projects = () => {
  const [check, setCheck] = useState(true);
  const [projects, setProjects] = useState("");
  const [loadings, setLoadings] = useState(false);
  const [level, setLevel] = useState("");
  const [topicName, setTopicName] = useState("");
  const [branch, setBranch] = useState("");
  const [next, setNext] = useState(false);

  useEffect(() => {
    const topicName = localStorage.getItem("topicName");
    setTopicName(topicName);
    const branch = localStorage.getItem("branch");
    setBranch(branch);
    const project = localStorage.getItem("projects");
    if (project) {
      setProjects(JSON.parse(project));
      setCheck(false);
    }
    const levelNumber = localStorage.getItem("levelNumber");
    if (levelNumber) {
      switch (levelNumber) {
        case "1":
          setLevel("Beginner");
          break;
        case "2":
          setLevel("Intermediate");
          break;
        case "3":
          setLevel("Advanced");
          break;
        case "4":
          setNext(true);
          break;
        default:
          setLevel("Beginner");
      }
    } else {
      localStorage.setItem("levelNumber", 1);
    }
  }, []);

  const ProjectIdea = async () => {
    setLoadings(true);
    const prompt = `You are an intelligent 3 project idea generator for students and professionals. Provide customized project ideas based on the following details:
    Level of Expertise: ${level}.
    Branch of Study: ${branch}.
    Topic of Interest: ${topicName}.
    include the following:Problem Statement.Outcomes.Tips.Time Required.A brief title for the project.A one-sentence project description.Key features or deliverables.Suggested tools and technologies.Real-world applications or relevance.Estimated complexity beginner.in json formate.`;
    // const prmpt = `generate 3 project idea of ${level} level which improve job preparation skill on topic ${topicName} of branch ${branch},include problem statement,description,outcomes,tips,time required.in json formate.`;
    try {
      const result = await AiProjectIdea.sendMessage(prompt);
      const responseText = result.response.text();
      console.log(responseText);
      const responsejson = JSON.parse(responseText);
      localStorage.setItem("projects", JSON.stringify(responsejson));
      setProjects(responsejson);
      setCheck(false);
      setLoadings(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadings(false);
    }
  };
  return (
    <>
      {check ? (
        <div
          className="container mx-auto px-4 py-8 max-w-2xl"
          role="region"
          aria-labelledby="project-prep-heading"
          tabIndex={-1}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                id="project-prep-heading"
                className="text-2xl font-bold text-center"
              >
                Project Preparation Module for {topicName}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-6">
                {/* Preparation Instructions */}
                <section
                  aria-labelledby="instructions-heading"
                  className="bg-blue-50 p-4 rounded-lg"
                >
                  <h2
                    id="instructions-heading"
                    className="text-xl font-semibold mb-4 text-blue-800"
                  >
                    Project Preparation Instructions
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    <li>
                      Read through all project guidelines carefully before
                      starting.
                    </li>
                    <li>
                      Ensure you have all necessary resources and tools
                      prepared.
                    </li>
                    <li>
                      Review the project requirements and assessment criteria.
                    </li>
                    <li>
                      Create a simple outline using the project plan as a guide.
                    </li>
                    <li>
                      Check that you meet all prerequisite skills and knowledge.
                    </li>
                    <li>
                      The next section will unlock once you complete the
                      advanced-level project.
                    </li>
                    <li>
                      Earn credits if you complete the project on time or
                      earlier.
                    </li>
                    <li>Good luck on your project preparation journey!</li>
                  </ul>
                </section>

                {/* Before You Begin */}
                <section
                  aria-labelledby="before-begin-heading"
                  className="bg-green-50 p-4 rounded-lg"
                >
                  <h2
                    id="before-begin-heading"
                    className="text-xl font-semibold mb-4 text-green-800"
                  >
                    Before You Begin
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This module will guide you to create a project that
                    showcases your skills to employers.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 bg-yellow-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    <span className="text-gray-700">
                      Present your completed project to the assigned staff
                      member for review!
                    </span>
                  </div>
                </section>

                {/* Navigation Buttons */}
                <div className="text-center" aria-live="polite">
                  {next ? (
                    <div className="flex justify-center">
                      <Button
                        onClick={() => {
                          window.location.href =
                            "/params/page?page=Certificate";
                        }}
                        className="bg-blue-500 hover:bg-blue-600 font-bold text-white rounded flex gap-2"
                        aria-label="Go to certificate page"
                      >
                        Certification <FaArrowRight aria-hidden="true" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={ProjectIdea}
                      className="w-full bg-primary hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition duration-300"
                      aria-label={`Start ${level} level project`}
                    >
                      Start {level} Project
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <ProjectIdeas
          projects={projects}
          level={level}
          setCheck={setCheck}
          topicName={topicName}
        />
      )}

      {/* Loading Alert for Screen Readers */}
      <div aria-live="assertive" className="sr-only">
        {loadings && "Loading content, please wait..."}
      </div>
      <LoadingDialog loading={loadings} />
    </>
  );
};

export default Projects;
