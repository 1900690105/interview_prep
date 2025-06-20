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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("JobReferral");
    if (storedData) {
      setData(JSON.parse(storedData));
      setMessage(true);
    }
  }, []);

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
      console.log(JSON.stringify(json));
      setMessage(true);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <div className=" p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-500 mt-8">
      <h1 className="text-2xl font-semibold mb-4">Job Application Form</h1>
      <form
        onSubmit={handleSubmit}
        className=" grid grid-cols-2 justify-center gap-2"
      >
        <div className="mb-4">
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
            value={formData.jobRole}
            onChange={handleChange}
            title="role name"
            placeholder="Eg. web developer,civil engineer ..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="jobId"
            className="block text-gray-700 font-medium mb-2"
          >
            Job ID/Link
          </label>
          <input
            type="text"
            id="jobId"
            name="jobId"
            value={formData.jobId}
            onChange={handleChange}
            title="Enter Job ID/Link"
            placeholder="Eg. 25568555"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
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
            value={formData.company}
            onChange={handleChange}
            placeholder="Eg. google,microsoft"
            title="company"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="referrerName"
            className="block text-gray-700 font-medium mb-2"
          >
            Referrer's Name
          </label>
          <input
            type="text"
            id="referrerName"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            placeholder="Eg. Mr.Nikhil K"
            title="who gone referr you"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
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
            value={formData.relationWithReferrer}
            placeholder="Eg. unknown,frirnd,relative .."
            title="relationWithReferrer"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="myExperience"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Experience
          </label>
          <input
            id="myExperience"
            name="myExperience"
            value={formData.myExperience}
            onChange={handleChange}
            placeholder="Eg. fresher"
            title="your experience"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
