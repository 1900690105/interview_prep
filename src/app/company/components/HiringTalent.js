// components/JobPostingForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HiringTalent() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    jobRole: "",
    experience: "",
    description: "",
    aboutCompany: "",
    vision: "",
    mission: "",
    specificRequirements: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.jobRole.trim()) newErrors.jobRole = "Job role is required";
    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";
    if (!formData.description.trim())
      newErrors.description = "Job description is required";
    if (!formData.aboutCompany.trim())
      newErrors.aboutCompany = "About company is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/job-postings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to success page or show success message
        router.push("/job-posting-success");
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to submit job posting");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-xl"
      role="main"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-8">
        Post a Job for Students
      </h1>

      {/* Live region for error announcements */}
      <div aria-live="polite" className="sr-only" id="form-errors">
        {Object.values(errors).some(Boolean) &&
          "There are form errors that need your attention."}
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        aria-describedby="form-errors"
      >
        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name<span className="text-red-600">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.companyName}
            aria-describedby={
              errors.companyName ? "companyName-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.companyName
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            }`}
            placeholder="Enter your company name"
          />
          {errors.companyName && (
            <p id="companyName-error" className="mt-1 text-sm text-red-600">
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Job Role */}
        <div>
          <label
            htmlFor="jobRole"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Role<span className="text-red-600">*</span>
          </label>
          <input
            id="jobRole"
            name="jobRole"
            type="text"
            value={formData.jobRole}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.jobRole}
            aria-describedby={errors.jobRole ? "jobRole-error" : undefined}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.jobRole
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            }`}
            placeholder="e.g. Frontend Developer, Marketing Intern"
          />
          {errors.jobRole && (
            <p id="jobRole-error" className="mt-1 text-sm text-red-600">
              {errors.jobRole}
            </p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Experience Required<span className="text-red-600">*</span>
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.experience}
            aria-describedby={
              errors.experience ? "experience-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.experience
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            }`}
          >
            <option value="">Select experience level</option>
            <option value="Internship">Internship</option>
            <option value="Entry Level (0-1 years)">
              Entry Level (0-1 years)
            </option>
            <option value="Junior (1-2 years)">Junior (1-2 years)</option>
            <option value="Mid-Level (2-4 years)">Mid-Level (2-4 years)</option>
            <option value="Senior (4+ years)">Senior (4+ years)</option>
          </select>
          {errors.experience && (
            <p id="experience-error" className="mt-1 text-sm text-red-600">
              {errors.experience}
            </p>
          )}
        </div>

        {/* Job Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Description<span className="text-red-600">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={
              errors.description ? "description-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.description
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            }`}
            placeholder="Describe the responsibilities and expectations for this role"
          />
          {errors.description && (
            <p id="description-error" className="mt-1 text-sm text-red-600">
              {errors.description}
            </p>
          )}
        </div>

        {/* About Company */}
        <div>
          <label
            htmlFor="aboutCompany"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            About Company<span className="text-red-600">*</span>
          </label>
          <textarea
            id="aboutCompany"
            name="aboutCompany"
            value={formData.aboutCompany}
            onChange={handleChange}
            rows={3}
            aria-required="true"
            aria-invalid={!!errors.aboutCompany}
            aria-describedby={
              errors.aboutCompany ? "aboutCompany-error" : undefined
            }
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.aboutCompany
                ? "border-red-500 focus:ring-red-300"
                : "border-gray-300 focus:ring-indigo-300"
            }`}
            placeholder="Tell students about your company"
          />
          {errors.aboutCompany && (
            <p id="aboutCompany-error" className="mt-1 text-sm text-red-600">
              {errors.aboutCompany}
            </p>
          )}
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="vision"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Vision
            </label>
            <textarea
              id="vision"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              placeholder="Your company's vision (optional)"
            />
          </div>
          <div>
            <label
              htmlFor="mission"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Mission
            </label>
            <textarea
              id="mission"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              placeholder="Your company's mission (optional)"
            />
          </div>
        </div>

        {/* Specific Requirements */}
        <div>
          <label
            htmlFor="specificRequirements"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Specific Requirements
          </label>
          <textarea
            id="specificRequirements"
            name="specificRequirements"
            value={formData.specificRequirements}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
            placeholder="Any specific skills, qualifications, or requirements (optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
              isSubmitting
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                <span>Submitting...</span>
              </div>
            ) : (
              "Post Job"
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
