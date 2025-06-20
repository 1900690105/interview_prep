import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Tips from "../../jobPreparation/components/coverletter/component/Tips";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { AiCoverLetter } from "../../../../config/AllAiModels";
import LoadingDialog from "../../jobPreparation/components/LoadingDialog";

const CoverLetterFront = () => {
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [contentjson, setContentJson] = useState("");
  const [title, setTitle] = useState(false);

  const content = {
    coverLetterSteps: [
      {
        step: 1,
        img: "/coverletter/header.png",
        title: "List Your Contact Details in the Header",
        description:
          "Include your name, email, phone number, and optionally, your LinkedIn profile. This information should appear at the top of your cover letter to ensure the hiring manager can easily contact you.",
        example: {
          yourInformation:
            "Jane Doe\njane.doe@example.com\n(555) 123-4567\nlinkedin.com/in/janedoe",
        },
      },
      {
        step: 2,
        img: "/coverletter/greating.png",
        title: "Greet the Hiring Manager",
        description:
          "Start your cover letter with a formal greeting. Address the hiring manager by name if possible, as this personal touch shows you have researched the company. If you cannot find their name, 'Dear Hiring Manager' is an acceptable alternative.",
        example: {
          greeting: "Dear Mr. Smith,",
        },
      },
      {
        step: 3,
        img: "/coverletter/para1.png",
        title: "Write an Opening Paragraph that Hooks the Reader",
        description:
          "Your opening paragraph should express excitement about the role and briefly highlight why you're an ideal candidate. This first impression should make the hiring manager interested in reading more.",
        example: {
          openingParagraph:
            "I am thrilled to apply for the Marketing Coordinator position at XYZ Corp. With over three years of experience in digital marketing and a passion for creative strategy, I am excited about the opportunity to contribute to your team's success.",
        },
      },
      {
        step: 4,
        img: "/coverletter/para2.png",
        title: "Explain Why You're Qualified in Your Body Paragraph(s)",
        description:
          "In the body paragraphs, highlight your relevant skills, achievements, and experiences. Use specific examples that demonstrate how you meet the job requirements and can add value to the company.",
        example: {
          bodyParagraph:
            "At my current role as a Social Media Specialist at ABC Ltd., I led a campaign that increased engagement by 35% in just six months. My background in content creation, analytics, and audience engagement aligns well with the goals of XYZ Corp., and I am confident in my ability to drive similar success.",
        },
      },
      {
        step: 5,
        img: "/coverletter/signoff.png",
        title: "Finish with a Concise Closing Paragraph and Sign-Off",
        description:
          "Conclude your cover letter by expressing appreciation for the hiring manager's time and reiterating your interest in the role. Include a formal sign-off and your name.",
        example: {
          closingParagraph:
            "Thank you for considering my application. I am eager to discuss how my background and skills align with the needs of XYZ Corp. Please feel free to contact me at your convenience.",
          signOff: "Sincerely,\nJane Doe",
        },
      },
    ],
  };

  const address = `Ali Lang 
  ali.lang@email.com 
  555 Orchard Lane, LasVegas, NV(555) 888-4000
  May 5, 20XX 
  Terry Washington 
  Revolve Inc. 
  123 Vineyard Drive, Las Vegas, NV.`;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const role = "web developer";
    const jobDescripton =
      "As a Web Developer, you will be responsible for designing, developing, and maintaining websites and web applications. Your primary focus will be on JavaScript and WordPress, with a nice-to-have knowledge of Python. You will collaborate with our design and development teams to deliver high-quality solutions that meet our clients' needs.";
    const qualification = "btech in computer engineering";
    const BASIC_PROMPT = `job role:${role},qualifications:${qualification},skills:${skill}.experience:"fresher".job description:${jobDescripton}.write a tailored cover letter, depending on job role,qualifications, skills, and how they can benefit the company's objectives.also add tips and tricks.in json formate`;
    try {
      const result = await AiCoverLetter.sendMessage(BASIC_PROMPT);
      const responseText = await result.response.text();
      console.log("Response Text: ", responseText);
      const parsedResult = JSON.parse(responseText);
      setContentJson(parsedResult);
      setTitle(true);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    } finally {
      setLoading(false);
      setTitle(true);
      setOpen(false);
    }
  };
  return (
    <>
      <div className=" bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Master Your Cover Letter
            </h1>

            <div className="flex justify-center ">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                    <span className="relative z-10">Generate With Ai</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-blue-600 dark:text-blue-400">
                      Add Your Skills that match job criteria
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label
                        htmlFor="skill"
                        className="text-blue-600 dark:text-blue-400"
                      >
                        What would you like to ask?
                      </Label>
                      <Textarea
                        id="skill"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)}
                        placeholder="Type your Skill here..."
                        className="mt-2 h-32 resize-none border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-lg text-white font-semibold transition duration-200 ${
                          loading
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                        }`}
                      >
                        {loading ? "Generating..." : "Generate"}
                      </Button>
                    </div>
                  </form>
                  {loading && <LoadingDialog loading={loading} />}
                </DialogContent>
              </Dialog>
            </div>
            {loading && <LoadingDialog loading={loading} />}
            <p className="mt-2 text-xl font-bold">Or</p>
            <p className="text-lg text-blue-600 max-w-2xl mx-auto mt-2">
              Follow these professional steps to create a compelling cover
              letter that lands interviews
            </p>
          </div>

          {title && (
            <div className=" bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
              <div className="max-w-6xl mx-auto space-y-8">
                <div className="space-y-4">
                  <div className="text-gray-700">
                    <p style={{ whiteSpace: "pre-line" }}>{address}</p>;
                    <p>{contentjson.cover_letter.salutation}</p>
                    <p className="mt-4">
                      {contentjson.cover_letter.introduction}
                    </p>
                    <p className="mt-4">
                      {contentjson.cover_letter.skills_and_experience}
                    </p>
                    <p className="mt-4">
                      {contentjson.cover_letter.benefits_to_company}
                    </p>
                    <p className="mt-4">{contentjson.cover_letter.closing}</p>
                    <p className="mt-6 font-medium">
                      {contentjson.cover_letter.signature}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-12">
            {content.coverLetterSteps.map((step, index) => (
              <Card
                key={step.step}
                className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                          {step.step}
                        </div>
                        <ArrowRight className="w-6 h-6 text-blue-400" />
                      </div>

                      <h2 className="text-2xl font-bold text-blue-900 mb-4">
                        {step.title}
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-6 h-6 text-blue-600" />
                          <h3 className="text-lg font-semibold text-blue-800">
                            Example
                          </h3>
                        </div>
                        {Object.entries(step.example).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-gray-700 whitespace-pre-line leading-relaxed"
                          >
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 flex items-center justify-center">
                      <Image
                        src={step.img}
                        width={1000}
                        height={100}
                        alt={step.title}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <Tips />
        </div>
      </div>
    </>
  );
};

export default CoverLetterFront;
