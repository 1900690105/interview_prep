"use client";
import { useState } from "react";
import JobListingForm from "./components/JobListingForm";
import JobListing from "./components/JobListing";

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleJobAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Job Preparation Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find your dream job and prepare for success
          </p>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            {showForm ? "View Jobs" : "Post a Job"}
          </button>
        </header>

        {showForm ? (
          <JobListingForm onJobAdded={handleJobAdded} />
        ) : (
          <JobListing refreshTrigger={refreshTrigger} />
        )}
      </div>
    </div>
  );
}
