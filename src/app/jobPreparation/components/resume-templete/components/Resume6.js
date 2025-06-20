import Head from "next/head";

export default function Resume6() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Head>
        <title>Nikhil Kandhare - Resume</title>
      </Head>
      <div className="bg-white shadow-lg p-8 max-w-3xl w-full border">
        {/* Header Section */}
        <div className="text-center border-b pb-4">
          <h1 className="text-4xl font-bold text-gray-800">Nikhil Kandhare</h1>
          <p className="text-lg text-gray-600">Computer Science Student</p>
          <p className="text-sm text-gray-500 mt-2">
            nikhilkandhare@example.com | (123) 456-7890 |
            linkedin.com/in/nikhilkandhare
          </p>
        </div>

        {/* Objective Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Objective</h2>
          <p className="text-gray-600 mt-2">
            Dedicated and enthusiastic Computer Science student with strong
            analytical and problem-solving skills. Seeking an opportunity to
            apply my knowledge in software development and contribute to
            innovative projects while growing in a collaborative environment.
          </p>
        </div>

        {/* Education Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Education</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600">
              University Name, City, State | Expected Graduation: 2025
            </p>
            <p className="text-gray-600 mt-1">GPA: 3.9/4.0</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Relevant Coursework: Software Engineering, Machine Learning,
                Data Structures, Web Development
              </li>
              <li>Dean's List: Fall 2022, Spring 2023</li>
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Experience</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Software Development Intern
            </h3>
            <p className="text-gray-600">
              Tech Innovators, City, State | June 2023 - August 2023
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Assisted in developing and testing software modules for client
                projects using Java and Python.
              </li>
              <li>
                Collaborated with senior developers to optimize algorithms for
                performance improvement.
              </li>
              <li>
                Contributed to code reviews and participated in Agile sprint
                planning meetings.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Research Assistant
            </h3>
            <p className="text-gray-600">
              University Name, City, State | January 2023 - May 2023
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Conducted research on machine learning models for predictive
                analytics in healthcare.
              </li>
              <li>
                Developed data processing scripts in Python to clean and analyze
                large datasets.
              </li>
              <li>
                Presented findings at a regional student research conference.
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Projects</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              E-commerce Web Application
            </h3>
            <p className="text-gray-600">April 2023</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Developed a full-stack e-commerce platform using Next.js and
                MongoDB.
              </li>
              <li>
                Implemented user authentication, product listing, and payment
                gateway integration.
              </li>
              <li>
                Deployed the application on AWS and managed the cloud
                infrastructure.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Chatbot for Customer Support
            </h3>
            <p className="text-gray-600">December 2022</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Designed and implemented a chatbot using Python and TensorFlow
                for customer service automation.
              </li>
              <li>
                Integrated the chatbot with a company's CRM system to provide
                real-time support.
              </li>
              <li>
                Improved customer satisfaction by reducing response time by 40%.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Programming Languages: Java, Python, JavaScript</li>
            <li>Web Development: HTML, CSS, React, Next.js, Tailwind CSS</li>
            <li>Data Science: Python, R, TensorFlow, Pandas</li>
            <li>Database Management: MySQL, MongoDB</li>
            <li>Cloud Computing: AWS, Azure</li>
            <li>Problem-Solving, Teamwork, Leadership</li>
          </ul>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Extracurricular Activities
          </h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Vice President, AI Club
            </h3>
            <p className="text-gray-600">
              University Name, City, State | September 2022 - Present
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Organized workshops and seminars on artificial intelligence and
                machine learning.
              </li>
              <li>
                Led a team to participate in national-level AI hackathons,
                securing top 10 positions.
              </li>
              <li>
                Collaborated with faculty members to arrange guest lectures by
                industry professionals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
