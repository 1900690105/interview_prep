import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  BookOpen,
  Clock,
  User,
  Users,
  AlertCircle,
  CheckCircle,
  Bookmark,
  MapPin,
  Link2,
  Linkedin,
  Mail,
  Check,
  Clipboard,
} from "lucide-react";
import Link from "next/link";

import JobApplicationForm from "./ReferralForm";

import { Button } from "@/components/ui/button";

const Referral = () => {
  const [form, setForm] = useState(true);
  const [message, setMessage] = useState(false);
  const [data, setData] = useState("");
  const [copied, setCopied] = useState({
    linkedin: false,
    email: false,
  });
  const ref = {
    what: "A job referral is a recommendation provided by someone within a company or someone with professional connections to that company, suggesting you as a suitable candidate for a job opening. Referrals often carry weight in the hiring process because they come from trusted sources within the organization.",
    why: "Job referral messages increase the candidate’s chances of being noticed, as referrals are often prioritized in hiring processes. They also help employers find trusted, high-quality candidates.",
    who: "Anyone familiar with the candidate’s professional skills, such as current or former colleagues, managers, or personal contacts, can send a job referral message.",
    whom: "The message is typically sent to a hiring manager, recruiter, or relevant decision-maker in the hiring process.",
    when: "A job referral message is usually sent before or during the application process, as soon as the job opening is identified.",
    what_mention: [
      "Personal Greeting:Hi [Recipient's Name]",
      "Your Introduction:I hope you're doing well! My name is [Your Name], and we’re connected through [mutual contact/LinkedIn/alumni network].",
      "Purpose of the Message:I noticed an opening for [Job Title] at [Company Name], and I’m very interested in applying.",
      "Why You’re a Good Fit:I believe my experience in [specific skills] and my work in [relevant achievements] make me a strong candidate for this position. Specifically, I’ve successfully [specific accomplishment] that aligns with the requirements of this role.",
      "The Referral Request:Would you feel comfortable submitting a referral on my behalf for this position?",
      " Offer to Provide Supporting Materials:I’ve attached my resume for your reference, and I’d be happy to provide more details about my background or answer any questions you may have.",
      "Appreciation:Thank you so much for considering my request. I truly appreciate your help!",
      "Closing(email):End with a polite sign-off and your contact information.",
    ],
    what_include: [
      "Name and surname",
      "Job title",
      "job Id or link (Which you get on the site or on linkedin)",
      "what values and achivement you give to the job",
      "Include contact information for follow-up.",
      "Resume with matching to job role",
    ],
    what_need: [
      "email of company employee",
      "linkedin connection of that person",
      "phone number of that person",
    ],
    steps: [
      "Identify a relevant contact or connection at the company.",
      "Ensure the candidate’s resume and job details are available.",
      "Compose a message highlighting the candidate’s strengths and fit for the role.",
      "Include contact information for follow-up.",
      "Send the message via email or professional networking platform.",
    ],
    tips: [
      "Use less words but provide high value",
      "Be concise and direct in your message.",
      "Check that person is active or not on linkedin",
      "Mention your relationship with the candidate.",
      "Include specific skills and achievements relevant to the role.",
      "Proofread for clarity and professionalism.",
      "Send request to the right person is importent.",
      "Check that person's status or experience in company before sending the message.",
    ],
    tricks: [
      "Tailor the message to the job description.",
      "Use professional language, even if sending an informal message.",
      "Provide a personal anecdote or success story, if relevant.",
    ],
    resources: [
      "LinkedIn – for networking and professional contacts.",
      "Company career pages – to find job openings and contacts.",
      "Email templates for referrals – for structure and inspiration.",
    ],
    where:
      "Job referral messages can be sent via email, LinkedIn, or internal company referral systems if available.",
    what_not_do: [
      "Don’t exaggerate or provide false information about the candidate’s skills or experience.",
      "Avoid making the message too long—keep it concise and focused.",
      "Don’t use generic language or a one-size-fits-all message; tailor it to the job and candidate.",
      "Avoid being vague; include specific skills, accomplishments, or relevant details.",
      "Don’t neglect proofreading—spelling or grammatical errors can make a poor impression.",
      "Don’t send a referral without the candidate’s consent or knowledge.",
      "Avoid being too casual, even if you have a personal connection with the recipient—maintain professionalism.",
      "Don’t pressure the recipient to hire the candidate; keep the tone neutral and respectful.",
    ],
    external_links: [
      "https://in.indeed.com/career-advice/career-development/how-to-ask-for-a-referral",
      "https://youtube.com/shorts/tuZDWH4OYQg?si=fQo42N0c_kWId48q",
      "https://youtube.com/shorts/VB448UCPhww?si=eOrnWpRNE5EVlxMs",
      "https://youtube.com/shorts/KBDklA3zEoY?si=-iUYCznGmIutMu76",
      "https://youtube.com/shorts/zWEjborhm_I?si=rdLAR5qMxSfxX2EE",
      "https://youtube.com/shorts/YIgB3-nFaS8?si=_wVX0bHmGTS0QJX4",
    ],
  };

  const handleCopyLinkedn = async (body, text) => {
    try {
      await navigator.clipboard.writeText(`${text}\n${body}`);
      setCopied((prev) => ({ ...prev, linkedin: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, linkedin: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const handleCopyEmail = async (body, text) => {
    try {
      await navigator.clipboard.writeText(`${text}\n${body}`);
      setCopied((prev) => ({ ...prev, email: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, email: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const SectionCard = ({ title, icon: Icon, children }) => (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="border-l-4 border-blue-500">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Icon className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
          {children}
        </CardContent>
      </div>
    </Card>
  );

  const ListItem = ({ children }) => (
    <li className="flex items-start gap-2 py-2">
      <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500" />
      <span className="text-gray-600">{children}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Job Referral Guide
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Your comprehensive guide to making impactful job referrals
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          <SectionCard title="What is a Job Referral?" icon={BookOpen}>
            <p className="text-gray-600 leading-relaxed">{ref.what}</p>
          </SectionCard>

          <SectionCard
            title="Why are Job Referrals Important?"
            icon={CheckCircle}
          >
            <p className="text-gray-600 leading-relaxed">{ref.why}</p>
          </SectionCard>

          <SectionCard title="Who Can Provide a Referral?" icon={User}>
            <p className="text-gray-600 leading-relaxed">{ref.who}</p>
          </SectionCard>

          <SectionCard title="Whom Should You Address?" icon={Users}>
            <p className="text-gray-600 leading-relaxed">{ref.whom}</p>
          </SectionCard>

          <SectionCard title="When to Send?" icon={Clock}>
            <p className="text-gray-600 leading-relaxed">{ref.when}</p>
          </SectionCard>

          <SectionCard title="Required Information" icon={Bookmark}>
            <ul className="space-y-1">
              {ref.what_include.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Steps for Success" icon={CheckCircle}>
            <ul className="space-y-1">
              {ref.steps.map((step, index) => (
                <ListItem key={index}>{step}</ListItem>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Pro Tips" icon={AlertCircle}>
            <ul className="space-y-1">
              {ref.tips.map((tip, index) => (
                <ListItem key={index}>{tip}</ListItem>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Where to Send" icon={MapPin}>
            <p className="text-gray-600 leading-relaxed">{ref.where}</p>
          </SectionCard>

          <SectionCard title="Helpful Resources" icon={Link2}>
            <ul className="space-y-1">
              {ref.resources.map((resource, index) => (
                <ListItem key={index}>{resource}</ListItem>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="mt-8">
          <SectionCard title="What Not to Do!" icon={AlertCircle}>
            <ul className="space-y-1">
              {ref.what_not_do.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </ul>
          </SectionCard>
        </div>
        <div className="mt-8 ">
          <SectionCard title="External Links!" icon={Link2}>
            <ul className="space-y-1">
              {ref.external_links.map((item, index) => (
                <ListItem key={index}>
                  <Link href={item} className="text-blue-600">
                    {item}
                  </Link>
                </ListItem>
              ))}
            </ul>
          </SectionCard>
        </div>
        {form && (
          <JobApplicationForm setMessage={setMessage} setData={setData} />
        )}
        {message && (
          <>
            <div className="mt-8 mb-8">
              <SectionCard title="Linkedin Message" icon={Linkedin}>
                <p>
                  <span className="font-semibold">Subject Line:</span>
                  {data.linkedin_message.subject}
                </p>
                <p className="mt-2 text-justify">
                  <span className="font-semibold">Body:</span>
                  {data.linkedin_message.body}
                </p>
                <div className="flex justify-between items-center">
                  <span>***Attech your resume***</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleCopyLinkedn(
                        data.linkedin_message.body,
                        data.linkedin_message.subject
                      )
                    }
                    className="flex items-center gap-2"
                  >
                    {copied.linkedin ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Clipboard className="w-4 h-4" />
                    )}
                    {copied.linkedin ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </SectionCard>
            </div>

            <div className="mt-8 mb-8">
              <SectionCard title="Mail Message" icon={Mail}>
                <p>
                  <span className="font-semibold">Subject Line:</span>
                  {data.email_message.subject}
                </p>
                <p className="mt-2 text-justify">
                  <span className="font-semibold">Body:</span>
                  {data.email_message.body}
                </p>
                <div className="flex justify-between items-center">
                  <span>***Attech your resume***</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleCopyEmail(
                        data.email_message.body,
                        data.email_message.subject
                      )
                    }
                    className="flex items-center gap-2 "
                  >
                    {copied.email ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Clipboard className="w-4 h-4" />
                    )}
                    {copied.email ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </SectionCard>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Referral;
