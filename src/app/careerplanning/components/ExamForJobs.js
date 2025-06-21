"use client";

import React, { useState } from "react";
import { Search, BookOpen, Filter } from "lucide-react";
import { DataCompetitiveExams } from "@/app/data/CompititiveExam";

const CompetitiveExamsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);

  const competitiveExams = DataCompetitiveExams;
  const filteredExams = competitiveExams.filter((exam) =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Skip link for screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-800 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10" role="banner">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Competitive Exams Guide
          </h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Your comprehensive resource for competitive exam preparation
          </p>
        </header>

        {/* Live region for screen reader announcements */}
        <div aria-live="polite" className="sr-only">
          {selectedExam ? `Opened details for ${selectedExam.name}` : ""}
        </div>

        {/* Main content */}
        <main id="main-content">
          {/* Search and Filter Section */}
          <section
            className="max-w-2xl mx-auto mb-8"
            role="search"
            aria-label="Search Exams"
          >
            <div className="relative">
              <label htmlFor="search-exams" className="sr-only">
                Search competitive exams
              </label>
              <input
                id="search-exams"
                type="text"
                placeholder="Search exams..."
                className="w-full p-3 pl-10 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search competitive exams by name"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                aria-hidden="true"
              />
            </div>
          </section>

          {/* Exam List */}
          <section
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="List of competitive exams"
          >
            {filteredExams.map((exam) => (
              <div
                key={exam.name}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedExam(exam)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedExam(exam);
                  }
                }}
                tabIndex={0}
                role="listitem"
                aria-label={`View details for ${exam.name} exam`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-blue-800">
                      {exam.name}
                    </h2>
                    <BookOpen className="text-blue-500" aria-hidden="true" />
                  </div>
                  <p className="text-blue-600 mb-4 line-clamp-3">
                    {exam.description}
                  </p>
                  <div className="flex items-center text-blue-700">
                    <Filter className="mr-2" size={16} aria-hidden="true" />
                    <span className="text-sm">Click to view details</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* Modal for Exam Details */}
        {selectedExam && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exam-details-title"
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto outline-none"
              tabIndex={-1}
            >
              <div className="p-6 bg-blue-800 text-white rounded-t-lg">
                <h2 id="exam-details-title" className="text-2xl font-bold">
                  {selectedExam.name}
                </h2>
                <p className="text-blue-200">{selectedExam.fullForm}</p>
              </div>
              <div className="p-6">
                <section className="mb-6" aria-labelledby="description-heading">
                  <h3
                    id="description-heading"
                    className="text-xl font-semibold text-blue-800 mb-4"
                  >
                    Description
                  </h3>
                  <p className="text-blue-700">{selectedExam.description}</p>
                </section>

                <section className="mb-6" aria-labelledby="resources-heading">
                  <h3
                    id="resources-heading"
                    className="text-xl font-semibold text-blue-800 mb-4"
                  >
                    Resources
                  </h3>
                  <ul
                    className="list-disc list-inside text-blue-700"
                    aria-label="Resources for exam preparation"
                  >
                    {selectedExam.resources.map((resource, index) => (
                      <li key={index} className="mb-2">
                        {resource}
                      </li>
                    ))}
                  </ul>
                </section>

                <section aria-labelledby="tips-heading">
                  <h3
                    id="tips-heading"
                    className="text-xl font-semibold text-blue-800 mb-4"
                  >
                    Preparation Tips
                  </h3>
                  <ul
                    className="list-disc list-inside text-blue-700"
                    aria-label="Preparation tips for the exam"
                  >
                    {selectedExam.tips.map((tip, index) => (
                      <li key={index} className="mb-2">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="p-4 bg-blue-50 text-right">
                <button
                  onClick={() => setSelectedExam(null)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label={`Close details of ${selectedExam.name}`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitiveExamsDashboard;
