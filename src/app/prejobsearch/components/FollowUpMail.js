import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AiFollowUpMail } from "../../../../config/AllAiModels";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

const InterviewFollowupForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    interviewerNames: "",
    interviewDate: "",
  });
  const [emailData, setEmailData] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `Write a professional and personalized follow-up email for a "web developer" interview at "google" with "nikhil kandhare", expressing gratitude for the opportunity, referencing specific details discussed during the interview, reiterating enthusiasm for the role, highlighting key qualifications, and inquiring about the next steps in the hiring process, while offering to provide additional information if needed, in a polite, professional, and concise tone.in json formate.`;
    try {
      const result = await AiFollowUpMail.sendMessage(prompt);
      const responsetext = await result.response.text();
      const json = await JSON.parse(responsetext);
      console.log(json);
      setEmailData(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <main>
        <Card
          className="max-w-3xl mx-auto bg-white shadow-lg"
          role="form"
          aria-labelledby="form-title"
        >
          <CardHeader
            className="space-y-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg"
            role="banner"
          >
            <CardTitle id="form-title" className="text-2xl font-bold">
              Interview Follow-up Details
            </CardTitle>
            <p className="text-blue-100">
              Track and organize your interview information
            </p>
          </CardHeader>

          <CardContent className="p-6">
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              aria-describedby="form-instructions"
            >
              <p id="form-instructions" className="sr-only">
                Fill out the interview details below and submit the form to
                save.
              </p>

              {/* Interview Details Section */}
              <section aria-labelledby="interview-details-heading">
                <h2
                  id="interview-details-heading"
                  className="text-xl font-semibold text-gray-800 mb-4 flex items-center"
                >
                  <span
                    className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm"
                    aria-hidden="true"
                  >
                    1
                  </span>
                  Interview Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="jobTitle"
                      className="text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      id="jobTitle"
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter job title"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="companyName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter company name"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="interviewerNames"
                      className="text-sm font-medium text-gray-700"
                    >
                      Interviewer's Name(s)
                    </label>
                    <input
                      id="interviewerNames"
                      type="text"
                      name="interviewerNames"
                      value={formData.interviewerNames}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter interviewer names"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="interviewDate"
                      className="text-sm font-medium text-gray-700"
                    >
                      Interview Date
                    </label>
                    <input
                      id="interviewDate"
                      type="date"
                      name="interviewDate"
                      value={formData.interviewDate}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      aria-required="true"
                    />
                  </div>
                </div>
              </section>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Save Details
              </button>
            </form>
          </CardContent>
        </Card>

        {emailData && (
          <section
            aria-live="polite"
            aria-atomic="true"
            className="min-h-screen p-4 flex items-center justify-center"
            aria-label="Generated email preview"
          >
            <Card
              className="w-full max-w-2xl bg-white shadow-lg"
              role="region"
              aria-labelledby="email-preview-title"
            >
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h1
                      id="email-preview-title"
                      className="text-2xl font-bold text-gray-900"
                    >
                      {emailData.subject}
                    </h1>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      aria-label="Send email"
                      type="button"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Send
                    </Button>
                  </div>

                  {/* Email Details */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">To:</span>
                      <span>{emailData.to}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">From:</span>
                      <span>{emailData.from}</span>
                    </div>
                  </div>
                </div>

                {/* Email Body */}
                <article className="prose max-w-none" tabIndex={0}>
                  {emailData.body.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>

                {/* Footer */}
                <footer className="pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      aria-label="Add phone number to email"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Add Phone
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      aria-label="Add LinkedIn profile to email"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      Add LinkedIn
                    </Button>
                  </div>
                </footer>
              </div>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
};

export default InterviewFollowupForm;
