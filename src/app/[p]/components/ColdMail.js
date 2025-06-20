import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import MyColdMail from "./GenerateColdMail";

const ColdMail = () => {
  const [mailtrue, setMailTrue] = useState(true);

  const cold_mail = {
    title: "Cold Emailing for Circuit Design Jobs",
    description:
      "A guide to crafting effective cold emails for circuit design roles.",
    what_is_cold_emailing:
      "Cold emailing is reaching out directly to potential employers even if they haven't advertised an open position. It's a proactive way to show your interest and get your foot in the door.",
    use_of_cold_emailing: [
      "When you're targeting companies not actively hiring.",
      "When you're interested in a specific company but no suitable positions are listed.",
      "To establish a connection with potential employers and build your network.",
      "To showcase your skills and experience directly to decision-makers.",
    ],
    tips_for_crafting_effective_cold_emails: [
      "Use informal subject lines to grab attention.",
      "Keep the email text casual and lowercase.",
      "Personalize with fake internal referrals or unique PS notes.",
      "Avoid overly salesy language and excessive links.",
      "Ask short, engaging questions to invite responses.",
      "Add a relatable touch like 'Sent from my iPhone' for authenticity.",
      "Send at the Right Time: Mid-morning or early afternoon works best.",
      "Follow Up: Send a polite follow-up email after 3-5 days if you don’t get a response.",
      "Focus on their needs more than yours.",
    ],
    steps_to_write_effective_cold_email: [
      "**Research:**",
      "  - Identify specific companies in your desired industry and location.",
      "  - Research their products, services, and recent projects.",
      "  - Find the hiring manager or relevant team lead.",
      "  - Learn about the company's culture and values.",
      "**Personalization:**",
      "  - Address the recipient by name (use LinkedIn for this).",
      "  - Mention specific projects or skills that align with their needs.",
      "  - Demonstrate your understanding of their company and work.",
      "**Subject Line:**",
      "  - Keep it brief, engaging, and relevant to the recipient.",
      "  - Examples: 'Circuit Design Expertise for [Company Name]' or 'Experienced Circuit Designer interested in [Project/Technology]' ",
      "**Body:**",
      "  - Start with a strong opening, emphasizing your value proposition.",
      "  - Briefly highlight your relevant experience and skills (2-3 sentences).",
      "  - Demonstrate your understanding of their company and challenges.",
      "  - Connect your skills and experience to their specific needs.",
      "  - Express your enthusiasm for the company and the role.",
      "  - Include a call to action (e.g., requesting a brief conversation).",
      "**Closing:**",
      "  - Thank them for their time and consideration.",
      "  - Offer to provide your portfolio or further information.",
      "  - Include a professional closing (e.g., 'Sincerely' or 'Best Regards').",
      "**Proofreading and Formatting:**",
      "  - Ensure your email is grammatically correct and free of errors.",
      "  - Use a professional and concise writing style.",
      "  - Format your email clearly with bullet points and whitespace.",
    ],
    template: {
      subject: "Could I be your next intern?",
      body: `To whom it may concern, I am writing this email to see if {{company name}} has any internship opportunities.My name is {{Your Name}} and I am a {{recent graduate/student}} at {{university name}} with a degree in {{Major or degree name}} and I have achieved {{mention grades}}.I have relevant coursework in {{area}}. I was also a part of the {{student committees/volunteering}} and {{add an achievement}}. I am interested in your firm because {{mention a personal or professional connection}}. In case you are interested, I have attached my resume and relevant references. I would love an opportunity to grow at {{company name}}\n\nSincerely,\n[Your Name]`,
    },
    follow_up: [
      "Follow up after a week if you haven't received a response.",
      "Be persistent but not pushy.",
      "Tailor your follow-up email to the specific company and your initial message.",
    ],
    resource: [
      {
        website: "systemx",
        desc: "How to Write a Perfect Cold email in 2025.",
        url: "https://www.systemx.net/how-to-write-a-perfect-cold-email-in-2025/",
      },
      {
        website: "saleshandy",
        desc: "100+ Cold Email Subject Lines to Skyrocket Responses",
        url: "https://www.saleshandy.com/blog/best-subject-lines-for-cold-emails/",
      },
      {
        website: "saleshandy",
        desc: "Top 10 Cold Email Software of 2024 in",
        url: "https://www.saleshandy.com/blog/cold-email-software/",
      },
      {
        website: "Hunter.io",
        desc: "Helps you find verified email addresses and personalize your cold email outreach.",
        url: "https://hunter.io/",
      },
      {
        website: "Mailtrack",
        desc: "Allows you to track whether your cold email has been opened, so you know when to follow up.",
        url: "https://mailtrack.io/",
      },
      {
        website: "Grammarly",
        desc: "A grammar and tone checker to ensure your emails are professional and error-free.",
        url: "https://www.grammarly.com/",
      },
      {
        website: "How to Write Cold Emails that Convert",
        desc: "Focuses on email psychology, writing techniques, and strategies for increasing reply rates.",
        url: "https://blog.hubspot.com/sales/cold-email-template",
      },
      {
        website: "15 Cold Email Templates to Generate More Leads",
        desc: "Provides practical templates for various industries and goals, including job hunting and networking.",
        url: "https://mailshake.com/blog/cold-email-templates/",
      },
      {
        website: "themuse",
        desc: "This Is How You Write a Cold Email That'll Get Your Foot in the Door",
        url: "https://www.themuse.com/advice/this-is-how-you-write-a-cold-email-thatll-get-your-foot-in-the-door",
      },
      {
        website: "saleshandy",
        desc: "Top 10 Email Warm-Up Tools",
        url: "https://www.saleshandy.com/blog/email-warm-up-tools/",
      },
      {
        website: "zendesk",
        desc: "7 cold email templates that skyrocket response rates",
        url: "https://www.zendesk.com/in/blog/cold-email-templates/#",
      },
      {
        website: "marketingideas",
        desc: "How to write the perfect cold email (by not giving a damn) 💅",
        url: "https://www.marketingideas.com/p/how-to-write-the-perfect-cold-email",
      },
    ],
  };

  // Helper function to parse steps
  const parseSteps = (steps) => {
    const parsedSteps = [];
    let currentStep = null;

    steps.forEach((step) => {
      if (step.startsWith("**")) {
        if (currentStep) {
          parsedSteps.push(currentStep);
        }
        currentStep = { title: step.replace(/\*\*/g, ""), subSteps: [] };
      } else if (currentStep) {
        currentStep.subSteps.push(step.trim());
      }
    });

    if (currentStep) {
      parsedSteps.push(currentStep);
    }

    return parsedSteps;
  };

  const parsedSteps = parseSteps(cold_mail.steps_to_write_effective_cold_email);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        {cold_mail.title}
      </h1>
      <p className="text-blue-700 mb-6">{cold_mail.description}</p>

      {/* What is Cold Emailing? */}
      <Card className="mb-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-blue-800">
            What is Cold Emailing?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="">{cold_mail.what_is_cold_emailing}</p>
        </CardContent>
      </Card>

      {/* Uses of Cold Emailing */}
      <Card className="mb-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-blue-800">Uses of Cold Emailing</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 ">
            {cold_mail.use_of_cold_emailing.map((use, index) => (
              <li key={index} className="mb-2">
                {use}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Steps to Write an Effective Cold Email */}
      <Card className="mb-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-blue-800">
            Steps to Write an Effective Cold Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {parsedSteps.map((step, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-blue-800">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 ">
                    {step.subSteps.map((subStep, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        {subStep}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Email Template */}
      <Card className="mb-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-blue-800">Email Template</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-blue-800 mb-2">Subject:</h3>
          <p className="text-blue-700 mb-4">{cold_mail.template.subject}</p>
          <h3 className="font-semibold text-blue-800 mb-2">Body:</h3>
          <pre className="whitespace-pre-wrap  bg-blue-50 p-4 rounded">
            {cold_mail.template.body}
          </pre>
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-md mt-3">
        <CardHeader>
          <CardTitle className="text-blue-800">Generate for me</CardTitle>
        </CardHeader>
        <CardContent>
          {mailtrue && (
            <div>
              <MyColdMail />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Follow Up */}
      <Card className="mb-6 bg-white shadow-md mt-3">
        <CardHeader>
          <CardTitle className="text-blue-800">Follow Up</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 ">
            {cold_mail.follow_up.map((tip, index) => (
              <li key={index} className="mb-2">
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="mb-6 bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-blue-800">Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 ">
            {cold_mail.tips_for_crafting_effective_cold_emails.map(
              (tip, index) => (
                <li key={index} className="mb-2">
                  {tip}
                </li>
              )
            )}
          </ul>
          <p className="text-blue-700">
            <a
              href={
                "https://www.marketingideas.com/p/how-to-write-the-perfect-cold-email"
              }
            >
              View in details
            </a>{" "}
          </p>
        </CardContent>
      </Card>

      {/* resource section */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <CardTitle className="text-blue-800">Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 text-blue-700">
            {cold_mail.resource.map((tip, index) => (
              <li key={index} className="mb-2" title={tip.desc}>
                <Link href={tip.url}>{tip.website}</Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ColdMail;
