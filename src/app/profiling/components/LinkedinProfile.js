"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight, Award, Target, Network } from "lucide-react";
import LinkCard from "./LinkCard";
import { Button } from "@/components/ui/button";
import { DataLinkedin } from "@/app/data/LinkedinData";

const LinkedinProfile = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const linkedin = DataLinkedin;
  return (
    <div className="min-h-screen bg-gradient-to-br bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            LinkedIn Profile Mastery
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            {linkedin.profile_setup.description}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <Accordion
            type="multiple"
            value={expandedSections}
            onValueChange={setExpandedSections}
            className="space-y-4"
          >
            {Object.entries(linkedin).map(([key, section], index) => {
              if (key === "profile_setup") return null;

              const isExpanded = expandedSections.includes(key);
              const iconMap = {
                profile_picture: <Award className="w-6 h-6 text-blue-600" />,
                banner_image: <Target className="w-6 h-6 text-blue-600" />,
                connections: <Network className="w-6 h-6 text-blue-600" />,
              };

              return (
                <>
                  <AccordionItem
                    key={key}
                    value={key}
                    className={`
                  border rounded-xl overflow-hidden shadow-sm transition-all duration-300
                  ${
                    isExpanded
                      ? "border-blue-200 bg-white shadow-md"
                      : "border-blue-100 bg-blue-50 hover:bg-blue-100"
                  }
                `}
                  >
                    <AccordionTrigger
                      className={`
                    px-6 py-4 text-left text-xl font-semibold 
                    text-blue-800 hover:text-blue-600 group
                    transition-colors duration-300 
                    ${isExpanded ? "bg-blue-50" : ""}
                  `}
                    >
                      <div className="flex items-center space-x-4">
                        {iconMap[key] || (
                          <ChevronRight className="w-6 h-6 text-blue-600" />
                        )}
                        <span>{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white rounded-b-xl shadow-inner">
                      <Card className="border-0 shadow-none">
                        <CardHeader>
                          <CardTitle className="text-2xl text-blue-700">
                            {section.title}
                          </CardTitle>
                          <CardDescription className="text-blue-600">
                            {section.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {section.steps.map((step, stepIndex) => (
                              <li
                                key={stepIndex}
                                className="
                              flex items-start 
                              bg-blue-50 p-3 rounded-md 
                              transition-all duration-300 
                              hover:bg-blue-100 hover:translate-x-1
                            "
                              >
                                <ChevronRight className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                                <span className="text-blue-800">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </div>

        <div className="mt-12">
          <LinkCard />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            window.location.href = "/params/page?page=linkedinProfile";
          }}
        >
          Linkedin Profile
        </Button>
      </div>
    </div>
  );
};

export default LinkedinProfile;
