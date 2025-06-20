"use client";
import { useState } from "react";

export default function JobSubmissionForm() {
  const [formData, setFormData] = useState({
    jobRole: "",
    jobDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // In a real application, you would send this data to your API
      // Example: await fetch('/api/jobs', { method: 'POST', body: JSON.stringify(formData) })

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form and show success message
      setFormData({ jobRole: "", jobDescription: "" });
      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (err) {
      setError("Failed to submit the job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 border mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Job</h2>

      {submitSuccess && (
        <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
          Job submitted successfully!
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="jobRole"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Role
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="jobDescription"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows="6"
            placeholder="Describe the job responsibilities, requirements, and qualifications..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-md text-white font-medium ${
              isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          >
            {isSubmitting ? "Submitting..." : "Submit Job"}
          </button>
        </div>
      </form>
    </div>
  );
}
