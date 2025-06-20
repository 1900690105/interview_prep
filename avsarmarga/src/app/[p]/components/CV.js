import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CV = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const cv = {
    cv_guide: {
      personal_information: {
        what: "Contact details and basic personal information",
        why: "Allows recruiters to contact you easily",
        how: {
          name: "Your full name",
          email: "A professional email address",
          phone: "A valid phone number",
          address: "City and country (optional for privacy)",
          example: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1-234-567-8901",
            address: "New York, USA",
          },
        },
      },
      profile_summary: {
        what: "A brief summary of your skills and career objectives",
        why: "Provides a quick snapshot of your professional background",
        how: "2-3 sentences summarizing your key achievements and goals",
        example:
          "Dynamic software developer with 5+ years of experience in building scalable web applications. Seeking to leverage proven skills in JavaScript and React to contribute to XYZ Corp.",
      },
      education: {
        what: "Your academic background",
        why: "Demonstrates your qualifications for the role",
        how: {
          degree: "Your degree or certification",
          institution: "The university or school name",
          graduation_year: "The year of completion",
          example: {
            degree: "Bachelor of Science in Computer Science",
            institution: "ABC University",
            graduation_year: "2020",
          },
        },
      },
      work_experience: {
        what: "Relevant professional experience",
        why: "Showcases your practical skills and accomplishments",
        how: {
          job_title: "Your position",
          company: "Company name",
          duration: "Start and end dates",
          responsibilities: "Key tasks and achievements",
          example: [
            {
              job_title: "Frontend Developer",
              company: "Tech Solutions",
              duration: "Jan 2021 - Present",
              responsibilities: [
                "Developed user-friendly web interfaces using React.js",
                "Improved site performance by 30% through optimized code",
              ],
            },
          ],
        },
      },
      skills: {
        what: "Your technical and soft skills",
        why: "Highlights abilities relevant to the job",
        how: {
          list: [
            "JavaScript",
            "React.js",
            "Problem-solving",
            "Team collaboration",
          ],
        },
      },
      projects: {
        what: "Personal or professional projects",
        why: "Demonstrates practical application of skills",
        how: {
          project_name: "Project title",
          description: "Brief summary of the project",
          technologies_used: ["React", "Node.js", "Firebase"],
          example: {
            project_name: "Portfolio Website",
            description:
              "Developed a personal portfolio website to showcase projects",
            technologies_used: ["React.js", "Tailwind CSS"],
          },
        },
      },
      certifications: {
        what: "Professional certifications",
        why: "Validates specialized knowledge",
        how: {
          name: "Certification title",
          issued_by: "Issuing organization",
          year: "Year of completion",
          example: {
            name: "Certified Scrum Master",
            issued_by: "Scrum Alliance",
            year: "2022",
          },
        },
      },
      languages: {
        what: "Languages you speak",
        why: "Relevant for international roles",
        how: {
          list: [
            { language: "English", proficiency: "Fluent" },
            { language: "Spanish", proficiency: "Intermediate" },
          ],
        },
      },
      interests: {
        what: "Hobbies or interests",
        why: "Adds a personal touch",
        how: ["Coding", "Traveling", "Reading"],
      },
      references: {
        what: "People who can vouch for your skills",
        why: "Provides credibility",
        how: "Available on request (or list specific names if appropriate)",
      },
    },
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderContent = (section, content) => {
    if (typeof content === "string") return content;
    if (Array.isArray(content)) return content.join(", ");
    if (typeof content === "object") {
      return (
        <ul className="list-none space-y-2 mt-2">
          {Object.entries(content).map(([key, value]) => (
            <li key={key} className="text-gray-700">
              <span className="font-medium capitalize">
                {key.replace(/_/g, " ")}:{" "}
              </span>
              {typeof value === "object" ? (
                <span className="text-gray-600">
                  {JSON.stringify(value, null, 2)
                    .replace(/[{}"[\]]/g, "")
                    .replace(/,/g, ", ")
                    .trim()}
                </span>
              ) : (
                <span className="text-gray-600">{value}</span>
              )}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          CV Guide
        </h1>

        <div className="grid gap-6">
          {Object.entries(cv.cv_guide).map(([key, section]) => (
            <Card key={key} className="overflow-hidden">
              <CardHeader
                className="cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleSection(key)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold capitalize">
                    {key.replace(/_/g, " ")}
                  </CardTitle>
                  {expandedSection === key ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </CardHeader>

              {expandedSection === key && (
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-900">
                        <span className="font-semibold">What: </span>
                        {section.what}
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900">
                        <span className="font-semibold">Why: </span>
                        {section.why}
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-purple-900">
                        <span className="font-semibold">How: </span>
                        {renderContent(key, section.how)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
