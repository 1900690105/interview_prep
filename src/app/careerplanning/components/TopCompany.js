import { DataCompany } from "@/app/data/Topcompany";
import React, { useState } from "react";

const TopCompany = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    "Computer Engineering"
  );

  const company = DataCompany;

  const departments = Object.keys(company);

  return (
    <div
      className="min-h-screen bg-blue-50 p-4"
      role="main"
      aria-label="Top companies categorized by engineering department"
    >
      <div className="container mx-auto">
        {/* Page Heading */}
        <header className="text-center mb-6" role="banner">
          <h1 className="text-3xl font-bold text-blue-800">
            Top Companies by Engineering Department
          </h1>
        </header>

        {/* Department Selector */}
        <section
          className="mb-6"
          role="region"
          aria-labelledby="department-selector-title"
        >
          <h2 id="department-selector-title" className="sr-only">
            Select an engineering department to filter companies
          </h2>
          <div
            className="flex flex-wrap justify-center gap-2"
            role="radiogroup"
            aria-label="Department filter buttons"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                role="radio"
                aria-checked={selectedDepartment === dept}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 ${
                  selectedDepartment === dept
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
                aria-label={`Filter companies by ${dept} department`}
              >
                {dept}
              </button>
            ))}
          </div>
        </section>

        {/* Companies Grid */}
        <section
          aria-label={`Companies hiring for ${selectedDepartment}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {company[selectedDepartment].map((comp, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              role="region"
              aria-labelledby={`company-${index}-name`}
            >
              <h2
                id={`company-${index}-name`}
                className="text-xl font-bold text-blue-700 mb-2"
              >
                {comp.company_name}
              </h2>

              <p className="text-gray-600 mb-1">
                <span className="font-semibold">CEO:</span> {comp.company_ceo}
              </p>

              <div className="mb-4">
                <h3 className="font-semibold text-blue-600 mb-1">Job Roles:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {comp.job_roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-green-600 font-semibold mb-2">
                Avg. Package:{" "}
                {comp.average_package || comp.average_package_in_inr}
              </p>

              <a
                href={comp.career_link || comp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`View career page for ${comp.company_name}`}
              >
                View Careers
              </a>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TopCompany;
