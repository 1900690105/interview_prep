// history: [
//   {
//     role: "user",
//     parts: [
//       {text: "job role:\"web developer\".qualifications:\"btech in computer engineering\".skills:\"javascript,react,nextjs,mongodb,mysql\".experience:\"fresher\".job description:\"We are looking for an experienced Azure Data Engineer to join our data engineering team. The ideal candidate will have a strong foundation in data engineering, with expertise in SQL, data modeling, and Azure platforms. You will play a key role in building, maintaining, and enhancing data models and pipelines, with a focus on supporting daily data loads and resolving technical challenges.\". write a tailored cover letter, depending on job role,qualifications, skills, and how they can benefit the company's objectives.also add tips and tricks.in json formate"},
//     ],
//   },
//   {
//     role: "model",
//     parts: [
//       {text: "```json\n{\n  \"cover_letter\": {\n    \"salutation\": \"Dear Hiring Manager,\",\n\n    \"introduction\": \"I am writing to express my keen interest in the Web Developer position advertised on [Platform where you saw the job posting]. With my B.Tech in Computer Engineering and strong proficiency in Javascript, React, Next.js, MongoDB, and MySQL, I am confident I can contribute significantly to your team's success.\",\n\n    \"skills_and_experience\": \"During my academic journey, I have developed a solid understanding of web development principles and gained practical experience through various projects. My expertise in Javascript frameworks like React and Next.js, coupled with my knowledge of database management systems like MongoDB and MySQL, allows me to build efficient and scalable web applications. I am a highly motivated and quick learner, eager to apply my skills to real-world projects and contribute to the growth of your company.\",\n\n    \"benefits_to_company\": \"I am particularly drawn to [Specific aspect of the company or job description that excites you]. I believe my ability to learn and adapt quickly, coupled with my passion for building user-centric and robust web applications, would be a valuable asset to your team. I am confident I can effectively contribute to [Specific company objective] and contribute to the overall success of your company.\",\n\n    \"closing\": \"Thank you for your time and consideration. I am eager to discuss how my skills and experience can benefit your team. Please find my resume attached for your review. I am available for an interview at your earliest convenience.\",\n\n    \"signature\": \"Sincerely,\\n[Your Name]\"\n  },\n\n  \"tips_and_tricks\": [\n    \"Customize your cover letter for each job application.\",\n    \"Highlight specific skills and experiences that match the job description.\",\n    \"Show your enthusiasm for the company and the position.\",\n    \"Proofread carefully for any errors.\",\n    \"Keep your cover letter concise and to the point (no more than one page).\",\n    \"Tailor the benefits section to specifically address the company's objectives.\",\n    \"Use keywords from the job description throughout the letter.\",\n    \"Focus on your transferable skills, even if you are a fresher.\"\n  ]\n}\n```\n\n**Explanation:**\n\n* **cover_letter:** This object holds the structure of your cover letter. Each field represents a section of the letter. \n* **salutation:** Start with a formal salutation, addressing the hiring manager directly if possible. \n* **introduction:** Briefly introduce yourself and express your interest in the position. \n* **skills_and_experience:**  Highlight your relevant skills and experiences, specifically mentioning your proficiency in Javascript frameworks (React, Next.js) and database management systems (MongoDB, MySQL).  Since you're a fresher, focus on your academic projects and their relevance to web development.\n* **benefits_to_company:** This is the crucial part. Research the company and their objectives. Explain how your skills and passion align with their goals.\n* **closing:** End with a thank you and express your willingness to discuss your qualifications further.\n* **signature:** Include your name. \n\n**Tips and Tricks:**\n\n* The provided tips and tricks are helpful guidelines to ensure your cover letter is effective and stands out. \n*  Always personalize your cover letter for each job application.  This shows genuine interest and makes your application more impactful.\n\nRemember, this is just a template. Customize it with your specific details and experience to create a compelling cover letter.\n"},
//     ],
//   },
// ],

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

const CoverLetter = ({ setLetter }) => {
  const [videoId, setVideoId] = useState("xcdvRKbSOY0");
  const [copied, setCopied] = useState(false);

  const letter = {
    cover_letter: {
      salutation: "Dear Mr.Nikhil",
      introduction:
        "I am writing to express my keen interest in the Web Developer position advertised on [Platform where you saw the job posting]. With my B.Tech in Computer Engineering and strong proficiency in Javascript, React, Next.js, MongoDB, and MySQL, I am confident I can contribute significantly to your team's success.",
      skills_and_experience:
        "During my academic journey, I have developed a solid understanding of web development principles and gained practical experience through various projects. My expertise in Javascript frameworks like React and Next.js, coupled with my knowledge of database management systems like MongoDB and MySQL, allows me to build efficient and scalable web applications. I am a highly motivated and quick learner, eager to apply my skills to real-world projects and contribute to the growth of your company.",
      benefits_to_company:
        "I am particularly drawn to [Specific aspect of the company or job description that excites you]. I believe my ability to learn and adapt quickly, coupled with my passion for building user-centric and robust web applications, would be a valuable asset to your team. I am confident I can effectively contribute to [Specific company objective] and contribute to the overall success of your company.",
      closing:
        "Thank you for your time and consideration. I am eager to discuss how my skills and experience can benefit your team. Please find my resume attached for your review. I am available for an interview at your earliest convenience.",
      signature: "Sincerely,\nLauren Chen",
    },
  };

  const tips = [
    {
      title: "AI Usage Guidelines",
      description:
        "Don't let AI write your cover letters. Example: Use AI tools to help brainstorm ideas or organize your thoughts, but make sure to write in your own voice.",
      icon: "🤖",
    },
    {
      title: "Length & Clarity",
      description:
        "Keep it short and concise. Example: Limit your cover letter to one page, focusing on your top skills and achievements that are most relevant to the position.",
      icon: "📝",
    },
    {
      title: "Human Connection",
      description:
        "Establish a human connection. Example: Share a brief story about how you became interested in the field or the company, making your passion genuine and memorable.",
      icon: "🤝",
    },
    {
      title: "Storytelling",
      description:
        "Tell career stories. Example: Instead of saying 'I have project management experience,' try 'In my last role, I led a project that improved team productivity by 20% within three months.'",
      icon: "📚",
    },
    {
      title: "Personalization",
      description:
        "Personalize the salutation (e.g., Mr./Ms. [Last Name]). Example: 'Dear Mr. Johnson,' instead of a generic 'Dear Hiring Manager,' if the hiring manager's name is available.",
      icon: "✍️",
    },
    {
      title: "Company Research",
      description:
        "Clarify and correct company information. Example: Double-check the company name and department so that your letter reads accurately and professionally.",
      icon: "🔍",
    },
    {
      title: "Customization",
      description:
        "Customize your cover letter for each job application. Example: Mention the specific role title and how your skills uniquely match the requirements of that position.",
      icon: "🎯",
    },
    {
      title: "Skills Alignment",
      description:
        "Highlight specific skills and experiences that match the job description. Example: 'I'm skilled in JavaScript and React, aligning with your requirement for front-end development experience.'",
      icon: "💡",
    },
    {
      title: "Keyword Optimization",
      description:
        "Use keywords from the job description throughout the letter. Example: If the job posting mentions 'collaborative,' 'fast-paced environment,' or 'strong analytical skills,' make sure these terms are in your letter if applicable.",
      icon: "🔑",
    },
    {
      title: "Mission Alignment",
      description:
        "Show how your skills align with the company's mission or goals. Example: 'I am drawn to your commitment to sustainability and am excited to contribute with my background in eco-friendly product design.'",
      icon: "🎯",
    },
  ];

  const resources = [
    {
      category: "Cover Letter Basics",
      items: [
        {
          website: "What Is a Cover Letter?",
          url: "https://www.indeed.com/career-advice/resumes-cover-letters/what-is-a-cover-letter",
        },
        {
          website: "How to Write a Cover Letter",
          url: "https://resumegenius.com/blog/cover-letter-help/how-to-write-a-cover-letter",
        },
      ],
    },

    {
      category: "AI & Tools",
      items: [
        {
          website: "Generate cover letter using AI",
          url: "https://app2.gravitywrite.com/content/new?category=19&prompt=135",
        },
        {
          website: "Cover Letter Checker",
          url: "https://www.jobscan.co/cover-letter-checker",
        },
      ],
    },
    {
      category: "Templates & Examples",
      items: [
        {
          website: "Cover Letter Examples for 2024",
          url: "https://zety.com/cover-letter-examples",
        },
        {
          website: "Perfect Cover Letter Templates",
          url: "https://www.themuse.com/advice/the-perfect-cover-letter-template-to-show-off-your-skills",
        },
        {
          website: "Wonsulting Cover Letter Template",
          url: "https://www.wonsulting.com/resources/wonsulting-cover-letter-template",
        },
      ],
    },
    {
      category: "Blogs",
      items: [
        {
          website: "Cover Letter Blog",
          url: "https://www.themuse.com/blog/cover-letter",
        },
        {
          website: "Cover Letter Examples",
          url: "https://www.themuse.com/blog/cover-letter-examples",
        },
        {
          website:
            "The Only Cover Letter Guide You’ll Need in 2024 [+Successful Examples] by linkedin",
          url: "https://www.linkedin.com/pulse/only-cover-letter-guide-youll-need-2020-successful-tom%C3%A1%C5%A1-ondrejka/",
        },
        {
          website:
            "How to Write a Cover Letter [Full Guide & Examples for 2024] by novoresume",
          url: "https://novoresume.com/career-blog/how-to-write-a-cover-letter-guide",
        },
        {
          website:
            "How to Write a Cover Letter: Examples For Popular Jobs by myperfectresume",
          url: "https://www.myperfectresume.com/career-center/cover-letters/how-to/write",
        },
        {
          website: "Cover Letter Formats: Examples & Tips",
          url: "https://www.myperfectresume.com/cover-letter/formats",
        },
        {
          website:
            "The Best Cover Letter Examples That Will Help You Get Hired",
          url: "https://www.monster.com/career-advice/article/cover-letters",
        },
        {
          website: "How to Write a Cover Letter by monster",
          url: "https://www.monster.com/career-advice/article/sample-cover-letter",
        },
      ],
    },
  ];

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
