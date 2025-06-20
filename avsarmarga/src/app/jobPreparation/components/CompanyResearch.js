import React, { useState } from "react";
import {
  Book,
  Target,
  Lightbulb,
  Globe,
  Award,
  Users,
  TrendingUp,
  Search,
} from "lucide-react";

const CompanyResearchUI = () => {
  const [activeSection, setActiveSection] = useState(null);

  const research = {
    research_points: [
      {
        topic: "The Company’s Mission and Vision",
        why_it_helps:
          "Researching the company's mission and vision helps you understand its core purpose and long-term goals. By aligning your own career aspirations with these values, you demonstrate that you are not just seeking a job but a meaningful role in achieving the company’s objectives.",
        example_use_in_interview:
          "I admire your mission to 'create sustainable energy solutions,' as it aligns with my passion for environmental conservation. I’d love to contribute by leveraging my skills in renewable energy systems to help further this mission.",
      },
      {
        topic: "Products or Services",
        why_it_helps:
          "Knowing the company’s products or services shows that you understand what they bring to the market. It helps you express enthusiasm about what they do and allows you to propose innovative ideas or improvements during the interview.",
        example_use_in_interview:
          "I recently tried your mobile app for financial planning and was impressed by its user-friendly interface. I’d love to use my experience in UX design to help refine and enhance this product further.",
      },
      {
        topic: "Company Culture",
        why_it_helps:
          "Understanding the company’s culture helps you assess if it’s a good fit for your working style and values. It also allows you to tailor your responses to highlight qualities that resonate with the company’s core values, such as teamwork, innovation, or inclusivity.",
        example_use_in_interview:
          "I noticed your emphasis on fostering innovation through collaboration. In my previous role, I led brainstorming sessions that resulted in a 20% increase in project efficiency. I’m excited about bringing this collaborative spirit to your team.",
      },
      {
        topic: "Recent News or Achievements",
        why_it_helps:
          "Staying updated on recent developments, awards, or milestones shows that you are proactive and genuinely interested in the company. It also gives you talking points to engage with the interviewer and build rapport.",
        example_use_in_interview:
          "I saw that your company was recently awarded the 'Best Workplace for Women in Tech.' It’s inspiring to see such a commitment to diversity, and I’d be proud to contribute to this progressive environment.",
      },
      {
        topic: "Key Competitors",
        why_it_helps:
          "Understanding the competitive landscape shows you are knowledgeable about the industry. It allows you to discuss what makes the company stand out and how your skills can help maintain or strengthen their competitive advantage.",
        example_use_in_interview:
          "I’ve noticed that your company’s focus on customer-centric innovation differentiates you from competitors like [Competitor Name]. My background in customer experience design could help enhance this advantage.",
      },
      {
        topic: "Organizational Structure",
        why_it_helps:
          "Knowing the company's organizational structure helps you understand reporting relationships and potential collaborations. This understanding enables you to ask informed questions about the role and its impact on the organization.",
        example_use_in_interview:
          "I understand this role reports to the Marketing Director and works closely with the Product Development team. How does this collaboration influence the marketing strategies you implement?",
      },
      {
        topic: "Leadership Team",
        why_it_helps:
          "Learning about the leadership team gives insight into the company’s strategic priorities and management style. It shows you’ve done your homework and helps you align your answers with the vision set by the company’s leaders.",
        example_use_in_interview:
          "I read an article by your CEO about the importance of digital transformation in your industry. How is this vision influencing the company’s current projects?",
      },
      {
        topic: "Challenges in the Industry",
        why_it_helps:
          "Understanding the challenges the company faces within its industry demonstrates that you are informed and strategic. It allows you to showcase how your skills and experience can help address these challenges.",
        example_use_in_interview:
          "With the increasing focus on sustainability, I understand there’s pressure to reduce manufacturing waste. In my previous role, I implemented a process that cut waste by 15%, and I’d love to explore similar strategies here.",
      },
      {
        topic: "Job Role Requirements",
        why_it_helps:
          "Studying the job description thoroughly ensures you understand the expectations and responsibilities of the role. This allows you to tailor your responses to highlight your relevant experience and demonstrate your readiness to excel in the position.",
        example_use_in_interview:
          "This role emphasizes proficiency in data analysis and visualization tools. In my last job, I used Power BI to create dashboards that improved decision-making efficiency by 30%.",
      },
      {
        topic: "Employee Reviews and Testimonials",
        why_it_helps:
          "Researching employee reviews provides insights into the work environment, challenges, and perks. This knowledge helps you assess if the company is the right fit and allows you to ask specific questions about the role and workplace culture.",
        example_use_in_interview:
          "I’ve read that employees value the emphasis on professional growth and mentorship here. Could you share more about the training programs available for new hires?",
      },
    ],
  };

  const icons = [
    Target,
    Book,
    Lightbulb,
    Globe,
    Award,
    Users,
    TrendingUp,
    Search,
    Book,
    Users,
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          Company Research Guide
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6">
          {research.research_points.map((point, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={point.topic}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="text-blue-600 mr-4" size={32} />
                  <h2 className="text-xl font-semibold text-blue-900">
                    {point.topic}
                  </h2>
                </div>
                {activeSection === index && (
                  <div className="mt-4 text-gray-700">
                    <p className="mb-4 italic text-blue-700">
                      {point.why_it_helps}
                    </p>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <h3 className="font-bold text-blue-800 mb-2">
                        Interview Example:
                      </h3>
                      <p className="text-gray-800">
                        {point.example_use_in_interview}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-blue-900">
          <p className="text-sm">
            💡 Click on each research point to expand and see detailed insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyResearchUI;
