"use client";

import {
  Search,
  BookOpen,
  Briefcase,
  Award,
  ChevronRight,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";

function PowerCareerPath() {
  const careerPaths = [
    {
      title: "Software Development",
      description: "From coding fundamentals to full-stack development",
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      jobs: 1253,
      duration: "3-6 months",
      slug: "software-development",
    },
    {
      title: "Digital Marketing",
      description: "Master SEO, social media, and campaign management",
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      jobs: 876,
      duration: "2-4 months",
      slug: "digital-marketing",
    },
    {
      title: "Data Science",
      description: "Learn analytics, machine learning, and visualization",
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      jobs: 1089,
      duration: "4-8 months",
      slug: "data-science",
    },
  ];
  return (
    <div>
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="career-paths-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="md:flex md:items-center md:justify-between mb-12">
            <div>
              <h2
                id="career-paths-heading"
                className="text-3xl font-bold text-gray-900"
              >
                Popular Career Paths
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Explore pathways tailored to various fields and interests
              </p>
            </div>
            <a
              href="/career-paths"
              className="mt-4 md:mt-0 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="View all career paths"
            >
              View all paths{" "}
              <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
            </a>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                itemScope
                itemType="https://schema.org/Course"
              >
                <header className="flex items-center justify-between mb-4">
                  <div
                    className="bg-indigo-100 rounded-full p-2"
                    aria-hidden="true"
                  >
                    {path.icon}
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    In Demand
                  </span>
                </header>
                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-4" itemProp="description">
                  {path.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span>{path.jobs.toLocaleString()} open positions</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span itemProp="timeRequired">{path.duration}</span>
                  </div>
                </div>
                <a
                  href={`/career-paths/${path.slug}`}
                  className="block text-center w-full bg-indigo-50 text-indigo-600 font-medium py-2 rounded hover:bg-indigo-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-label={`Explore ${path.title} career path`}
                >
                  Explore Path
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PowerCareerPath;
