import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Mail,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import YouTube from "react-youtube";
import { DataLetter, DataResources, DataTips } from "@/app/data/CoverLetter";

const CoverLetter = ({ setLetter }) => {
  const [videoId, setVideoId] = useState("xcdvRKbSOY0");
  const [copied, setCopied] = useState(false);

  const letter = DataLetter;

  const tips = DataTips;

  const resources = DataResources;

  const handleCopyLetter = () => {
    const letterText = Object.values(letter.cover_letter).join("\n\n");
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-blue-900">
            Cover Letter Builder
          </h1>
          <p className="text-gray-600 text-lg">
            Create professional cover letters that stand out
          </p>
        </div>

        {/* Cover Letter Section */}
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span className="text-2xl text-blue-900">Cover Letter</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 ">
            <div>
              <p className="text-xl font-semibold text-gray-800">
                What is cover letter?
              </p>
              <p className="text-justify mt-2">
                A cover letter is a one-page document you send with your resume
                that provides additional information about skills and
                experiences related to the job you're pursuing. It typically
                includes three to four short paragraphs. A cover letter is
                important because it serves as the first chance for the
                recruiter to see the qualifications that make you a good fit for
                the position. Not every job application requires a cover letter,
                but it's a good idea to submit one. The extra effort not only
                shows the employer that you're serious about the job, but the
                letter differentiates you from other candidates.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold">Types of cover letters</p>
              <ul>
                <li>1. Application cover letter</li>
                <li>2. Referral cover letter</li>
                <li>3. Letter of interest</li>
                <li>4. Value proposition letter</li>
              </ul>
              <a
                href="https://www.indeed.com/career-advice/resumes-cover-letters/types-of-cover-letters"
                className="text-blue-600"
              >
                Know more here..
              </a>
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold mb-2">
                Who write cover letter?
              </p>
              <p>
                A cover letter is typically written by a job applicant as part
                of their application process. It is a personalized document that
                complements the resume or CV and is used to introduce the
                applicant to a potential employer.
              </p>
              <ul className="mt-2">
                <li>
                  1. Job Seekers: Individuals applying for jobs, internships, or
                  volunteer positions.
                </li>
                <li>
                  2. Students/Graduates: Those seeking internships,
                  scholarships, or entry-level jobs.
                </li>
                <li>
                  3. Freelancers: Professionals bidding for projects or
                  proposing services to clients.
                </li>
                <li>
                  4. Career Changers: Professionals transitioning to a new field
                  or industry, explaining transferable skills.
                </li>
                <li>
                  5. Consultants: Offering services to businesses or clients.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold mb-2">
                Why Write a Cover Letter?
              </p>
              <ul>
                <li>1.To explain your interest in the position and company.</li>
                <li>
                  2. To highlight your most relevant skills and experiences.
                </li>
                <li>
                  3. To provide context for your resume or clarify any gaps.
                </li>
                <li>4 .To demonstrate enthusiasm and professionalism.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cover Letter Section */}
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span className="text-2xl text-blue-900">
                Sample Cover Letter
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLetter}
                className="flex items-center gap-2"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copied!" : "Copy Letter"}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Header Info */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Lauren Chen
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={16} className="text-blue-600" />
                    <span>(212) 256-1414</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} className="text-blue-600" />
                    <span>Chicago, IL 60622</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={16} className="text-blue-600" />
                    <span>lauren.chen@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Linkedin size={16} className="text-blue-600" />
                    <span>linkedin.com/in/lauren-chen/</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Letter Content */}
              <div className="space-y-4">
                <div className="text-gray-700">
                  <p>{letter.cover_letter.salutation}</p>
                  <p className="mt-4">{letter.cover_letter.introduction}</p>
                  <p className="mt-4">
                    {letter.cover_letter.skills_and_experience}
                  </p>
                  <p className="mt-4">
                    {letter.cover_letter.benefits_to_company}
                  </p>
                  <p className="mt-4">{letter.cover_letter.closing}</p>
                  <p className="mt-6 font-medium">
                    {letter.cover_letter.signature}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="bg-yellow-50 p-4 border-t border-yellow-100">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Note:</span> This is an
              AI-generated template. Use it as inspiration for creating your own
              cover letter.
            </p>
          </div>
        </Card>

        {/* Video Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">
              Video Guide
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="aspect-video">
              <YouTube
                videoId={videoId}
                className="w-full h-full"
                opts={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">
              Helpful Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              {resources.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-lg text-blue-800 mt-5">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((resource, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ExternalLink
                          size={14}
                          className="text-blue-600 flex-shrink-0"
                        />
                        <Link
                          href={resource.url}
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {resource.website}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="bg-white shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">
              Tips & Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="space-y-2 bg-blue-50 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tip.icon}</span>
                    <h3 className="font-semibold text-blue-900">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{tip.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => setLetter(false)}
          >
            Generate for Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
