"use client";
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
import { DataColdMail } from "@/app/data/ColdMail";

const ColdMail = () => {
  const [mailtrue, setMailTrue] = useState(true);

  const cold_mail = DataColdMail;

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
