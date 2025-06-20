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
      // your email samples unchanged...
    ],
    followUpTips: [
      // your tips unchanged...
    ],
  };

  const EmailTemplate = ({ template }) => (
    <article aria-label={`Email template: ${template.type}`} className="mb-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">{template.type}</CardTitle>
          <p className="text-sm text-gray-600">{template.useCase}</p>
        </CardHeader>
        <CardContent>
          <section className="bg-gray-50 p-4 rounded-lg">
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
          </section>
        </CardContent>
      </Card>
    </article>
  );

  return (
    <main className="max-w-4xl mx-auto p-4" role="main">
      <h1 className="text-3xl font-bold text-center mb-8">
        Follow-up Email Guide
      </h1>

      <Alert
        className="mb-8"
        role="region"
        aria-live="polite"
        aria-atomic="true"
      >
        <Info className="h-4 w-4" aria-hidden="true" />
        <AlertDescription>{emailData.definition.what}</AlertDescription>
      </Alert>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
        role="tablist"
        aria-label="Follow-up email tabs"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="templates"
            className="flex items-center gap-2"
            role="tab"
            aria-selected={activeTab === "templates"}
            aria-controls="templates-tabpanel"
            id="templates-tab"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Templates
          </TabsTrigger>

          <TabsTrigger
            value="tips"
            className="flex items-center gap-2"
            role="tab"
            aria-selected={activeTab === "tips"}
            aria-controls="tips-tabpanel"
            id="tips-tab"
          >
            <ListChecks className="h-4 w-4" aria-hidden="true" />
            Follow-up Tips
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="templates"
          className="mt-6"
          role="tabpanel"
          id="templates-tabpanel"
          aria-labelledby="templates-tab"
          tabIndex={0}
        >
          <div className="space-y-6">
            {emailData.emailSamples.map((template, idx) => (
              <EmailTemplate key={idx} template={template} />
            ))}
          </div>
        </TabsContent>

        <TabsContent
          value="tips"
          className="mt-6"
          role="tabpanel"
          id="tips-tabpanel"
          aria-labelledby="tips-tab"
          tabIndex={0}
        >
          <section aria-label="Best practices for follow-up emails">
            <Card>
              <CardHeader>
                <CardTitle>Best Practices for Follow-up Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {emailData.followUpTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm"
                        aria-hidden="true"
                      >
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default FollowUpMailInfo;
