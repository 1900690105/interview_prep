import React, { useState } from "react";
import { Book, Mail, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import YouTube from "react-youtube";

const InterviewFollow = () => {
  const [activeSection, setActiveSection] = useState("definition");
  const intro = {
    followUpEmail: {
      Timeing: [
        "Immediately After the Interview: Send a thank-you email within 24 hours.",
        "After No Response: Follow up 5–7 business days later if you haven't received any feedback or updates.",
      ],
      definition:
        "A follow-up email is a professional message sent after a prior interaction to remind, inquire, update, or maintain communication with the recipient. It helps keep the conversation active and ensures progress towards the intended goal.",
      commonScenarios: [
        "Job Applications: Checking on the status of your application.",
        "Interviews: Thanking the interviewer and reiterating interest.",
        "Business Meetings: Confirming next steps or sharing deliverables.",
        "Networking: Building and maintaining professional connections.",
        "Sales/Marketing: Following up on leads or pending decisions.",
        "Event Registration: Confirming attendance or next steps.",
        "Partnership/Collaboration: Ensuring alignment or clarifying points.",
      ],
      structure: {
        subjectLine: {
          examples: [
            "Following Up on [Job Application/Meeting Topic]",
            "Thank You for the Opportunity",
            "Next Steps for Our Discussion",
          ],
        },
      },
      include: [
        "Subject Line: Clear and professional (e.g., Follow-Up on Interview for [Position Name]).",
        "Greeting: Address the interviewer(s) by name.",
        "Gratitude: Thank them for the opportunity and their time.",
        "Key Points: Briefly mention highlights of the discussion or your enthusiasm for the role.",
        "Next Steps: Politely inquire about the status of the hiring process or next steps.",
        "Closing: Express appreciation again and include your contact information.",
      ],
      why: [
        "Shows Gratitude and Professionalism",
        "Reinforces Your Interest",
        "Keeps You Top of Mind",
        "It shows your proactive nature in seeking clarity about the process.",
        "Demonstrates Communication Skills",
        "Allows You to Address Missed Points",
        "Sets You Apart",
      ],
      Mistakes: [
        "Sending Too Soon or Too Late: Timing matters.",
        "Generic Emails: Personalization is key.",
        "Overly Lengthy Emails: Be concise.",
        "Neglecting Proofreading: Typos can leave a bad impression.",
      ],
      resource: [
        {
          title: "Follow-up email after interview",
          url: "https://www.maestrolabs.com/how-to/follow-up-email-after-interview",
        },
        {
          title: "Follow-Up Email After an Interview: Guide and Samples",
          url: "https://www.coursera.org/articles/follow-up-email-after-interview",
        },
        {
          title: "How to Write a Follow-up Email After Interview (Examples)",
          url: "https://www.rezi.ai/posts/follow-up-email-after-interview",
        },
        {
          title: "How to Write a Follow-up Email After an Interview",
          url: "https://www.liveagent.com/templates/follow-up-email-after-interview-templates/",
        },
      ],
      tips: [
        "Keep it concise and professional.",
        "Personalize it based on the interview discussion.",
        "Proofread for grammar and clarity.",
        "Use a friendly yet professional tone.",
        "Avoid being overly pushy about a decision.",
      ],
      examples: {
        jobApplicationFollowUp: {
          subject: "Following Up on Application for [Position Name]",
          body: "Dear [Hiring Manager's Name],\n\nI hope you're doing well. I wanted to follow up on my application for the [Position Name] role submitted on [Date]. I am very excited about the opportunity to join [Company Name] and contribute to [Specific Skills/Experience].\n\nI would appreciate any updates regarding the status of my application. Please feel free to contact me at [Your Contact Info] if additional information is needed.\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]",
        },
      },
    },
  };

  const renderSection = () => {
    switch (activeSection) {
      case "definition":
        return (
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <Book className="mr-3 text-blue-600" size={24} />
              Follow-Up Email Definition
            </h2>
            <p className="text-blue-900">{intro.followUpEmail.definition}</p>
            <div>
              <div>
                <YouTube videoId="qNybYQECAwU" className="mt-5" />
              </div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center mt-5">
                <Book className="mr-3 text-blue-600" size={24} />
                Why Follow-Up Email
              </h2>
              {
                <ul className="space-y-2 text-blue-900">
                  {intro.followUpEmail.why.map((scenario, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className="mr-2 mt-1 text-blue-600"
                        size={18}
                      />
                      {scenario}
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
        );
      case "scenarios":
        return (
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <Mail className="mr-3 text-blue-600" size={24} />
              Common Scenarios
            </h2>
            <ul className="space-y-2 text-blue-900">
              {intro.followUpEmail.commonScenarios.map((scenario, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={18} />
                  {scenario}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center mt-5">
              <Mail className="mr-3 text-blue-600" size={24} />
              Must Include
            </h2>
            <ul className="space-y-2 text-blue-900">
              {intro.followUpEmail.include.map((scenario, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={18} />
                  {scenario}
                </li>
              ))}
            </ul>
          </div>
        );
      case "example":
        return (
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <Mail className="mr-3 text-blue-600" size={24} />
              Job Application Follow-Up Example
            </h2>
            <div className="bg-white p-4 rounded-md border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">
                Subject:{" "}
                {intro.followUpEmail.examples.jobApplicationFollowUp.subject}
              </h3>
              <pre className="text-blue-900 whitespace-pre-wrap">
                {intro.followUpEmail.examples.jobApplicationFollowUp.body}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center mt-5">
              <Mail className="mr-3 text-blue-600" size={24} />
              Tips
            </h2>
            <ul className="space-y-2 text-blue-900">
              {intro.followUpEmail.tips.map((scenario, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={18} />
                  {scenario}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center mt-5">
              <Mail className="mr-3 text-blue-600" size={24} />
              Resource
            </h2>
            <ul className="space-y-2 text-blue-900">
              {intro.followUpEmail.resource.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 text-blue-600" size={18} />
                  <Link href={resource.url}> {resource.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        );
      case "mistakes":
        return (
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
              <AlertTriangle className="mr-3 text-red-600" size={24} />
              Mistakes to Avoid
            </h2>
            <ul className="space-y-3 text-blue-900">
              <li className="flex items-start">
                <div>
                  <ul className="space-y-2 text-blue-900">
                    {intro.followUpEmail.Mistakes.map((scenario, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle
                          className="mr-2 mt-1 text-blue-600"
                          size={18}
                        />
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-700 text-white p-6">
          <h1 className="text-3xl font-bold">Interview Follow-Up Guide</h1>
          <p className="text-blue-100">
            Master the art of professional communication
          </p>
        </div>

        <div className="p-4 bg-blue-50 border-b border-blue-200">
          <div className="flex justify-center space-x-2 md:space-x-4">
            {[
              { key: "definition", label: "Definition" },
              { key: "scenarios", label: "Scenarios" },
              { key: "example", label: "Example" },
              { key: "mistakes", label: "Mistakes to Avoid" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-3 py-2 rounded-md text-sm md:text-base transition-colors ${
                  activeSection === key
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 md:p-8">{renderSection()}</div>
      </div>
    </div>
  );
};

export default InterviewFollow;
