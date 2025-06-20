import React, { useState } from "react";
import {
  Search,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DataScam } from "@/app/data/JobScams";

const JobScam = () => {
  const [expandedScam, setExpandedScam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const scan = DataScam;

  const filteredScams = scan.job_scams.filter(
    (scam) =>
      scam.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scam.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-blue-50 p-4 md:p-6 lg:p-8" role="main">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          id="page-title"
        >
          Job Scam Awareness Guide
        </h1>

        <Alert className="bg-blue-100 border-blue-300 mb-6" role="alert">
          <AlertTriangle className="h-5 w-5 text-blue-700" aria-hidden="true" />
          <AlertDescription className="text-blue-800">
            Stay informed and protected against common job scams. Knowledge is
            your first line of defense.
          </AlertDescription>
        </Alert>

        {/* Search Bar */}
        <section className="relative mb-6" aria-labelledby="search-label">
          <label id="search-label" htmlFor="scam-search" className="sr-only">
            Search for specific scams or keywords
          </label>
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5"
            aria-hidden="true"
          />
          <input
            id="scam-search"
            type="text"
            placeholder="Search for specific scams or keywords..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-describedby="search-hint"
          />
          <p id="search-hint" className="sr-only">
            Type to filter scams based on type or description.
          </p>
        </section>
      </div>

      {/* Scams Grid */}
      <section
        className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1"
        aria-labelledby="scam-section-heading"
      >
        <h2 id="scam-section-heading" className="sr-only">
          Scam Details List
        </h2>
        {filteredScams.map((scam, index) => {
          const isExpanded = expandedScam === index;
          const sectionId = `scam-details-${index}`;
          return (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="bg-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-lg font-semibold flex justify-between items-center">
                  {scam.type}
                  <button
                    onClick={() => setExpandedScam(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    aria-controls={sectionId}
                    aria-label={`Toggle details for ${scam.type}`}
                    className="p-1 hover:bg-blue-500 rounded-full transition-colors duration-200"
                  >
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 mb-4">{scam.description}</p>

                <div id={sectionId} hidden={!isExpanded}>
                  <div className="space-y-4">
                    {/* Examples */}
                    <section
                      className="bg-blue-50 p-4 rounded-lg"
                      aria-label="Examples"
                    >
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Examples:
                      </h3>
                      <ul className="list-disc list-inside text-blue-800 space-y-2">
                        {scam.examples.map((example, i) => (
                          <li key={i} className="text-sm">
                            {example}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Red Flags */}
                    <section
                      className="bg-red-50 p-4 rounded-lg"
                      aria-label="Red Flags"
                    >
                      <h3 className="font-semibold text-red-900 mb-2">
                        Red Flags:
                      </h3>
                      <ul className="list-disc list-inside text-red-800 space-y-2">
                        {scam.red_flags.map((flag, i) => (
                          <li key={i} className="text-sm">
                            {flag}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Prevention Tips */}
                    <section
                      className="bg-green-50 p-4 rounded-lg"
                      aria-label="Prevention Tips"
                    >
                      <h3 className="font-semibold text-green-900 mb-2">
                        Prevention Tips:
                      </h3>
                      <ul className="list-disc list-inside text-green-800 space-y-2">
                        {scam.prevention_tips.map((tip, i) => (
                          <li key={i} className="text-sm">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Resources */}
                    <section className="mt-4" aria-label="Resources">
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Resources:
                      </h3>
                      <div className="space-y-2">
                        {scam.resources.map((resource, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg">
                            <p className="font-medium text-blue-800">
                              {resource.organization}
                            </p>
                            <p className="text-sm text-gray-600">
                              Contact: {resource.contact}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                {!isExpanded && (
                  <button
                    onClick={() => setExpandedScam(index)}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label={`Learn more about ${scam.type}`}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
};

export default JobScam;
