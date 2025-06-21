"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, BookOpen, Info, Plus, Minus } from "lucide-react";
import { DataTerms } from "@/app/data/JobTerms";

function JobsTerms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTerm, setExpandedTerm] = useState(null);
  const terms = DataTerms;

  const filteredTerms = terms.filter(
    (term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof term.desc === "string" &&
        term.desc.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderDescription = (desc) => {
    if (typeof desc === "string") {
      return <p className="text-gray-600">{desc}</p>;
    }

    return (
      <div className="space-y-3">
        {Object.entries(desc).map(([key, value]) => (
          <div key={key} className="ml-4">
            <h3 className="font-medium text-blue-700">{key}</h3>
            {typeof value === "string" ? (
              <p className="text-gray-600 ml-4">{value}</p>
            ) : (
              <div className="ml-4 space-y-2">
                {Object.entries(value).map(([subKey, subValue]) => (
                  <div key={subKey} className="border-l-2 border-blue-200 pl-3">
                    <span className="font-medium text-blue-600">{subKey}:</span>
                    <span className="text-gray-600 ml-2">{subValue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8" role="main">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Job Terms Glossary
          </h1>
          <p className="text-gray-600 text-lg">
            A comprehensive guide to common employment and job-related terms
          </p>
        </header>

        {/* Search Bar */}
        <section
          className="relative max-w-2xl mx-auto mb-8"
          aria-labelledby="search-terms-label"
        >
          <label
            htmlFor="search-terms"
            id="search-terms-label"
            className="sr-only"
          >
            Search job terms
          </label>
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-terms"
            type="text"
            placeholder="Search terms..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-describedby="search-description"
          />
          <p id="search-description" className="sr-only">
            Enter a job-related keyword to filter the glossary results
          </p>
        </section>

        {/* Terms Grid */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          aria-labelledby="glossary-heading"
        >
          <h2 id="glossary-heading" className="sr-only">
            Glossary of Job Terms
          </h2>
          {filteredTerms.map((term, index) => {
            const isExpanded = expandedTerm === index;
            const contentId = `term-desc-${index}`;
            return (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  isExpanded ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setExpandedTerm(isExpanded ? null : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpandedTerm(isExpanded ? null : index);
                    }
                  }}
                  aria-expanded={isExpanded}
                  aria-controls={contentId}
                >
                  <CardTitle className="flex items-center justify-between text-blue-800">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" aria-hidden="true" />
                      <span>{term.title}</span>
                    </div>
                    {isExpanded ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600" />
                    )}
                  </CardTitle>
                </CardHeader>
                {isExpanded && (
                  <CardContent id={contentId} className="pt-2">
                    {renderDescription(term.desc)}
                  </CardContent>
                )}
              </Card>
            );
          })}
        </section>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-8" role="status">
            <Info
              className="w-12 h-12 text-gray-400 mx-auto mb-4"
              aria-hidden="true"
            />
            <p className="text-gray-600">
              No terms found matching your search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default JobsTerms;
