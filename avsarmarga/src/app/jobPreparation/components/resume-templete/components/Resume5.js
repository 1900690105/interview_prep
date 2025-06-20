import React from "react";

const Resume5 = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Samrudhi Gulhane</h1>
        <p className="text-xl text-gray-600">Business Administration Student</p>
        <div className="mt-2 text-gray-600 flex flex-wrap justify-between">
          <span>jordan.leader@email.com</span>
          <span>(123) 456-7890</span>
          <span>linkedin.com/in/jordanleader</span>
          <span>Business City, State</span>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 bg-gray-100 p-2">
          Professional Experience
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Marketing Intern
          </h3>
          <p className="text-gray-600">
            InnovativeTech Inc. | June 2023 - August 2023
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Assisted in developing and implementing social media marketing
              strategies, resulting in a 25% increase in engagement
            </li>
            <li>
              Conducted market research and competitor analysis to inform
              product positioning
            </li>
            <li>
              Created content for various marketing channels, including blog
              posts and email newsletters
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Student Government Treasurer
          </h3>
          <p className="text-gray-600">
            Business University | September 2022 - Present
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Manage a budget of $50,000, ensuring responsible allocation of
              funds to student organizations
            </li>
            <li>
              Implemented a new digital tracking system, improving financial
              transparency and reducing errors by 30%
            </li>
            <li>
              Collaborate with team members to organize campus-wide events and
              initiatives
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 bg-gray-100 p-2">
          Leadership & Volunteer Experience
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Volunteer Team Leader
          </h3>
          <p className="text-gray-600">
            Local Food Bank | January 2022 - Present
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Lead a team of 10 volunteers in weekly food distribution efforts
            </li>
            <li>
              Developed a new inventory management system, reducing waste by 15%
            </li>
            <li>
              Organize and participate in community outreach programs to
              increase awareness and donations
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 bg-gray-100 p-2">
          Education
        </h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Bachelor of Business Administration
          </h3>
          <p className="text-gray-600">
            Business University | Expected Graduation: May 2025
          </p>
          <p className="text-gray-700">
            GPA: 3.7/4.0 | Minor: Digital Marketing
          </p>
          <p className="text-gray-700">
            Relevant coursework: Marketing Strategy, Financial Accounting,
            Business Ethics, Data Analytics for Business
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 bg-gray-100 p-2">
          Skills & Certifications
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Technical Skills</h3>
            <p>Microsoft Office Suite, Google Analytics, Hootsuite, Canva</p>
          </div>
          <div>
            <h3 className="font-semibold">Soft Skills</h3>
            <p>
              Leadership, Public Speaking, Project Management, Team
              Collaboration
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Languages</h3>
            <p>English (Native), Spanish (Intermediate)</p>
          </div>
          <div>
            <h3 className="font-semibold">Certifications</h3>
            <p>
              Google Analytics Individual Qualification, HubSpot Inbound
              Marketing Certification
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume5;
