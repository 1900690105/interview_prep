"use client";
import React, { useState } from "react";
import {
  Building,
  Users,
  CheckCircle,
  XCircle,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import YouTube from "react-youtube";
import { DataAgency } from "@/app/data/HiringAgency";

function Agency() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showAllAgencies, setShowAllAgencies] = useState(false);

  const agency = DataAgency;

  const resources = [
    {
      name: "how-do-recruitment-agencies-work",
      link: "https://www.capterra.com/resources/how-do-recruitment-agencies-work/",
    },
  ];

  const [videoId, setVideoId] = useState("ePLajxLpUNk");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-blue-600 focus:px-3 focus:py-2 focus:rounded-md focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12" role="banner">
        <h1 tabIndex={-1} className="text-4xl font-bold text-blue-900 mb-4">
          Understanding Recruitment Agencies
        </h1>
        <p className="text-lg text-gray-600">
          {agency.recruitment_agency.definition}
        </p>
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        tabIndex={-1}
        className="max-w-4xl mx-auto space-y-6"
        role="main"
        aria-label="Recruitment Agencies information"
      >
        {/* How it Works Section */}
        <section
          aria-labelledby="how-it-works-header"
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleSection("how_it_works")}
            aria-expanded={expandedSection === "how_it_works"}
            aria-controls="how-it-works-content"
            id="how-it-works-header"
            className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center space-x-3">
              <Users className="text-blue-600 w-6 h-6" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-blue-900">
                How It Works
              </h2>
            </div>
            <span className="sr-only">
              {expandedSection === "how_it_works"
                ? "Collapse How It Works section"
                : "Expand How It Works section"}
            </span>
            {expandedSection === "how_it_works" ? (
              <ChevronUp aria-hidden="true" />
            ) : (
              <ChevronDown aria-hidden="true" />
            )}
          </button>

          {expandedSection === "how_it_works" && (
            <div
              id="how-it-works-content"
              className="p-6"
              role="region"
              aria-live="polite"
              aria-labelledby="how-it-works-header"
              tabIndex={-1}
            >
              <ol className="space-y-4">
                {agency.recruitment_agency.how_it_works.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="ml-4 text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              <YouTube videoId={videoId} opts={opts} />
            </div>
          )}
        </section>

        {/* Types Section */}
        <section
          aria-labelledby="types-header"
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleSection("types")}
            aria-expanded={expandedSection === "types"}
            aria-controls="types-content"
            id="types-header"
            className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center space-x-3">
              <Building className="text-blue-600 w-6 h-6" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-blue-900">
                Types of Agencies
              </h2>
            </div>
            <span className="sr-only">
              {expandedSection === "types"
                ? "Collapse Types of Agencies section"
                : "Expand Types of Agencies section"}
            </span>
            {expandedSection === "types" ? (
              <ChevronUp aria-hidden="true" />
            ) : (
              <ChevronDown aria-hidden="true" />
            )}
          </button>

          {expandedSection === "types" && (
            <div
              id="types-content"
              className="p-6 grid gap-4 sm:grid-cols-2"
              role="region"
              aria-live="polite"
              aria-labelledby="types-header"
              tabIndex={-1}
            >
              {Object.entries(agency.recruitment_agency.types).map(
                ([type, description]) => (
                  <article
                    key={type}
                    className="bg-blue-50 rounded-lg p-4"
                    tabIndex={0}
                    aria-label={`${type.replace(/_/g, " ")}`}
                  >
                    <h3 className="font-semibold text-blue-800 mb-2">
                      {type
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </h3>
                    <p className="text-gray-700 text-sm">{description}</p>
                  </article>
                )
              )}
            </div>
          )}
        </section>

        {/* Pros and Cons Section */}
        <section
          aria-label="Pros and Cons of Recruitment Agencies"
          className="grid gap-6 sm:grid-cols-2"
        >
          {/* Advantages */}
          <article
            aria-labelledby="advantages-header"
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleSection("advantages")}
              aria-expanded={expandedSection === "advantages"}
              aria-controls="advantages-content"
              id="advantages-header"
              className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle
                  className="text-green-600 w-6 h-6"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-semibold text-blue-900">
                  Advantages
                </h2>
              </div>
              <span className="sr-only">
                {expandedSection === "advantages"
                  ? "Collapse Advantages section"
                  : "Expand Advantages section"}
              </span>
              {expandedSection === "advantages" ? (
                <ChevronUp aria-hidden="true" />
              ) : (
                <ChevronDown aria-hidden="true" />
              )}
            </button>

            {expandedSection === "advantages" && (
              <div
                id="advantages-content"
                className="p-6"
                role="region"
                aria-live="polite"
                aria-labelledby="advantages-header"
                tabIndex={-1}
              >
                <ul className="space-y-3">
                  {agency.recruitment_agency.advantages.map(
                    (advantage, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <CheckCircle
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        {advantage}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </article>

          {/* Disadvantages */}
          <article
            aria-labelledby="disadvantages-header"
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleSection("disadvantages")}
              aria-expanded={expandedSection === "disadvantages"}
              aria-controls="disadvantages-content"
              id="disadvantages-header"
              className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="flex items-center space-x-3">
                <XCircle className="text-red-600 w-6 h-6" aria-hidden="true" />
                <h2 className="text-xl font-semibold text-blue-900">
                  Disadvantages
                </h2>
              </div>
              <span className="sr-only">
                {expandedSection === "disadvantages"
                  ? "Collapse Disadvantages section"
                  : "Expand Disadvantages section"}
              </span>
              {expandedSection === "disadvantages" ? (
                <ChevronUp aria-hidden="true" />
              ) : (
                <ChevronDown aria-hidden="true" />
              )}
            </button>

            {expandedSection === "disadvantages" && (
              <div
                id="disadvantages-content"
                className="p-6"
                role="region"
                aria-live="polite"
                aria-labelledby="disadvantages-header"
                tabIndex={-1}
              >
                <ul className="space-y-3">
                  {agency.recruitment_agency.disadvantages.map(
                    (disadvantage, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <XCircle
                          className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        {disadvantage}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </article>
        </section>

        {/* Top Agencies Section */}
        <section
          aria-labelledby="top-agencies-header"
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleSection("agencies")}
            aria-expanded={expandedSection === "agencies"}
            aria-controls="top-agencies-content"
            id="top-agencies-header"
            className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center space-x-3">
              <Briefcase className="text-blue-600 w-6 h-6" aria-hidden="true" />
              <h2 className="text-xl font-semibold text-blue-900">
                Top Recruitment Agencies
              </h2>
            </div>
            <span className="sr-only">
              {expandedSection === "agencies"
                ? "Collapse Top Recruitment Agencies section"
                : "Expand Top Recruitment Agencies section"}
            </span>
            {expandedSection === "agencies" ? (
              <ChevronUp aria-hidden="true" />
            ) : (
              <ChevronDown aria-hidden="true" />
            )}
          </button>

          {expandedSection === "agencies" && (
            <div
              id="top-agencies-content"
              className="p-6"
              role="region"
              aria-live="polite"
              aria-labelledby="top-agencies-header"
              tabIndex={-1}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {agency.recruitment_agency.list_of_agencies
                  .slice(0, showAllAgencies ? undefined : 6)
                  .map((agencyItem, index) => (
                    <article
                      key={index}
                      className="bg-blue-50 rounded-lg p-4"
                      tabIndex={0}
                      aria-label={`${agencyItem.name} recruitment agency`}
                    >
                      <h3 className="font-semibold text-blue-800 mb-2">
                        {agencyItem.name}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {agencyItem.specialization}
                      </p>
                    </article>
                  ))}
              </div>
              {!showAllAgencies &&
                agency.recruitment_agency.list_of_agencies.length > 6 && (
                  <button
                    onClick={() => setShowAllAgencies(true)}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Show all recruitment agencies"
                  >
                    Show All Agencies
                  </button>
                )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Agency;
