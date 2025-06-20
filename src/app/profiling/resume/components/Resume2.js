import React from "react";

const Resume2 = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Pooja Kale</h1>
        <p className="text-xl text-gray-600">Computer Science Student</p>
        <div className="mt-2 text-gray-600">
          <p>Email: alex.student@university.edu | Phone: (123) 456-7890</p>
          <p>
            Location: University City, State | LinkedIn:
            linkedin.com/in/alexstudent
          </p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Education</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-gray-600">
            University of Technology | Expected Graduation: May 2025
          </p>
          <p className="text-gray-700">GPA: 3.8/4.0</p>
          <p className="text-gray-700">
            Relevant coursework: Data Structures, Algorithms, Web Development,
            Database Systems, Machine Learning Fundamentals
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Projects</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Personal Portfolio Website
          </h3>
          <p className="text-gray-600">
            Technologies: React, Node.js, Express, MongoDB
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Designed and developed a responsive personal portfolio website to
              showcase projects and skills
            </li>
            <li>
              Implemented a contact form with backend API integration for
              message storage
            </li>
            <li>
              Optimized for performance, achieving a 95+ score on Google
              PageSpeed Insights
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Weather Forecast App
          </h3>
          <p className="text-gray-600">
            Technologies: JavaScript, OpenWeatherMap API, HTML5, CSS3
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Built a weather forecast application that displays current weather
              and 5-day forecast for any city
            </li>
            <li>
              Integrated OpenWeatherMap API to fetch real-time weather data
            </li>
            <li>
              Implemented geolocation to automatically detect user's location
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Experience
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            IT Help Desk Assistant
          </h3>
          <p className="text-gray-600">
            University of Technology | September 2023 - Present
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Provide technical support to students and faculty, resolving an
              average of 20 tickets per day
            </li>
            <li>
              Assist in maintaining and upgrading computer labs across campus
            </li>
            <li>
              Collaborate with the IT team to develop user guides for common
              technical issues
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Programming Languages: Java, Python, JavaScript, HTML5, CSS3</li>
          <li>Web Technologies: React, Node.js, Express</li>
          <li>Databases: MySQL, MongoDB</li>
          <li>Tools: Git, VS Code, Eclipse</li>
          <li>Soft Skills: Problem-solving, Teamwork, Communication</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Extracurricular Activities
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Member, Computer Science Student Association</li>
          <li>Volunteer, Local Code Camp for High School Students</li>
          <li>Participant, University Hackathon 2023</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume2;
