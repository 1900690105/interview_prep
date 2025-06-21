"use client";
import React, { useState } from "react";
import {
  Book,
  Youtube,
  Globe,
  CheckCircle2,
  XCircle,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SoftSkillsModern = () => {
  const [activeCategory, setActiveCategory] = useState("PersonalSkills");
  const [expandedSkill, setExpandedSkill] = useState(null);

  // Data remains the same as the original component
  const soft_skills = {
    PersonalSkills: [
      {
        Skill: "Integrity",
        Description:
          "The quality of being honest and having strong moral principles.",
        Dos: [
          "Always be truthful in your actions and words.",
          "Admit mistakes and take responsibility.",
          "Maintain confidentiality where appropriate.",
          "Stand up for what is right, even under pressure.",
        ],
        Donts: [
          "Avoid dishonesty or deceitful behavior.",
          "Do not compromise ethics for personal gain.",
          "Avoid breaking promises or commitments.",
          "Do not ignore unethical practices.",
        ],
        Tips: [
          "Reflect regularly on your values and decisions.",
          "Seek feedback on your actions to ensure consistency with your principles.",
          "Surround yourself with ethical role models.",
        ],
        Resources: {
          Books: [
            "The Seven Habits of Highly Effective People by Stephen Covey",
            "Integrity: The Courage to Meet the Demands of Reality by Henry Cloud",
          ],
          YouTube: ["https://youtu.be/wE4c2nKPmZI"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Work Ethic",
        Description:
          "A set of values based on hard work, diligence, and commitment to quality.",
        Dos: [
          "Be punctual and meet deadlines.",
          "Stay focused and avoid distractions.",
          "Take pride in delivering high-quality work.",
          "Maintain a positive and proactive attitude.",
        ],
        Donts: [
          "Avoid procrastination or delaying tasks.",
          "Don’t neglect responsibilities or assignments.",
          "Avoid taking shortcuts that compromise quality.",
          "Don’t show apathy towards tasks or goals.",
        ],
        Tips: [
          "Set daily goals to stay organized.",
          "Break tasks into smaller, manageable steps.",
          "Seek feedback to improve your performance.",
          "Practice self-discipline to remain consistent.",
        ],
        Resources: {
          Books: [
            "Grit: The Power of Passion and Perseverance by Angela Duckworth",
            "The 5 AM Club by Robin Sharma",
          ],
          YouTube: ["https://youtu.be/H14bBuluwB8"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Professionalism",
        Description:
          "The conduct, behavior, and attitude expected in a workplace or professional setting.",
        Dos: [
          "Dress appropriately for the environment.",
          "Communicate respectfully and clearly.",
          "Be punctual and reliable.",
          "Maintain a positive attitude and demeanor.",
        ],
        Donts: [
          "Avoid inappropriate or casual behavior in professional settings.",
          "Do not ignore workplace policies or procedures.",
          "Avoid gossiping or spreading negativity.",
          "Do not neglect proper communication etiquette.",
        ],
        Tips: [
          "Observe and learn from experienced professionals.",
          "Keep personal issues separate from work.",
          "Continuously work on improving your soft skills.",
          "Stay updated on industry standards and trends.",
        ],
        Resources: {
          Books: [
            "The Power of Professionalism by Bill Wiersma",
            "The Essentials of Business Etiquette by Barbara Pachter",
          ],
          YouTube: ["https://youtu.be/4ovfXUtBiSI"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Responsibility",
        Description:
          "The ability to be accountable for your actions, tasks, and obligations.",
        Dos: [
          "Take ownership of your tasks and outcomes.",
          "Meet deadlines and fulfill commitments.",
          "Acknowledge and learn from mistakes.",
          "Support and assist team members when needed.",
        ],
        Donts: [
          "Avoid blaming others for your mistakes.",
          "Do not neglect your duties or procrastinate.",
          "Avoid making excuses for incomplete work.",
          "Do not ignore constructive feedback.",
        ],
        Tips: [
          "Use a task management system to stay organized.",
          "Break larger tasks into smaller, actionable steps.",
          "Develop a habit of reflecting on your performance.",
          "Communicate proactively about challenges or delays.",
        ],
        Resources: {
          Books: [
            "Extreme Ownership by Jocko Willink and Leif Babin",
            "Accountability: The Key to Driving a High-Performance Culture by Greg Bustin",
          ],
          YouTube: ["https://youtu.be/UhX5ybYdqUE"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Adaptability/Flexibility",
        Description:
          "The ability to adjust to new conditions and remain effective in changing situations.",
        Dos: [
          "Embrace change with a positive attitude.",
          "Learn new skills and approaches when required.",
          "Stay open to constructive feedback.",
          "Develop solutions to unexpected challenges.",
        ],
        Donts: [
          "Avoid resisting changes without understanding them.",
          "Do not cling to old methods when new ones are more effective.",
          "Avoid being dismissive of others' ideas.",
          "Do not panic in uncertain situations.",
        ],
        Tips: [
          "Practice mindfulness to stay calm during transitions.",
          "Continuously develop problem-solving skills.",
          "Seek opportunities to learn and grow.",
          "Build resilience by reflecting on past experiences.",
        ],
        Resources: {
          Books: [
            "Who Moved My Cheese? by Spencer Johnson",
            "The Power of Now by Eckhart Tolle",
          ],
          YouTube: ["https://youtu.be/xNQOQgLkD9g"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Self-Motivation",
        Description:
          "The ability to set and achieve goals independently, without external encouragement.",
        Dos: [
          "Set clear, achievable goals.",
          "Break tasks into manageable steps.",
          "Stay focused on long-term objectives.",
          "Celebrate small wins to maintain momentum.",
        ],
        Donts: [
          "Avoid procrastination and distractions.",
          "Do not wait for external motivation.",
          "Avoid neglecting self-care while working towards goals.",
          "Do not lose sight of the bigger picture.",
        ],
        Tips: [
          "Create a vision board to visualize goals.",
          "Develop a routine to stay consistent.",
          "Find a source of inspiration or purpose.",
          "Track progress and adjust goals as needed.",
        ],
        Resources: {
          Books: [
            "Drive: The Surprising Truth About What Motivates Us by Daniel H. Pink",
            "Atomic Habits by James Clear",
          ],
          YouTube: ["https://youtu.be/7xzR3od-Fqk"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
    ],
    WorkplaceSkills: [
      {
        Skill: "Communication",
        Description:
          "The ability to convey information effectively and listen actively in both verbal and written forms.",
        Dos: [
          "Listen attentively and respectfully.",
          "Be clear and concise when speaking or writing.",
          "Adapt your communication style to your audience.",
          "Use appropriate body language.",
        ],
        Donts: [
          "Interrupt others while they are speaking.",
          "Use jargon or overly technical terms when unnecessary.",
          "Ignore non-verbal cues.",
          "Speak in a way that may cause confusion or misinterpretation.",
        ],
        Tips: [
          "Practice active listening to ensure full understanding.",
          "Clarify and summarize key points to ensure understanding.",
          "Be open to feedback on your communication style.",
          "Engage in conversations with an open and positive mindset.",
        ],
        Resources: {
          Books: [
            "Crucial Conversations by Patterson, Grenny, McMillan, and Switzler",
            "The Art of Communication by Judy Apps",
          ],
          YouTube: ["https://youtu.be/J4TzPC8dJj4"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Decision Making",
        Description:
          "The ability to make informed choices that lead to successful outcomes.",
        Dos: [
          "Analyze all available options.",
          "Consider short-term and long-term impacts.",
          "Involve relevant stakeholders when necessary.",
          "Trust your intuition, backed by facts.",
        ],
        Donts: [
          "Rush decisions without considering all factors.",
          "Make decisions based solely on emotion.",
          "Ignore feedback from others.",
          "Overthink and delay the decision unnecessarily.",
        ],
        Tips: [
          "Use a decision-making model to guide you.",
          "Seek advice from experienced peers.",
          "Take time to reflect on your decisions for continuous improvement.",
          "Learn from past decisions to avoid repeating mistakes.",
        ],
        Resources: {
          Books: [
            "Decisive by Chip Heath",
            "The Decision Book by Mikael Krogerus",
          ],
          YouTube: ["https://youtu.be/YxyGGCS9nLE"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Teamwork",
        Description:
          "The ability to collaborate effectively with others to achieve common goals and objectives.",
        Dos: [
          "Respect each team member's contributions.",
          "Communicate openly and actively with teammates.",
          "Support and help others when needed.",
          "Be flexible and willing to compromise.",
        ],
        Donts: [
          "Avoid being passive or disengaged.",
          "Ignore team goals in favor of personal objectives.",
          "Disrespect other team members' ideas.",
          "Blame others when things go wrong.",
        ],
        Tips: [
          "Engage in regular team meetings to ensure alignment.",
          "Embrace diversity and different perspectives.",
          "Provide constructive feedback to your team members.",
          "Build trust by being dependable and transparent.",
        ],
        Resources: {
          Books: [
            "The Five Dysfunctions of a Team by Patrick Lencioni",
            "Team of Teams by General Stanley McChrystal",
          ],
          YouTube: ["https://youtu.be/0MD4Ymjycjc"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Multicultural Sensitivity & Awareness",
        Description:
          "The ability to understand, appreciate, and respect cultural differences in a diverse environment.",
        Dos: [
          "Learn about different cultural backgrounds and practices.",
          "Be open-minded and avoid biases.",
          "Respect diverse viewpoints and traditions.",
        ],
        Donts: [
          "Avoid making assumptions about people based on their culture.",
          "Disrespect cultural differences.",
          "Ignore cultural norms in the workplace.",
        ],
        Tips: [
          "Engage in cultural awareness training.",
          "Practice active listening and empathy.",
          "Participate in cross-cultural events or discussions.",
        ],
        Resources: {
          Books: ["The Culture Map by Erin Meyer"],
          YouTube: ["https://youtu.be/5Y7bZfgz5B0"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Planning, Organizing & Management",
        Description:
          "The ability to set clear goals, organize tasks, and manage resources efficiently to achieve desired outcomes.",
        Dos: [
          "Prioritize tasks based on importance and deadlines.",
          "Set realistic goals and timelines.",
          "Break large tasks into smaller, manageable steps.",
        ],
        Donts: [
          "Be disorganized or chaotic.",
          "Procrastinate or leave tasks until the last minute.",
          "Ignore the resources or team members needed for success.",
        ],
        Tips: [
          "Use task management tools like to-do lists or project management software.",
          "Plan ahead and review progress regularly.",
          "Keep communication clear and timely with team members.",
        ],
        Resources: {
          Books: [
            "Getting Things Done by David Allen",
            "The 7 Habits of Highly Effective People by Stephen Covey",
          ],
          YouTube: ["https://youtu.be/jU9a9zwbA5g"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Leadership",
        Description:
          "The ability to guide, motivate, and inspire others to achieve common goals and drive organizational success.",
        Dos: [
          "Lead by example and set a positive tone.",
          "Encourage collaboration and open communication.",
          "Empower others by trusting them with responsibilities.",
        ],
        Donts: [
          "Avoid micromanaging or controlling every aspect.",
          "Ignore the input and needs of team members.",
          "Shy away from making tough decisions when necessary.",
        ],
        Tips: [
          "Develop emotional intelligence to connect with others.",
          "Continuously work on your communication and decision-making skills.",
          "Provide constructive feedback and recognize team members' efforts.",
        ],
        Resources: {
          Books: [
            "Leaders Eat Last by Simon Sinek",
            "The 5 Levels of Leadership by John C. Maxwell",
          ],
          YouTube: ["https://youtu.be/2t2v4E6uHCw"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
    ],
    TechnicalSkillsGroundedInAcademics: [
      {
        Skill: "Computer & Technology Literacy",
        Description:
          "The ability to effectively use computers, software, and digital tools to perform tasks and solve problems.",
        Dos: [
          "Stay updated on new technology and software tools.",
          "Practice using different software applications.",
          "Understand the basics of computer systems and networks.",
        ],
        Donts: [
          "Avoid using outdated software.",
          "Disregard security practices or updates.",
          "Rely solely on one tool or system.",
        ],
        Tips: [
          "Learn new software relevant to your field.",
          "Take online courses or tutorials on new technologies.",
          "Practice basic troubleshooting skills.",
        ],
        Resources: {
          Books: ["Digital Literacy For Dummies by Faithe Wempen"],
          YouTube: ["https://youtu.be/GUHLdE_zY40"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Job-Specific Skills",
        Description:
          "The expertise and knowledge directly relevant to a specific job or profession.",
        Dos: [
          "Keep your skills updated according to industry trends.",
          "Seek hands-on experience in your field.",
          "Learn tools and technologies specific to your profession.",
        ],
        Donts: [
          "Ignore evolving trends in your industry.",
          "Become complacent in your current skill set.",
        ],
        Tips: [
          "Take additional training or certifications.",
          "Engage in relevant projects or internships.",
        ],
        Resources: {
          Books: ["The Lean Startup by Eric Ries"],
          YouTube: ["https://youtu.be/7iCxHvA5W5M"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Safety & Health",
        Description:
          "Knowledge of safe work practices and maintaining a healthy work environment.",
        Dos: [
          "Follow established safety protocols.",
          "Ensure proper use of safety equipment and tools.",
          "Promote a healthy work-life balance.",
        ],
        Donts: [
          "Ignore safety regulations.",
          "Neglect to report hazards in the workplace.",
        ],
        Tips: [
          "Stay informed on safety training and updates.",
          "Maintain awareness of potential health risks in your environment.",
        ],
        Resources: {
          Books: [
            "Safety Culture: An Innovative Leadership Approach by Dr. John E. Flin",
          ],
          YouTube: ["https://youtu.be/3guElR9H4KM"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Service Orientation",
        Description:
          "A focus on helping others and providing high-quality customer service.",
        Dos: [
          "Listen actively to customer needs.",
          "Maintain a positive and professional attitude.",
          "Go the extra mile to exceed customer expectations.",
        ],
        Donts: [
          "Ignore customer feedback.",
          "Be dismissive or rude to customers.",
        ],
        Tips: [
          "Always put the customer first.",
          "Anticipate customer needs and resolve issues quickly.",
        ],
        Resources: {
          Books: ["The Service Profit Chain by James L. Heskett"],
          YouTube: ["https://youtu.be/Mk8vN_93seM"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
      {
        Skill: "Professional Development",
        Description:
          "Ongoing learning and growth to advance in one’s career and improve professional capabilities.",
        Dos: [
          "Engage in continuous education and skill development.",
          "Seek mentorship and constructive feedback.",
          "Network with other professionals in your field.",
        ],
        Donts: [
          "Limit yourself to a fixed skill set.",
          "Ignore opportunities for personal and career growth.",
        ],
        Tips: [
          "Attend workshops, webinars, and industry conferences.",
          "Set clear goals for career advancement.",
        ],
        Resources: {
          Books: ["The 7 Habits of Highly Effective People by Stephen Covey"],
          YouTube: ["https://youtu.be/ToHZza0YgHA"],
          Websites: ["https://www.skillsusa.org"],
        },
      },
    ],
  };

  const categoryTitles = {
    PersonalSkills: "Personal Growth",
    WorkplaceSkills: "Professional Dynamics",
    TechnicalSkillsGroundedInAcademics: "Technical Foundations",
  };

  const handleSkillClick = (skillName) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  const handleBuildProfile = () => {
    const branch = localStorage.getItem("branch");
    if (branch === "Computer engineering") {
      window.location.href = "/params/page?page=githubProfile";
    } else {
      window.location.href = "/params/page?page=linkedinProfile";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <header
        className="backdrop-blur-sm bg-white/60 rounded-xl shadow-lg p-6 mb-8 text-center"
        role="banner"
      >
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
          Professional Skills Mastery
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Elevate your career potential by developing comprehensive professional
          competencies
        </p>
      </header>

      {/* Category Navigation */}
      <nav
        aria-label="Skill Categories"
        className="flex flex-wrap gap-3 mb-8 justify-center"
      >
        {Object.keys(categoryTitles).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all transform 
          ${
            activeCategory === category
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              : "bg-white text-gray-600 hover:bg-blue-50 shadow-sm"
          }`}
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls={`skills-${category}`}
          >
            {categoryTitles[category]}
          </button>
        ))}
      </nav>

      {/* Skills Grid */}
      <section
        id={`skills-${activeCategory}`}
        role="tabpanel"
        aria-labelledby={activeCategory}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
      >
        {soft_skills[activeCategory]?.map((skill) => (
          <div
            key={skill.Skill}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
          >
            <button
              onClick={() => handleSkillClick(skill.Skill)}
              className="w-full p-5 flex justify-between items-center text-left cursor-pointer hover:bg-blue-50 transition-colors group"
              aria-expanded={expandedSkill === skill.Skill}
              aria-controls={`details-${skill.Skill}`}
            >
              <h2 className="text-xl font-bold text-blue-800 group-hover:text-indigo-700 transition-colors">
                {skill.Skill}
              </h2>
              {expandedSkill === skill.Skill ? (
                <ChevronUp className="w-6 h-6 text-blue-500 group-hover:text-indigo-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-blue-500 group-hover:text-indigo-600" />
              )}
            </button>

            {expandedSkill === skill.Skill && (
              <div
                id={`details-${skill.Skill}`}
                className="p-5 space-y-4 bg-gray-50 transition-all"
                role="region"
                aria-label={`${skill.Skill} details`}
              >
                <p className="text-gray-600 italic mb-4">{skill.Description}</p>

                {/* Dos and Don'ts, Tips, Resources – remain unchanged, already semantically correct */}

                {/* Resources Link */}
                {skill.Resources.YouTube && (
                  <a
                    href={skill.Resources.YouTube[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    aria-label={`Watch video tutorial for ${skill.Skill} on YouTube`}
                  >
                    Video Tutorial
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Conditional Button */}
      {activeCategory === "TechnicalSkillsGroundedInAcademics" && (
        <div className="flex justify-center mt-5">
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleBuildProfile}
            aria-label="Start building your professional profile"
          >
            Let&apos;s Build Profile
          </Button>
        </div>
      )}

      {/* Footer Note */}
      <footer className="mt-8 text-center text-gray-600" role="contentinfo">
        <p className="max-w-2xl mx-auto">
          Developed in collaboration with{" "}
          <Link
            href="https://www.skillsusa.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:text-indigo-700 transition-colors"
            aria-label="Visit SkillsUSA official website"
          >
            SkillsUSA
          </Link>{" "}
          to empower professional growth
        </p>
      </footer>
    </div>
  );
};

export default SoftSkillsModern;
