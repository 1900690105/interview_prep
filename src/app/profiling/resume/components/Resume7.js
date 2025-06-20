import React from "react";

export default function ATSFriendlyResume() {
  return (
    <div className=" mx-auto p-8 font-sans border max-w-3xl shadow-md">
      <header className="text-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Alex Johnson</h1>
        <p className="text-gray-600 mt-2">
          Seattle, WA 98101 • alex.johnson@email.com • (206) 555-0123 •{" "}
          <a
            href="https://www.linkedin.com/in/alexjohnson"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/alexjohnson
          </a>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700">
          Innovative Software Engineer with 3+ years of experience in full-stack
          development, specializing in JavaScript, React, and Node.js. Skilled
          in agile methodologies, database design, and cloud technologies. Eager
          to contribute technical expertise and creative problem-solving skills
          to drive the development of cutting-edge software solutions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
          Education
        </h2>
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-800">
            University of Washington
          </h3>
          <p className="text-gray-700">
            Bachelor of Science in Computer Science | Graduated: May 2020
          </p>
          <p className="text-gray-600 italic">
            Thesis: "Implementing Machine Learning Algorithms for Predictive
            Maintenance in IoT Devices"
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
          Experience
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            TechNova Solutions
          </h3>
          <p className="text-gray-600 italic">
            Software Engineer | Seattle, WA | June 2020 – Present
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Developed and maintained RESTful APIs using Node.js and Express,
              improving system efficiency by 30%
            </li>
            <li>
              Implemented responsive front-end designs using React and Redux,
              resulting in a 25% increase in user engagement
            </li>
            <li>
              Collaborated with cross-functional teams to design and implement
              microservices architecture, reducing deployment time by 40%
            </li>
            <li>
              Optimized database queries and implemented caching strategies,
              improving application performance by 50%
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            InnoTech Startups
          </h3>
          <p className="text-gray-600 italic">
            Junior Web Developer | Seattle, WA | January 2019 – May 2020
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Assisted in the development of web applications using HTML5, CSS3,
              and JavaScript
            </li>
            <li>
              Contributed to the implementation of responsive design principles,
              ensuring cross-browser compatibility
            </li>
            <li>
              Participated in code reviews and implemented best practices for
              web development, improving code quality by 20%
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
          Skills
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Programming Languages: JavaScript, Python, Java, SQL</li>
          <li>
            Web Technologies: React, Node.js, Express, HTML5, CSS3, RESTful APIs
          </li>
          <li>Databases: MongoDB, PostgreSQL, MySQL</li>
          <li>Tools & Platforms: Git, Docker, AWS, Jenkins, Jira</li>
          <li>Methodologies: Agile, Scrum, Test-Driven Development (TDD)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-3">
          Certifications
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            AWS Certified Developer – Associate
          </h3>
          <p className="text-gray-700">
            Amazon Web Services | Obtained: September 2021
          </p>
        </div>
      </section>
    </div>
  );
}
