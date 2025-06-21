"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Briefcase, Building2, FileText } from "lucide-react";
import { GrUserExpert } from "react-icons/gr";

import LoadingDialog from "@/app/components/LoadingDialog";
import { AiMockInterview } from "../../../../../config/AllAiModels";
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // For unique ID

function DetailForm({ setOk, setQuestions }) {
  const [formData, setFormData] = useState({
    jobRole: "",
    companyName: "",
    jobDescription: "",
    experience: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      experience: value,
    }));
  };

  function removeExtraSpaces(paragraph) {
    return paragraph.trim().replace(/\s+/g, " ");
  }
  // update path as needed

  const handleSubmit = async () => {
    setLoading(true);
    const desc = removeExtraSpaces(formData.jobDescription);

    if (formData.jobRole.trim() && formData.companyName.trim()) {
      const prompt = `Create a list of probable interview questions based on the following input:
    Job Role: ${formData.jobRole}.
    Job Description: ${desc || "N/A"}.
    Experience: ${formData.experience || "N/A"}.
    The questions should be divided into the following categories:
      - General_Questions
      - Technical_Questions
      - Behavioral_Questions
      - Situational_Questions
      - Closing_Questions
    Format output in JSON.`;

      try {
        const result = await AiMockInterview.sendMessage(prompt);
        const responseText = result.response.text();
        const response = JSON.parse(responseText);

        // Generate unique ID
        const uniqueId = uuidv4();

        // Store in Firestore with document ID = mockId
        await setDoc(doc(db, "mockinterview", uniqueId), {
          mockId: uniqueId,
          ...formData,
          jobDescription: desc,
          questions: response,
          timestamp: new Date(),
        });

        setQuestions(response);
        setOk(true);
        window.location.href = `/technical/mockinterview/${uniqueId}`;
      } catch (error) {
        console.error("Error saving to Firestore:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      jobRole: "",
      companyName: "",
      jobDescription: "",
      experience: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-xl">
      <h2
        className="text-2xl font-bold mb-6 text-center text-gray-800"
        id="job-details-heading"
      >
        Job Details
      </h2>

      <form
        aria-labelledby="job-details-heading"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="space-y-4"
      >
        {/* Job Role Input */}
        <div className="relative">
          <label htmlFor="jobRole" className="sr-only">
            Job Role
          </label>
          <Briefcase
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
            aria-hidden="true"
          />
          <Input
            id="jobRole"
            name="jobRole"
            type="text"
            value={formData.jobRole}
            onChange={handleInputChange}
            placeholder="Job Role"
            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Company Name Input */}
        <div className="relative">
          <label htmlFor="companyName" className="sr-only">
            Company Name
          </label>
          <Building2
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
            aria-hidden="true"
          />
          <Input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>

        {/* Experience Dropdown */}
        <div className="relative">
          <label htmlFor="experience" className="sr-only">
            Experience Level
          </label>
          <GrUserExpert
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
            aria-hidden="true"
          />
          <Select
            value={formData.experience}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger
              id="experience"
              className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              aria-label="Select Experience Level"
            >
              <SelectValue placeholder="Select Experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fresher">Fresher</SelectItem>
              <SelectItem value="intern">Intern</SelectItem>
              <SelectItem value="experienced">Experienced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Description Textarea */}
        <div className="relative">
          <label htmlFor="jobDescription" className="sr-only">
            Job Description
          </label>
          <FileText
            className="absolute left-3 top-3 text-gray-400"
            size={20}
            aria-hidden="true"
          />
          <Textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            placeholder="Job Description"
            rows={6}
            className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={!formData.jobRole.trim() || !formData.companyName.trim()}
          aria-disabled={
            !formData.jobRole.trim() || !formData.companyName.trim()
          }
        >
          Submit Job Details
        </Button>

        {/* Loading Dialog */}
        <div aria-live="polite" aria-atomic="true">
          <LoadingDialog loading={loading} />
        </div>
      </form>
    </div>
  );
}

export default DetailForm;
