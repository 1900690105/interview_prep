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

function Agency() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showAllAgencies, setShowAllAgencies] = useState(false);

  const agency = {
    recruitment_agency: {
      definition:
        "A recruitment agency is a company that helps businesses find suitable candidates for job vacancies, acting as intermediaries between employers and job seekers.",
      how_it_works: [
        "Client Briefing: The employer provides details about the role, including job description, qualifications, and expectations.",
        "Candidate Sourcing: The agency looks for suitable candidates, either from their existing pool or by advertising.",
        "Screening & Interviews: Agencies screen applicants through interviews, reference checks, and sometimes skills testing.",
        "Shortlisting: The agency sends a list of the best candidates to the employer for further interviews.",
        "Placement: Once the employer selects a candidate, the agency assists with the final offer and onboarding process.",
      ],
      types: {
        contingency_recruitment_agency:
          "Agencies are paid only if the employer hires a candidate they provide.",
        retained_recruitment_agency:
          "Agencies receive a fee upfront to perform a search and are usually used for high-level or specialized positions.",
        staffing_agency:
          "Agencies place temporary or contract workers for short-term needs, such as seasonal work or maternity leave.",
        executive_search_agency:
          "Specialized in finding high-level executives and top-tier professionals.",
        niche_recruitment_agency:
          "Focuses on specific industries or job roles, such as IT, healthcare, or finance.",
      },
      advantages: [
        "Time-Saving: Agencies handle most of the recruitment process, saving employers time.",
        "Access to a Large Talent Pool: Agencies often have a network of candidates that aren't available through traditional job postings.",
        "Expertise: Recruitment agencies have specialized knowledge of various industries and the job market.",
        "Reduced Risk: Many agencies offer guarantees, meaning they'll find a replacement if a hire doesn't work out within a specified time.",
        "Cost-Effective: Though there's a fee, agencies can save money by reducing hiring mistakes or providing temporary workers to fill gaps.",
      ],
      disadvantages: [
        "Cost: Fees can be high, especially for specialized or executive-level roles.",
        "Cultural Fit: Agencies may focus more on qualifications and experience, potentially overlooking cultural alignment with the company.",
        "Lack of Control: Employers have less control over the recruitment process when using an agency.",
        "Overdependence: Relying too much on agencies may limit a company's internal recruitment capabilities.",
        "Candidate Experience: Sometimes the agency may not provide the best candidate experience, impacting the company's reputation.",
      ],
      list_of_agencies: [
        {
          name: "Robert Half",
          specialization:
            "Finance, accounting, technology, and administrative roles",
        },
        {
          name: "Adecco",
          specialization:
            "Temporary staffing, permanent placement, and workforce solutions",
        },
        {
          name: "ManpowerGroup",
          specialization: "Temporary staffing and workforce solutions",
        },
        {
          name: "Randstad",
          specialization:
            "Temporary and permanent placements across various sectors",
        },
        {
          name: "Kelly Services",
          specialization:
            "Temporary staffing and workforce solutions in multiple industries",
        },
        {
          name: "Michael Page",
          specialization:
            "Professionals and executives in finance, IT, and marketing",
        },
        { name: "Hays", specialization: "IT, construction, and healthcare" },
        {
          name: "Allegis Group",
          specialization:
            "Staffing and talent solutions across a wide range of sectors",
        },
        { name: "TEKsystems", specialization: "IT staffing and solutions" },
        {
          name: "Lucas Group",
          specialization:
            "Executive search for mid to senior-level professionals across various industries",
        },
      ],
    },
  };

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
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Understanding Recruitment Agencies
        </h1>
        <p className="text-lg text-gray-600">
          {agency.recruitment_agency.definition}
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* How it Works Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => toggleSection("how_it_works")}
            className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Users className="text-blue-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-blue-900">
                How It Works
              </h2>
            </div>
            {expandedSection === "how_it_works" ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </button>

          {expandedSection === "how_it_works" && (
            <div className="p-6">
              <ol className="space-y-4">
                {agency.recruitment_agency.how_it_works.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="ml-4 text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              <YouTube videoId={videoId} opts={opts} />
            </div>
          )}
        </div>

        {/* Types Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => toggleSection("types")}
            className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Building className="text-blue-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-blue-900">
                Types of Agencies
              </h2>
            </div>
            {expandedSection === "types" ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSection === "types" && (
            <div className="p-6 grid gap-4 sm:grid-cols-2">
              {Object.entries(agency.recruitment_agency.types).map(
                ([type, description]) => (
                  <div key={type} className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      {type
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </h3>
                    <p className="text-gray-700 text-sm">{description}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* Pros and Cons Section */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Advantages */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("advantages")}
              className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 w-6 h-6" />
                <h2 className="text-xl font-semibold text-blue-900">
                  Advantages
                </h2>
              </div>
              {expandedSection === "advantages" ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {expandedSection === "advantages" && (
              <div className="p-6">
                <ul className="space-y-3">
                  {agency.recruitment_agency.advantages.map(
                    (advantage, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        {advantage}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Disadvantages */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("disadvantages")}
              className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <XCircle className="text-red-600 w-6 h-6" />
                <h2 className="text-xl font-semibold text-blue-900">
                  Disadvantages
                </h2>
              </div>
              {expandedSection === "disadvantages" ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {expandedSection === "disadvantages" && (
              <div className="p-6">
                <ul className="space-y-3">
                  {agency.recruitment_agency.disadvantages.map(
                    (disadvantage, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                        {disadvantage}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Top Agencies Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => toggleSection("agencies")}
            className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Briefcase className="text-blue-600 w-6 h-6" />
              <h2 className="text-xl font-semibold text-blue-900">
                Top Recruitment Agencies
              </h2>
            </div>
            {expandedSection === "agencies" ? <ChevronUp /> : <ChevronDown />}
          </button>

          {expandedSection === "agencies" && (
            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {agency.recruitment_agency.list_of_agencies
                  .slice(0, showAllAgencies ? undefined : 6)
                  .map((agency, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">
                        {agency.name}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {agency.specialization}
                      </p>
                    </div>
                  ))}
              </div>
              {!showAllAgencies &&
                agency.recruitment_agency.list_of_agencies.length > 6 && (
                  <button
                    onClick={() => setShowAllAgencies(true)}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Show All Agencies
                  </button>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Agency;
