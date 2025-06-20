import React from "react";

const Resume4 = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg border">
      <header className="mb-6 border-b-2 border-gray-300 pb-4">
        <h1 className="text-4xl font-bold text-gray-800">Jagruti </h1>
        <p className="text-xl text-gray-600">Aspiring Software Engineer</p>
        <div className="mt-2 text-gray-600 flex flex-wrap justify-between">
          <span>taylor.tech@email.com</span>
          <span>(123) 456-7890</span>
          <span>github.com/taylortech</span>
          <span>Tech City, State</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-300">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p>Python, JavaScript, Java, C++</p>
          </div>
          <div>
            <h3 className="font-semibold">Web Technologies</h3>
            <p>React, Node.js, HTML5, CSS3</p>
          </div>
          <div>
            <h3 className="font-semibold">Databases</h3>
            <p>MySQL, MongoDB, PostgreSQL</p>
          </div>
          <div>
            <h3 className="font-semibold">Tools & Platforms</h3>
            <p>Git, Docker, AWS, Linux</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-300">
          Projects
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            AI-Powered Chat Application
          </h3>
          <p className="text-gray-600">
            Technologies: Python, TensorFlow, Flask, React
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Developed a real-time chat application with AI-powered response
              suggestions
            </li>
            <li>
              Implemented natural language processing model to analyze
              conversation context
            </li>
            <li>
              Designed RESTful API for seamless communication between frontend
              and backend
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            E-commerce Platform
          </h3>
          <p className="text-gray-600">
            Technologies: Node.js, Express, MongoDB, React
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Built a full-stack e-commerce platform with user authentication
              and payment integration
            </li>
            <li>
              Implemented responsive design for optimal user experience across
              devices
            </li>
            <li>
              Utilized Redis for caching, improving page load times by 40%
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-300">
          Education
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600">
            Tech University | Expected Graduation: May 2025
          </p>
          <p className="text-gray-700">
            GPA: 3.9/4.0 | Dean's List: All Semesters
          </p>
          <p className="text-gray-700">
            Relevant coursework: Artificial Intelligence, Data Structures,
            Algorithms, Software Engineering
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b border-gray-300">
          Achievements & Activities
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>1st Place, University Hackathon 2023</li>
          <li>President, Computer Science Student Association</li>
          <li>Open Source Contributor, Mozilla Firefox</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume4;
