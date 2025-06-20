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

const LinkedinProfile = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const linkedin = {
    profile_setup: {
      title:
        "Creating a Stellar LinkedIn Profile for Software Testing Freshers",
      description:
        "This guide will help you craft a compelling LinkedIn profile that showcases your skills and experience as a fresh software tester, attracting the attention of potential employers.",
    },
    profile_picture: {
      title: "Professional Profile Picture",
      description:
        "First impressions matter. Choose a high-quality, professional photo that conveys confidence and approachability.",
      steps: [
        "Use a clear, well-lit photo.",
        "Dress professionally, but comfortably.",
        "Maintain a neutral expression and eye contact.",
        "Use a solid background that doesn't distract from your face.",
        "Consider using a professional photographer or a good quality selfie setup.",
      ],
    },
    banner_image: {
      title: "Engaging Banner Image",
      description:
        "Your banner image is your first chance to make a statement. Choose an image that represents your field, interests, or personality.",
      steps: [
        "Use a high-resolution image (1584 x 396 pixels).",
        "Choose a relevant image, like a tech-related background, a testing concept, or a design related to software development.",
        "Keep the image simple and professional, avoiding clutter or distracting elements.",
        "Consider using a banner design tool for creating a custom image.",
      ],
    },
    custom_url: {
      title: "Custom URL",
      description:
        "A custom URL makes your profile easier to share and remember. It adds a professional touch.",
      steps: [
        "Go to your LinkedIn profile settings.",
        "Navigate to 'Edit your public profile URL'.",
        "Enter a short, relevant URL that reflects your name or professional identity.",
      ],
    },
    headline: {
      title: "Compelling Headline",
      description:
        "Your headline is the first thing people see after your name. Make it concise and attention-grabbing.",
      steps: [
        "Use keywords relevant to software testing.",
        "Clearly state your career goal (e.g., 'Aspiring Software Tester' or 'Quality Assurance Enthusiast').",
        "Include a brief tagline that highlights your strengths or experience.",
      ],
    },
    about_section: {
      title: "Engaging About Section",
      description:
        "The 'About' section is your chance to tell your story and showcase your passion for software testing.",
      steps: [
        "Write in the first person and use a conversational tone.",
        "Start by mentioning your career goals and aspirations in software testing.",
        "Highlight your key skills and relevant experiences, even if they are from internships or projects.",
        "Mention any specific testing methodologies or tools you are familiar with.",
        "Express your enthusiasm for the field and mention what excites you about software testing.",
        "Proofread carefully for grammar and clarity.",
      ],
    },
    skills_section: {
      title: "Relevant Skills",
      description:
        "The 'Skills' section is crucial for showcasing your technical expertise to recruiters.",
      steps: [
        "List all the software testing skills you possess.",
        "Include both technical skills (e.g., bug tracking tools, automation tools, testing methodologies) and soft skills (e.g., communication, problem-solving, analytical thinking).",
        "Prioritize the skills that are most relevant to your desired job roles.",
        "Use keywords that recruiters frequently use in their searches.",
      ],
    },
    experience_section: {
      title: "Experience Section (Internships/Projects)",
      description:
        "Even as a fresher, you can highlight your relevant experience through internships, projects, or coursework.",
      steps: [
        "List any relevant internships you have completed.",
        "Describe the projects you have worked on, highlighting your role and contributions.",
        "Mention any software testing tools or methodologies you used.",
        "Quantify your achievements whenever possible (e.g., 'identified X number of bugs').",
      ],
    },
    featured_section: {
      title: "Featured Section",
      description:
        "The 'Featured' section allows you to highlight specific achievements or projects.",
      steps: [
        "Upload documents, articles, or presentations that showcase your skills and experience.",
        "Consider showcasing a portfolio of your testing work if you have any.",
      ],
    },
    certifications_section: {
      title: "Certifications & Licenses",
      description:
        "Certifications can demonstrate your commitment to professional development and expertise.",
      steps: [
        "Add any relevant software testing certifications you have earned.",
        "Consider pursuing certifications like ISTQB (International Software Testing Qualifications Board) or CSTE (Certified Software Tester).",
      ],
    },
    posts: {
      title: "Engaging Posts",
      description:
        "Regularly sharing content related to software testing helps you build your network and demonstrate your expertise.",
      steps: [
        "Share articles, blog posts, or videos about software testing trends and best practices.",
        "Share your insights on testing methodologies, tools, or challenges.",
        "Participate in industry discussions and share your thoughts on relevant topics.",
        "Showcase your work through projects or case studies.",
        "Use relevant hashtags to increase visibility.",
      ],
    },
    connections: {
      title: "Building Connections",
      description:
        "Connecting with professionals in the software testing field expands your network and opens doors to opportunities.",
      steps: [
        "Send personalized connection requests to people in your field.",
        "Join relevant groups related to software testing.",
        "Engage in discussions and share valuable content to build relationships.",
      ],
    },
    job_application: {
      title: "Applying for Jobs",
      description:
        "Use LinkedIn to apply for jobs and get noticed by recruiters.",
      steps: [
        "Set your job preferences in your profile settings.",
        "Apply for jobs directly through LinkedIn.",
        "Use LinkedIn's job search feature to find relevant opportunities.",
        "Tailor your resume and cover letter to each specific job requirement.",
        "Highlight your skills and experience that are relevant to the job description.",
      ],
    },
  };

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
