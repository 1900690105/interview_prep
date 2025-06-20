import Head from "next/head";

export default function Resume3() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Head>
        <title>Student Resume</title>
      </Head>
      <div className="bg-white shadow-lg p-8 max-w-3xl w-full border">
        {/* Header Section */}
        <div className="text-center border-b pb-4">
          <h1 className="text-4xl font-bold text-gray-800">Ajinkya Nishane</h1>
          <p className="text-lg text-gray-600">Computer Science Student</p>
          <p className="text-sm text-gray-500 mt-2">
            johndoe@example.com | (123) 456-7890 | linkedin.com/in/johndoe
          </p>
        </div>

        {/* Objective Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Objective</h2>
          <p className="text-gray-600 mt-2">
            Motivated and detail-oriented Computer Science student with strong
            foundational knowledge in programming, software development, and
            problem-solving. Seeking an internship or entry-level position to
            apply my skills in a practical setting while contributing to a
            dynamic team.
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
            <p className="text-gray-600 mt-1">GPA: 3.8/4.0</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Relevant Coursework: Data Structures, Algorithms, Database
                Management, Web Development
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
              Web Development Intern
            </h3>
            <p className="text-gray-600">
              Tech Startup, City, State | June 2023 - August 2023
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Developed and maintained front-end features using React and
                Tailwind CSS.
              </li>
              <li>
                Collaborated with the design team to improve UI/UX of the
                company's main product.
              </li>
              <li>
                Assisted in testing and debugging web applications to ensure
                cross-browser compatibility.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Teaching Assistant (Data Structures)
            </h3>
            <p className="text-gray-600">
              University Name, City, State | January 2023 - May 2023
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Provided support to students in understanding core data
                structure concepts.
              </li>
              <li>Assisted the professor in grading assignments and exams.</li>
              <li>
                Conducted weekly office hours to help students with their
                coursework.
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Projects</h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-600">March 2023</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Designed and developed a responsive personal portfolio website
                using Next.js and Tailwind CSS.
              </li>
              <li>Showcased personal projects, skills, and experience.</li>
              <li>
                Integrated a contact form with email notifications using
                EmailJS.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Library Management System
            </h3>
            <p className="text-gray-600">December 2022</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Developed a full-stack application using React and Firebase to
                manage library inventory and user accounts.
              </li>
              <li>
                Implemented authentication, book search, and borrowing features.
              </li>
              <li>
                Worked on both the front-end and back-end to ensure seamless
                user experience.
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Programming Languages: JavaScript, Python, Java</li>
            <li>Web Development: HTML, CSS, React, Next.js, Tailwind CSS</li>
            <li>Database Management: MySQL, Firebase</li>
            <li>Version Control: Git, GitHub</li>
            <li>Problem-Solving, Teamwork, Communication</li>
          </ul>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-700">
            Extracurricular Activities
          </h2>

          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              President, Coding Club
            </h3>
            <p className="text-gray-600">
              University Name, City, State | September 2022 - Present
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>
                Organized coding workshops and hackathons for over 100 students.
              </li>
              <li>
                Facilitated peer-to-peer learning sessions on various
                programming topics.
              </li>
              <li>
                Collaborated with local tech companies to arrange guest lectures
                and networking events.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
