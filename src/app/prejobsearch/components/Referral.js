"use client";
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
import { DataRef } from "@/app/data/JobReferral";

const Referral = () => {
  const [form, setForm] = useState(true);
  const [message, setMessage] = useState(false);
  const [data, setData] = useState("");
  const [copied, setCopied] = useState({
    linkedin: false,
    email: false,
  });
  const [liveMessage, setLiveMessage] = useState("");

  const ref = DataRef;

  const handleCopyLinkedn = async (body, text) => {
    try {
      await navigator.clipboard.writeText(`${text}\n${body}`);
      setCopied((prev) => ({ ...prev, linkedin: true }));
      setLiveMessage("LinkedIn message copied to clipboard.");
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, linkedin: false }));
        setLiveMessage("");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleCopyEmail = async (body, text) => {
    try {
      await navigator.clipboard.writeText(`${text}\n${body}`);
      setCopied((prev) => ({ ...prev, email: true }));
      setLiveMessage("Email message copied to clipboard.");
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, email: false }));
        setLiveMessage("");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const SectionCard = ({ title, icon: Icon, children }) => (
    <section
      role="region"
      aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
      className="overflow-hidden transition-all hover:shadow-lg"
    >
      <div className="border-l-4 border-blue-500">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg" aria-hidden="true">
              <Icon className="w-5 h-5 text-blue-500" />
            </div>
            <h2
              id={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-xl font-semibold text-gray-800"
            >
              {title}
            </h2>
          </div>
          {children}
        </CardContent>
      </div>
    </section>
  );

  const ListItem = ({ children }) => (
    <li className="flex items-start gap-2 py-2">
      <ChevronRight
        className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500"
        aria-hidden="true"
      />
      <span className="text-gray-600">{children}</span>
    </li>
  );

  return (
    <>
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Job Referral Guide
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Your comprehensive guide to making impactful job referrals
            </p>
          </div>

          <p className="sr-only" aria-live="polite">
            {liveMessage}
          </p>

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

          <div className="mt-8">
            <SectionCard title="External Links!" icon={Link2}>
              <ul className="space-y-1">
                {ref.external_links.map((item, index) => (
                  <ListItem key={index}>
                    <Link href={item} className="text-blue-600 underline">
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
                    <span className="font-semibold">Subject Line:</span>{" "}
                    {data.linkedin_message.subject}
                  </p>
                  <p className="mt-2 text-justify">
                    <span className="font-semibold">Body:</span>{" "}
                    {data.linkedin_message.body}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span>***Attach your resume***</span>
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
                      aria-label="Copy LinkedIn message"
                    >
                      {copied.linkedin ? (
                        <Check className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Clipboard className="w-4 h-4" aria-hidden="true" />
                      )}
                      {copied.linkedin ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </SectionCard>
              </div>

              <div className="mt-8 mb-8">
                <SectionCard title="Mail Message" icon={Mail}>
                  <p>
                    <span className="font-semibold">Subject Line:</span>{" "}
                    {data.email_message.subject}
                  </p>
                  <p className="mt-2 text-justify">
                    <span className="font-semibold">Body:</span>{" "}
                    {data.email_message.body}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span>***Attach your resume***</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleCopyEmail(
                          data.email_message.body,
                          data.email_message.subject
                        )
                      }
                      className="flex items-center gap-2"
                      aria-label="Copy email message"
                    >
                      {copied.email ? (
                        <Check className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Clipboard className="w-4 h-4" aria-hidden="true" />
                      )}
                      {copied.email ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </SectionCard>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Referral;
