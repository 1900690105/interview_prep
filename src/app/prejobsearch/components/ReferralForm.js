import React, { useEffect, useState } from "react";
import { AiJobReferral } from "../../../../config/AllAiModels";

const JobApplicationForm = ({ setMessage, setData }) => {
  const [formData, setFormData] = useState({
    jobRole: "",
    jobId: "",
    company: "",
    referrerName: "",
    relationWithReferrer: "",
    myExperience: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("JobReferral");
    if (storedData) {
      setData(JSON.parse(storedData));
      setMessage(true);
    }
  }, [setData, setMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = `job_role: ${formData.jobRole}, job_id:${formData.jobId},company:${formData.company}, Referrer's Name:${formData.referrerName}, relation with Referrer's:${formData.relationWithReferrer} ,my_experince: ${formData.myExperience}.Write a professional and personalized job referral LinkedIn message and email using the following structure:
Greeting and Personal Connection, Mention the Job You’re Interested In, Explain Why You Are a Good Fit, Make a Polite Request for Referral, Attach Your Resume (if appropriate)
The tone should be respectful, professional, and enthusiastic. Tailor the message to be concise and targeted.in json formate.`;

    try {
      const result = await AiJobReferral.sendMessage(prompt);
      const message = await result.response.text();
      const json = JSON.parse(message);
      setData(json);
      localStorage.setItem("JobReferral", JSON.stringify(json));
      setMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      role="form"
      aria-labelledby="job-application-title"
      className="p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-500 mt-8"
    >
      <h1 id="job-application-title" className="text-2xl font-semibold mb-4">
        Job Application Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        aria-describedby="form-instructions"
      >
        <p id="form-instructions" className="sr-only">
          Please fill in all required fields before submitting the form.
        </p>

        <div>
          <label
            htmlFor="jobRole"
            className="block text-gray-700 font-medium mb-2"
          >
            Job Role
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            aria-label="Job Role"
            title="Job role name"
            value={formData.jobRole}
            onChange={handleChange}
            placeholder="E.g., Web Developer, Civil Engineer"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label
            htmlFor="jobId"
            className="block text-gray-700 font-medium mb-2"
          >
            Job ID / Link
          </label>
          <input
            type="text"
            id="jobId"
            name="jobId"
            aria-label="Job ID or Job Link"
            title="Enter Job ID or link"
            value={formData.jobId}
            onChange={handleChange}
            placeholder="Eg. 25568555"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-gray-700 font-medium mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            aria-label="Company Name"
            title="Company name"
            value={formData.company}
            onChange={handleChange}
            placeholder="E.g., Google, Microsoft"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label
            htmlFor="referrerName"
            className="block text-gray-700 font-medium mb-2"
          >
            Referrer&apos;s Name
          </label>
          <input
            type="text"
            id="referrerName"
            name="referrerName"
            aria-label="Name of the Referrer"
            title="Person who will refer you"
            value={formData.referrerName}
            onChange={handleChange}
            placeholder="E.g., Mr. Nikhil K"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label
            htmlFor="relationWithReferrer"
            className="block text-gray-700 font-medium mb-2"
          >
            Relation with Referrer
          </label>
          <input
            type="text"
            id="relationWithReferrer"
            name="relationWithReferrer"
            aria-label="Relation with the Referrer"
            title="E.g., friend, colleague, relative"
            value={formData.relationWithReferrer}
            onChange={handleChange}
            placeholder="E.g., friend, relative, unknown"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label
            htmlFor="myExperience"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Experience
          </label>
          <input
            type="text"
            id="myExperience"
            name="myExperience"
            aria-label="Your Experience Level"
            title="Your professional experience"
            value={formData.myExperience}
            onChange={handleChange}
            placeholder="E.g., Fresher, 2 years"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Submit job application form"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobApplicationForm;
