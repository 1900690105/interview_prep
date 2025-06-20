import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, BookOpen, Info, Plus, Minus } from "lucide-react";

function JobsTerms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTerm, setExpandedTerm] = useState(null);

  const terms = [
    {
      title: "Artificial Intelligence in Recruitment",
      desc: "The use of AI technologies to improve the recruitment process, including resume screening and candidate matching.",
    },
    {
      title: "Bonuses",
      desc: {
        "Performance Bonus": "A bonus based on individual or team performance.",
        "Annual Bonus":
          "A bonus paid once a year, usually tied to company performance.",
        "Festival Bonus": "A fixed bonus provided during festivals.",
      },
    },
    {
      title: "Career Development",
      desc: "The ongoing process of managing one's career, including skill enhancement, networking, and goal setting.",
    },
    {
      title: "Compensation",
      desc: "The total package an employee receives in exchange for their work, including salary, bonuses, and benefits.",
    },
    {
      title: "Conflict Resolution",
      desc: "The process of resolving a dispute or disagreement between individuals in the workplace.",
    },
    {
      title: "Cross-Functional Teams",
      desc: "Groups made up of individuals from different departments or areas of expertise working towards a common goal.",
    },
    {
      title: "Curriculum Vitae (CV)",
      desc: "A detailed document highlighting an individual's professional and academic history, skills, and accomplishments. Typically used for academic, research, or international job applications.",
    },
    {
      title: "Diversity and Inclusion",
      desc: {
        Diversity:
          "The presence of differences within a given setting, including race, gender, age, and more.",
        Inclusion:
          "The practice of creating environments in which any individual or group can be and feel welcomed.",
      },
    },
    {
      title: "EPF (Employees' Provident Fund)",
      desc: "A retirement savings scheme for salaried employees in India.",
    },
    {
      title: "Employee Advocacy",
      desc: "The act of supporting and promoting the rights and interests of employees within an organization.",
    },
    {
      title: "Employee Engagement",
      desc: "The level of commitment and involvement an employee has towards their organization and its values.",
    },
    {
      title: "Employee Relations",
      desc: {
        "Employee Engagement":
          "The connection employees feel to their organization.",
        "Workplace Conflict":
          "Disputes that arise in a work environment, often requiring mediation.",
      },
    },
    {
      title: "Employee Stock Ownership Plans (ESOPs)",
      desc: "A plan that allows employees to buy company shares at a discounted rate.",
    },
    {
      title: "Exit Interview",
      desc: "An interview conducted when an employee leaves a company to gather feedback about their experience.",
    },
    {
      title: "Freelancer",
      desc: "A self-employed individual who offers services to multiple clients, often working on short-term projects.",
    },
    {
      title: "Full-Time Job",
      desc: "A job where the employee works a standard number of hours per week, typically 40 hours or more.",
    },
    {
      title: "Gig Economy",
      desc: "A labor market characterized by short-term contracts or freelance work as opposed to permanent jobs.",
    },
    {
      title: "Goods and Services Tax (GST)",
      desc: {
        "GST Slabs": {
          "0%": "Essential items like food, healthcare, and education.",
          "5%": "Household necessities and transport services.",
          "12%": "Medium-range goods like mobile phones.",
          "18%": "Most goods and services, including IT services.",
          "28%": "Luxury goods and high-end consumer products.",
        },
        "Input Tax Credit":
          "Allows businesses to claim credit on GST paid for goods and services used for business purposes.",
      },
    },
    {
      title: "Gratuity",
      desc: "A lump-sum payment made to an employee after five years of service, governed by the Gratuity Act.",
    },
    {
      title: "Health Insurance",
      desc: {
        "Group Health Insurance":
          "General health insurance provided by the employer to cover employees.",
        "Family Insurance":
          "Medical insurance that extends to the employee’s dependents, such as spouse and children.",
      },
    },
    {
      title: "Internship",
      desc: "A temporary job, often for students or recent graduates, providing practical experience in a particular field.",
    },
    {
      title: "Job Board",
      desc: "An online platform where employers post job vacancies and candidates can apply for jobs (e.g., LinkedIn, Indeed).",
    },
    {
      title: "Job Description (JD)",
      desc: "A document outlining the roles, responsibilities, qualifications, and skills required for a specific job position.",
    },
    {
      title: "Job Fair",
      desc: "An event where employers and job seekers meet to discuss employment opportunities.",
    },
    {
      title: "Job Posting",
      desc: "A public announcement of a job opening by a company, usually containing details of the position and application process.",
    },
    {
      title: "Job Specification",
      desc: "The qualifications, skills, experience, and personal attributes required for a specific job role.",
    },
    {
      title: "Job Transition",
      desc: {
        Reskilling:
          "Teaching employees new skills for a different job or industry.",
        Upskilling:
          "Enhancing existing skills to improve performance in the current role.",
      },
    },
    {
      title: "Job Interview",
      desc: "A formal meeting where a candidate is evaluated by a potential employer for a specific job role.",
    },
    {
      title: "Labor Laws",
      desc: {
        "Minimum Wage":
          "The lowest remuneration that employers can legally pay their workers.",
        "Overtime Regulations":
          "Laws governing the amount of overtime pay an employee must receive.",
      },
    },
    {
      title: "Leave Policy",
      desc: {
        "Annual Leave": "Paid time off for personal reasons or vacations.",
        "Sick Leave": "Paid leave when an employee is ill.",
        "Maternity Leave": "Paid leave for new mothers around childbirth.",
        "Paternity Leave": "Paid leave for new fathers.",
        "Casual Leave":
          "Leave granted for personal emergencies or short-term needs.",
      },
    },
    {
      title: "Leave Travel Allowance (LTA)",
      desc: "An allowance given to employees for travel expenses incurred during leave.",
    },
    {
      title: "Mentorship Programs",
      desc: "Programs where experienced employees guide less experienced employees for personal and professional development.",
    },
    {
      title: "Net Salary",
      desc: "The take-home pay after deductions from the gross salary.",
    },
    {
      title: "Notice Period",
      desc: "The time period an employee must serve after submitting a resignation or when being terminated, typically defined in the employment contract.",
    },
    {
      title: "Offer Letter",
      desc: "A formal letter from an employer offering a job to a candidate, outlining the terms of employment.",
    },
    {
      title: "Onboarding",
      desc: "The process of integrating a new employee into the company, including orientation, training, and introduction to company culture.",
    },
    {
      title: "PPF (Public Provident Fund)",
      desc: "A government-backed long-term savings scheme available to all Indian citizens, designed to promote savings and offer tax benefits.",
    },
    {
      title: "Part-Time Job",
      desc: "A job where the employee works fewer hours per week compared to a full-time position, typically less than 40 hours.",
    },
    {
      title: "Performance Appraisal",
      desc: "A regular review of an employee’s job performance and contribution to the company, often tied to salary raises or promotions.",
    },
    {
      title: "Performance Management",
      desc: {
        "Objective Setting":
          "The process of defining clear and measurable goals for employees.",
        Feedback:
          "Providing constructive feedback to employees to improve performance.",
        "Performance Reviews":
          "Regular assessments of employee performance against set objectives.",
      },
    },
    {
      title: "Permanent Account Number (PAN)",
      desc: "A unique alphanumeric number issued by the Indian Income Tax Department, used for tracking tax-related transactions.",
    },
    {
      title: "Probation Period",
      desc: "A trial period for new employees during which their performance is evaluated before confirming their employment status.",
    },
    {
      title: "Provident Fund (PF)",
      desc: "A retirement benefit scheme where both the employer and employee contribute a portion of the basic salary.",
    },
    {
      title: "Provident Fund Withdrawal",
      desc: {
        Rules:
          "The conditions under which employees can withdraw their Provident Fund, such as retirement, medical emergencies, or buying a house.",
      },
    },
    {
      title: "Reimbursements",
      desc: {
        "Travel Expenses": "Reimbursement for work-related travel expenses.",
        "Medical Expenses":
          "Reimbursement for medical costs incurred by the employee.",
      },
    },
    {
      title: "Relocation Assistance",
      desc: "Financial help provided by the company to cover relocation costs when an employee moves for work.",
    },
    {
      title: "Remote Work",
      desc: "A work arrangement where employees work outside of a traditional office environment, often from home.",
    },
    {
      title: "Salary Breakup",
      desc: "The division of the total salary (CTC) into different components like basic salary, allowances, and deductions.",
    },
    {
      title: "Salary Negotiation",
      desc: "The process of discussing and agreeing upon the salary offered for a job position.",
    },
    {
      title: "Skill Development",
      desc: "Training and educational programs aimed at improving employees' skills and competencies.",
    },
    {
      title: "Soft Skills",
      desc: "Personal attributes that enable someone to interact effectively and harmoniously with others, including communication, teamwork, and problem-solving.",
    },
    {
      title: "Statutory Benefits",
      desc: "Mandatory benefits that employers must provide to employees by law, such as health insurance, maternity leave, and retirement benefits.",
    },
    {
      title: "Tax Deducted at Source (TDS)",
      desc: "The income tax that an employer deducts from an employee's salary before it is paid.",
    },
    {
      title: "Team Building",
      desc: "Activities aimed at enhancing social relations and defining roles within teams to improve cooperation.",
    },
    {
      title: "Training and Development",
      desc: "Programs designed to improve individual and group performance in organizations, including onboarding, skills training, and professional development.",
    },
    {
      title: "VPF (Voluntary Provident Fund)",
      desc: "An extension of the EPF where employees can voluntarily contribute more than the mandatory 12% of their basic salary to their EPF account.",
    },
    {
      title: "Work-Life Balance",
      desc: "The equilibrium between personal life and career work, promoting health and well-being.",
    },
    {
      title: "Workplace Dynamics",
      desc: "The interpersonal relationships and interactions that occur within a work environment.",
    },
  ];
  const filteredTerms = terms.filter(
    (term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof term.desc === "string" &&
        term.desc.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderDescription = (desc) => {
    if (typeof desc === "string") {
      return <p className="text-gray-600">{desc}</p>;
    }

    return (
      <div className="space-y-3">
        {Object.entries(desc).map(([key, value]) => (
          <div key={key} className="ml-4">
            <h4 className="font-medium text-blue-700">{key}</h4>
            {typeof value === "string" ? (
              <p className="text-gray-600 ml-4">{value}</p>
            ) : (
              <div className="ml-4 space-y-2">
                {Object.entries(value).map(([subKey, subValue]) => (
                  <div key={subKey} className="border-l-2 border-blue-200 pl-3">
                    <span className="font-medium text-blue-600">{subKey}:</span>
                    <span className="text-gray-600 ml-2">{subValue}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Job Terms Glossary
          </h1>
          <p className="text-gray-600 text-lg">
            A comprehensive guide to common employment and job-related terms
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search terms..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((term, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-shadow ${
                expandedTerm === index ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <CardHeader
                className="cursor-pointer"
                onClick={() =>
                  setExpandedTerm(expandedTerm === index ? null : index)
                }
              >
                <CardTitle className="flex items-center justify-between text-blue-800">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{term.title}</span>
                  </div>
                  {expandedTerm === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </CardTitle>
              </CardHeader>
              {expandedTerm === index && (
                <CardContent className="pt-2">
                  {renderDescription(term.desc)}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-8">
            <Info className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              No terms found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobsTerms;
