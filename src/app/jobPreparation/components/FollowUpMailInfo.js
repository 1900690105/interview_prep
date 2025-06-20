import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Info, ListChecks } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const FollowUpMailInfo = () => {
  const [activeTab, setActiveTab] = useState("templates");

  const emailData = {
    definition: {
      what: "A follow-up email is a professional message sent after an interview or interaction to express gratitude, reinforce interest, inquire about status, or maintain communication with a prospective employer or connection. It helps demonstrate enthusiasm and professionalism while ensuring your candidacy or interest remains top of mind.",
    },
    emailSamples: [
      {
        type: "Thank You Email After Short Interview",
        useCase:
          "To express gratitude after a brief interview, such as a phone screening.",
        emailTemplate: {
          subject: "Thank You for Your Time",
          body: {
            greeting: "Dear [Interviewer's Name],",
            paragraphs: [
              "Thank you for taking the time to speak with me about the [Position Title] role at [Company Name]. I enjoyed our conversation and learning more about the position.",
              "I am particularly excited about the opportunity to [specific aspect of the job discussed] and believe that my background in [your relevant experience or skill] would enable me to contribute effectively to your team.",
              "Please let me know if you need any additional information from me. I look forward to the possibility of working together.",
            ],
            closing: "Best regards,",
            signature: "[Your Full Name]\n[Your Contact Information]",
          },
        },
      },
      {
        type: "Thank You Email After Long Interview",
        useCase:
          "To express appreciation after an in-depth interview, providing more detailed insights.",
        emailTemplate: {
          subject: "Thank You for the Opportunity",
          body: {
            greeting: "Dear [Interviewer's Name],",
            paragraphs: [
              "Thank you very much for your time yesterday—it was a pleasure speaking with you about the [Position Title] role. From our conversation, it's clear that [Company Name] is doing exciting work in [specific area], and I would be thrilled to contribute my experience in [your relevant experience] to your team.",
              "I particularly enjoyed discussing [specific topic from the interview], and I am confident that my skills in [related skill] would be beneficial in this context.",
              "Please feel free to contact me if I can provide any further information. I look forward to the possibility of working together.",
            ],
            closing: "Sincerely,",
            signature: "[Your Full Name]\n[Your Contact Information]",
          },
        },
      },
      {
        type: "Follow-Up Email After No Response",
        useCase:
          "To inquire about the status of your application if you haven't heard back within a specified timeframe.",
        emailTemplate: {
          subject: "Following Up on [Position Title] Application",
          body: {
            greeting: "Dear [Interviewer's Name],",
            paragraphs: [
              "I hope this message finds you well. I am writing to follow up on my application for the [Position Title] role. I interviewed on [date], and I am eager to learn about the next steps in the hiring process.",
              "I remain very interested in the opportunity to join [Company Name] and contribute to [specific project or team].",
              "Please let me know if there is any additional information I can provide. I look forward to your update.",
            ],
            closing: "Thank you,",
            signature: "[Your Full Name]\n[Your Contact Information]",
          },
        },
      },
      {
        type: "Networking Follow-Up Email",
        useCase:
          "To stay in touch with the interviewer for future opportunities or professional networking.",
        emailTemplate: {
          subject: "Staying in Touch",
          body: {
            greeting: "Dear [Interviewer's Name],",
            paragraphs: [
              "I hope you're doing well. I wanted to express my continued interest in opportunities at [Company Name] and stay connected.",
              "Our previous discussions about [specific topic] were insightful, and I have since [any relevant updates or achievements].",
              "Please keep me in mind for any future roles that align with my background in [your field or expertise]. I look forward to staying in touch.",
            ],
            closing: "Best regards,",
            signature: "[Your Full Name]\n[Your Contact Information]",
          },
        },
      },
    ],
    followUpTips: [
      "Send your follow-up email within 24 hours to show enthusiasm and promptness.",
      "Express gratitude for the opportunity and personalize your message based on the conversation during the interview.",
      "Reiterate your interest in the position, highlighting specific aspects of the role or company that excite you.",
      "Maintain professionalism and a polite tone, even if you are inquiring about delays.",
      "Provide additional details or documentation if requested, such as references, work samples, or certifications.",
      "Don't over-follow-up. Limit your follow-up emails to one or two unless the interviewer gives explicit instructions for more communication.",
      "If rejected, politely ask for constructive feedback to improve for future opportunities.",
      "Keep your email concise and avoid unnecessary repetition.",
    ],
  };

  const EmailTemplate = ({ template }) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{template.type}</CardTitle>
        <p className="text-sm text-gray-600">{template.useCase}</p>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold mb-2">
            Subject: {template.emailTemplate.subject}
          </p>
          <div className="space-y-4">
            <p>{template.emailTemplate.body.greeting}</p>
            {template.emailTemplate.body.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700">
                {paragraph}
              </p>
            ))}
            <p>{template.emailTemplate.body.closing}</p>
            <p className="whitespace-pre-line">
              {template.emailTemplate.body.signature}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Follow-up Email Guide
      </h1>

      <Alert className="mb-8">
        <Info className="h-4 w-4" />
        <AlertDescription>{emailData.definition.what}</AlertDescription>
      </Alert>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Templates
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex items-center gap-2">
            <ListChecks className="h-4 w-4" />
            Follow-up Tips
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="mt-6">
          <div className="space-y-6">
            {emailData.emailSamples.map((template, idx) => (
              <EmailTemplate key={idx} template={template} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tips" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Best Practices for Follow-up Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {emailData.followUpTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FollowUpMailInfo;
