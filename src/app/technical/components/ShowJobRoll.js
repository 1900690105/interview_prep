"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShowJobRoll = ({ roadmap }) => {
  const handleRoleClick = () => {
    alert(roadmap.branch);
    window.location.href = "/params/page?page=JobsRoll";
  };
  const backInst = () => {
    window.location.href = "/params/page?page=instruction";
  };

  return (
    <main
      className="container mx-auto px-4 py-8"
      role="main"
      aria-labelledby="job-roles-heading"
    >
      <h1
        id="job-roles-heading"
        className="text-3xl font-bold text-center mb-8"
      >
        {roadmap.branch} Job Roles
      </h1>

      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        aria-label={`${roadmap.branch} Job Role Categories`}
      >
        {roadmap.jobRoles.map((category, index) => (
          <article
            key={index}
            className="border-2 hover:shadow-lg transition-shadow duration-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            tabIndex={0}
            aria-labelledby={`category-heading-${index}`}
            role="region"
          >
            <header className="p-4">
              <h2
                id={`category-heading-${index}`}
                className="text-xl font-semibold"
              >
                {category.category}
              </h2>
            </header>

            <CardContent as="div" className="p-4">
              <ul className="space-y-2 list-disc list-inside">
                {category.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="ml-2 text-gray-700">
                    {role}
                  </li>
                ))}
              </ul>
            </CardContent>
          </article>
        ))}
      </section>

      <nav className="flex justify-between mt-8" aria-label="Page Navigation">
        <Button onClick={() => backInst()} aria-label="Go back to instructions">
          Back to Instructions
        </Button>

        <Button
          onClick={() => handleRoleClick()}
          aria-label="Learn about required skills"
        >
          Know About Skills
        </Button>
      </nav>
    </main>
  );
};

export default ShowJobRoll;
