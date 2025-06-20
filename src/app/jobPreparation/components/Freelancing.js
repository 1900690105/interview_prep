import React, { useState } from "react";
import { Book, Target, Briefcase, Award, Layout, Globe } from "lucide-react";

const FreelancingGuide = ({ data }) => {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { key: "intro", icon: Book, title: "Introduction" },
    { key: "pros_cons", icon: Target, title: "Pros & Cons" },
    { key: "finding_clients", icon: Briefcase, title: "Finding Clients" },
    { key: "traits", icon: Award, title: "Freelancer Traits" },
    { key: "portfolio", icon: Layout, title: "Building Portfolio" },
    { key: "platforms", icon: Globe, title: "Freelance Platforms" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return (
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              {data.freelancing_expert_guide.intro}
            </h2>
            <p className="text-blue-600">
              {data.freelancing_expert_guide.definition.freelancing}
            </p>
          </div>
        );
      case "pros_cons":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Pros
              </h3>
              {data.freelancing_expert_guide.freelancing_pros_and_cons.pros.map(
                (pro, index) => (
                  <div key={index} className="mb-2 text-green-700">
                    <strong>{pro.title}:</strong> {pro.description}
                  </div>
                )
              )}
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Cons</h3>
              {data.freelancing_expert_guide.freelancing_pros_and_cons.cons.map(
                (con, index) => (
                  <div key={index} className="mb-2 text-red-700">
                    <strong>{con.title}:</strong> {con.description}
                  </div>
                )
              )}
            </div>
          </div>
        );
      case "finding_clients":
        return (
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Finding Clients
            </h3>
            <ul className="list-disc list-inside text-blue-700">
              {data.freelancing_expert_guide.finding_clients.methods.map(
                (method, index) => (
                  <li key={index} className="mb-2">
                    {method}
                  </li>
                )
              )}
            </ul>
          </div>
        );
      case "traits":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.freelancing_expert_guide.freelancer_traits_and_characteristics.traits.map(
              (trait, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg transform transition hover:scale-105 hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">
                    {trait.title}
                  </h4>
                  <p className="text-blue-600">{trait.description}</p>
                </div>
              )
            )}
          </div>
        );
      case "portfolio":
        return (
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Setting Up Your Portfolio
            </h3>
            <ul className="list-disc list-inside text-blue-700">
              {data.freelancing_expert_guide.setting_up_your_portfolio.tips.map(
                (tip, index) => (
                  <li key={index} className="mb-2">
                    {tip}
                  </li>
                )
              )}
            </ul>
          </div>
        );
      case "platforms":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.freelancing_expert_guide.finding_clients.freelance_platforms.map(
              (platform, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg transform transition hover:scale-105 hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">
                    {platform.name}
                  </h4>
                  <p className="text-blue-600 mb-2">{platform.description}</p>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Platform
                  </a>
                </div>
              )
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <div className="bg-blue-600 text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Freelancing Expert Guide</h1>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full md:w-1/4 bg-blue-100 p-4 rounded-lg mr-4 mb-4 md:mb-0">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`w-full flex items-center p-3 mb-2 rounded-lg transition ${
                activeSection === section.key
                  ? "bg-blue-600 text-white"
                  : "bg-blue-200 text-blue-800 hover:bg-blue-300"
              }`}
            >
              <section.icon className="mr-2" size={20} />
              {section.title}
            </button>
          ))}
        </div>

        <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-md">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <FreelancingGuide
      data={{
        freelancing_expert_guide: {
          intro:
            "Welcome to your freelancing journey! With over 15 years of experience, let's dive into the world of freelancing and help you get started and succeed.",
          definition: {
            freelancing:
              "Freelancing means working independently, offering your skills and services to clients without being tied to a full-time job or employer. As a freelancer, you're your own boss, setting your hours and choosing your projects.",
          },
          is_freelancing_good_for_beginners: {
            pros: [
              {
                title: "Flexibility and Independence",
                details: [
                  "Control over your schedule: As a freelancer, you have the ability to choose when and where you work. This flexibility is ideal for beginners who may need to balance other responsibilities or personal growth.",
                  "Choose your projects: You can choose the type of work that interests you and aligns with your skills, which can be motivating and fulfilling.",
                ],
              },
              {
                title: "Lower Barrier to Entry",
                details: [
                  "No formal qualifications required: Many freelance jobs focus on skills rather than formal education, making it easier for beginners to get started. There are plenty of opportunities in writing, design, programming, and digital marketing where self-taught skills can be just as valuable as a degree.",
                  "Start small and grow: You can begin with small tasks or projects, gaining experience and building confidence before moving on to bigger clients.",
                ],
              },
            ],
            cons: [
              {
                title: "Unpredictable Income",
                details:
                  "Freelancers, especially beginners, may experience inconsistent income, as work can vary month to month. It can take time to establish a steady client base and predictable earnings.",
              },
              {
                title: "Finding Clients Can Be Challenging",
                details:
                  "It might be tough for beginners to find their first few clients. Freelancers often need to hustle on platforms, network, and build a strong portfolio before they can attract steady clients.",
              },
              {
                title: "Lack of Benefits",
                details:
                  "Freelancers don't receive benefits like health insurance, retirement plans, or paid time off, which can be a challenge, especially for those just starting out and without a financial safety net.",
              },
              {
                title: "Requires Self-Discipline",
                details:
                  "Freelancers need to be highly organized and self-motivated. Beginners may struggle with managing their time effectively, which can impact productivity and work quality.",
              },
            ],
            overall_advice:
              "Freelancing can be a great option for beginners, but it requires hard work, persistence, and the ability to handle the uncertainties of the freelance world. With the right mindset and strategies, it can lead to rewarding and flexible work opportunities.",
          },
          freelancing_pros_and_cons: {
            pros: [
              {
                title: "Flexibility",
                description:
                  "Freelancers enjoy the freedom to choose their working hours and locations. You can decide when and where to work, which can greatly improve your work-life balance.",
              },
              {
                title: "Control Over Workload",
                description:
                  "Freelancers can decide how much work to take on, allowing for better control over their schedule. You can accept as many projects as you can handle or take breaks when needed.",
              },
              {
                title: "Variety of Projects",
                description:
                  "Freelancers often get to work on a variety of projects with different clients. This can be stimulating and allows for constant learning and skill development.",
              },
              {
                title: "Potential for Higher Earnings",
                description:
                  "As a freelancer, you set your own rates, which means you have the potential to earn more compared to traditional employees, especially if you specialize in a high-demand skill.",
              },
              {
                title: "Independence",
                description:
                  "Freelancers are their own bosses. You have the freedom to choose the type of work you do, the clients you work with, and how you manage your day-to-day operations.",
              },
              {
                title: "Skill Development",
                description:
                  "Freelancing allows you to constantly improve and learn new skills as you work with different clients and projects. You also gain experience in areas like client communication and business management.",
              },
            ],
            cons: [
              {
                title: "Income Instability",
                description:
                  "Freelancers don't have a consistent paycheck. Income can fluctuate based on the amount of work available or seasonal demand, making it harder to predict your earnings month to month.",
              },
              {
                title: "Lack of Benefits",
                description:
                  "Freelancers do not have access to employee benefits like health insurance, paid vacation, or retirement plans, which can be a significant downside compared to full-time employment.",
              },
              {
                title: "Isolation",
                description:
                  "Freelancers often work alone, which can lead to feelings of isolation or loneliness. There may be limited social interaction, especially if you work remotely or from home.",
              },
              {
                title: "Time Spent on Non-Billable Tasks",
                description:
                  "Freelancers spend a portion of their time on tasks that are not directly billable to clients, such as marketing, administration, invoicing, and taxes, which can take time away from paid work.",
              },
              {
                title: "Client Management Challenges",
                description:
                  "Freelancers must manage all aspects of client relationships, from negotiating contracts to handling payments. This can sometimes lead to difficult situations, including clients not paying on time or changing project scopes.",
              },
              {
                title: "Job Security",
                description:
                  "Freelancing lacks the job security of full-time employment. Projects can end unexpectedly, and freelancers may struggle to find new clients or contracts if there is a lull in demand.",
              },
            ],
          },
          freelancer_traits_and_characteristics: {
            intro:
              "To be a successful freelancer, it's not just about having the right skills; certain personal traits and characteristics are crucial to managing the independence and challenges that come with freelancing.",
            traits: [
              {
                title: "Self-Discipline",
                description:
                  "Freelancers need to be highly disciplined, as they don't have a boss to oversee their work. This includes the ability to meet deadlines, stay focused, and maintain consistent productivity.",
              },
              {
                title: "Time Management",
                description:
                  "Effective time management is key to balancing multiple projects, meetings, and deadlines. Freelancers need to be able to organize their time wisely and avoid procrastination.",
              },
              {
                title: "Communication Skills",
                description:
                  "Strong communication is essential for building client relationships, understanding project requirements, and discussing progress. Freelancers must clearly convey ideas, expectations, and updates to clients.",
              },
              {
                title: "Problem-Solving",
                description:
                  "Freelancers often face unexpected challenges, whether it's a technical issue, a misunderstanding with a client, or an unforeseen change in a project. The ability to find solutions quickly is vital.",
              },
              {
                title: "Adaptability",
                description:
                  "Freelancers must be able to adapt to changing client needs, project scopes, and market trends. Flexibility is important for staying competitive and accommodating diverse requests.",
              },
              {
                title: "Confidence",
                description:
                  "Having the confidence to pitch your services, negotiate rates, and handle difficult situations is essential. Freelancers must believe in their value and feel comfortable asserting themselves.",
              },
              {
                title: "Persistence",
                description:
                  "Rejection and setbacks are part of freelancing. Being persistent and maintaining a positive mindset, even in the face of challenges, helps freelancers keep pushing forward.",
              },
              {
                title: "Financial Management",
                description:
                  "Freelancers are responsible for their own income, taxes, and expenses. Having a solid understanding of personal finance, including budgeting and saving for slow months, is crucial.",
              },
              {
                title: "Networking Skills",
                description:
                  "Building relationships with potential clients, fellow freelancers, and industry professionals can open doors to new opportunities. Networking is key to growing your business and client base.",
              },
              {
                title: "Detail-Oriented",
                description:
                  "Freelancers need to pay attention to the finer details, whether it's reviewing contracts, proofing documents, or delivering high-quality work. This trait ensures work is error-free and meets client expectations.",
              },
              {
                title: "Creative Thinking",
                description:
                  "Freelancers often need to come up with unique solutions or ideas for their clients. Creativity and innovation help freelancers offer fresh perspectives that stand out in their respective fields.",
              },
            ],
          },
          types_of_freelancing: {
            general:
              "Freelancers can work in many fields. Common categories include:",
            categories: [
              "Writing and Content Creation",
              "Graphic Design and Illustration",
              "Web and App Development",
              "Digital Marketing",
              "Photography and Videography",
              "Consulting",
              "Translation",
              "Voice Acting",
              "Virtual Assistance",
            ],
            specialization:
              "You can either work as a generalist (offering a broad range of services) or specialize in a particular area to stand out and attract a specific client base.",
            contract_types: {
              contract_work:
                "Jobs where you’re a temporary contract worker, rather than a permanent employee. This often involves working for a set duration with specific tasks and responsibilities.",
              contract_job:
                "A term often used interchangeably with contract work, where the employment is temporary, defined by a contract between the worker and the company.",
              independent_contractor:
                "Another common term for freelancer, where the work terms are specified by a contract with another company or individual. You are your own boss but work under agreed conditions.",
              1099: "Refers to the IRS form an independent contractor fills out (form 1099-MISC) and is often used to describe the job. It indicates that you’re not an employee, but an independent contractor responsible for your taxes.",
              contract_consultant:
                "Someone who is hired for temporary consultations for specific issues within a company. These positions often require specialized knowledge and can be short-term.",
              contract_to_hire:
                "A job that begins as a freelance, independent contractor position but has the potential to become a permanent employee position if things go well. It’s a trial period for both the worker and employer.",
            },
          },
          choosing_your_niche: {
            importance:
              "Choosing a niche is one of the most important steps. A niche allows you to stand out from the competition and target a specific group of clients.",
            how_to_choose: [
              "Assess your skills and interests.",
              "Research market demand and competition.",
              "Pick a niche with growing demand and good pay.",
              "Think about what excites you and aligns with your passion.",
            ],
            examples: [
              "UI/UX Design for mobile apps",
              "SEO for local businesses",
              "Copywriting for e-commerce websites",
            ],
          },
          building_skills: {
            importance:
              "Building your skills is the foundation of a successful freelancing career. As the market evolves, staying ahead of trends is crucial.",
            how_to_build: [
              "Take online courses (Udemy, Coursera, Skillshare).",
              "Attend workshops and webinars.",
              "Read industry blogs and follow experts.",
              "Work on personal projects to build real-world experience.",
            ],
          },
          setting_up_your_portfolio: {
            importance:
              "Your portfolio is your resume. It showcases your skills, experience, and the quality of your work.",
            tips: [
              "Include a variety of projects that showcase your expertise.",
              "Make sure your portfolio is easy to navigate.",
              "Use a professional-looking website or a platform like Behance or Dribbble.",
              "Provide context for each project (client problem, your solution, and results).",
            ],
          },
          finding_clients: {
            methods: [
              "Use freelance platforms like Upwork, Fiverr, and Freelancer.",
              "Network on social media platforms like LinkedIn and Twitter.",
              "Attend industry events, both online and offline.",
              "Ask for referrals from past clients or peers.",
              "Build a personal website with SEO to attract clients organically.",
            ],
            freelance_platforms: {
              intro:
                "Here are some well-known platforms where you can find freelance work across different industries. Whether you're just starting out or looking to expand your client base, these platforms offer a variety of opportunities.",
              platforms: [
                {
                  name: "Upwork",
                  description:
                    "One of the largest platforms for freelancers. It offers jobs in categories like web development, writing, marketing, design, and more. Freelancers create a profile, submit proposals, and work directly with clients.",
                  type: "General freelance jobs",
                  link: "https://www.upwork.com/",
                },
                {
                  name: "Fiverr",
                  description:
                    "A platform that allows freelancers to offer services starting at $5. It's great for a wide range of freelance services, including design, writing, programming, and digital marketing.",
                  type: "Project-based services",
                  link: "https://www.fiverr.com/",
                },
                {
                  name: "Freelancer",
                  description:
                    "Similar to Upwork, Freelancer connects freelancers with clients looking for a wide range of skills. It offers both hourly and project-based work.",
                  type: "General freelance jobs",
                  link: "https://www.freelancer.com/",
                },
                {
                  name: "Toptal",
                  description:
                    "Toptal is a premium platform that connects top freelancers with high-quality clients. It focuses on developers, designers, and finance experts, and only accepts the top 3% of applicants.",
                  type: "High-end freelancers",
                  link: "https://www.toptal.com/",
                },
                {
                  name: "Guru",
                  description:
                    "Guru is a platform that lets you create a profile to showcase your work, then bid on jobs. It offers work in categories like web development, writing, design, marketing, and more.",
                  type: "General freelance jobs",
                  link: "https://www.guru.com/",
                },
                {
                  name: "PeoplePerHour",
                  description:
                    "A platform designed to connect businesses with freelancers specializing in web development, design, marketing, and writing. The platform focuses on offering hourly and project-based work.",
                  type: "Hourly and project-based jobs",
                  link: "https://www.peopleperhour.com/",
                },
                {
                  name: "We Work Remotely",
                  description:
                    "A job board specifically for remote jobs, including freelance positions. It offers roles in tech, design, marketing, and customer support, and is a great place for remote freelancers.",
                  type: "Remote freelance jobs",
                  link: "https://weworkremotely.com/",
                },
                {
                  name: "SimplyHired",
                  description:
                    "A job search engine that includes both freelance and full-time opportunities across various fields. Freelancers can use SimplyHired to find short-term and contract-based work.",
                  type: "General freelance jobs",
                  link: "https://www.simplyhired.com/",
                },
                {
                  name: "FlexJobs",
                  description:
                    "FlexJobs specializes in remote, flexible, and freelance jobs across various industries, including tech, marketing, design, and education. It offers curated job listings and supports freelancers in finding reputable opportunities.",
                  type: "Remote freelance jobs",
                  link: "https://www.flexjobs.com/",
                },
                {
                  name: "LinkedIn",
                  description:
                    "While primarily a professional networking site, LinkedIn offers a section for freelance job listings. You can connect with clients, join relevant groups, and showcase your portfolio.",
                  type: "Networking and job search",
                  link: "https://www.linkedin.com/",
                },
              ],
            },
            best_freelance_websites: [
              "Fiverr",
              "Toptal",
              "Jooble",
              "Freelancer.com",
              "Upwork",
              "FlexJobs",
              "SimplyHired",
              "Guru",
              "LinkedIn",
              "Behance",
              "99designs",
              "Dribbble",
              "People Per Hour",
              "ServiceScape",
              "DesignHill",
              "TaskRabbit",
              "Flexiple",
              "DesignCrowd",
              "SolidGigs",
              "We Work Remotely",
              "Codeable",
              "Gigster",
              "Arc",
              "Wellfound",
              "Gun.io",
            ],
            choosing_top_freelance_websites: {
              criteria: [
                {
                  factor: "Terms and Conditions",
                  description:
                    "Chosen freelance websites have well-documented terms and conditions that protect both freelancers and employers on said platforms.",
                },
                {
                  factor: "Customer Support",
                  description:
                    "Each freelance site provides customer support to guide users and resolve any disputes.",
                },
                {
                  factor: "Payment and Withdrawal Methods",
                  description:
                    "Local and global freelancers can receive payment from freelance websites through multiple options, such as bank transfers and electronic payments.",
                },
                {
                  factor: "Platform Reputation",
                  description:
                    "The platforms are well-regarded in the freelance community, with positive reviews from both freelancers and employers.",
                },
                {
                  factor: "User Interface and Experience",
                  description:
                    "Freelance websites offer a user-friendly design and intuitive navigation to make the job search and application process seamless.",
                },
                {
                  factor: "Job Variety",
                  description:
                    "Platforms provide a wide range of job categories to accommodate freelancers from various fields and levels of expertise.",
                },
                {
                  factor: "Security and Fraud Prevention",
                  description:
                    "Reliable freelance platforms implement security measures to prevent scams and protect user data.",
                },
                {
                  factor: "Commission and Fees",
                  description:
                    "Freelance websites have transparent fee structures, ensuring freelancers understand any deductions from their earnings.",
                },
                {
                  factor: "Ease of Communication",
                  description:
                    "Platforms offer integrated communication tools for seamless interactions between freelancers and clients.",
                },
                {
                  factor: "Project Management Tools",
                  description:
                    "Some platforms include tools to help freelancers manage their projects, deadlines, and client feedback effectively.",
                },
                {
                  factor: "Freelancer Support Resources",
                  description:
                    "Websites may offer resources like blogs, tutorials, or webinars to help freelancers improve their skills and succeed on the platform.",
                },
                {
                  factor: "Verification and Trust Signals",
                  description:
                    "Freelance websites verify client and freelancer profiles to build trust and credibility within the community.",
                },
              ],
              importance:
                "These factors collectively ensure that the listed freelance websites provide a reliable, user-friendly, and secure experience for freelancers and clients alike.",
            },
            advice:
              "Consistency is key. Regular outreach and networking can help you build a solid client base.",
          },
          crafting_winning_proposals: {
            importance:
              "Your proposal is your first impression on potential clients. It needs to grab attention and highlight why you're the best fit for the job.",
            tips: [
              "Personalize each proposal to the client’s specific needs.",
              "Be clear on how you can solve their problem or meet their goals.",
              "Include relevant work samples that demonstrate your expertise.",
              "Offer a clear timeline and pricing structure.",
              "Proofread your proposal to avoid errors and ensure professionalism.",
            ],
          },
          pricing_your_services: {
            guidelines:
              "Pricing can be tricky but setting the right rate is essential for success.",
            tips: [
              "Start by researching what others in your niche are charging.",
              "Consider the value you're offering and your experience level.",
              "Avoid underpricing; it can harm your reputation and income.",
              "Offer tiered pricing (basic, standard, premium) to give clients options.",
              "Be open to negotiation, but set clear boundaries.",
            ],
          },
          legal_and_financial_basics: {
            importance:
              "Being aware of legal and financial aspects ensures your business is legitimate and protected.",
            key_points: [
              "Register your freelance business (depending on location).",
              "Keep track of your income and expenses for tax purposes.",
              "Have contracts in place for each project.",
              "Consider hiring an accountant or using accounting software.",
              "Understand the taxes you’re responsible for as a freelancer.",
            ],
          },
          marketing_your_work: {
            importance:
              "Marketing is essential to make your freelancing business grow and attract new clients.",
            methods: [
              "Create and share content on social media.",
              "Network with other freelancers and potential clients.",
              "Offer discounts or referral bonuses to encourage word-of-mouth.",
              "Leverage Google Ads or Facebook Ads for paid marketing.",
              "Collaborate with influencers or other professionals in your niche.",
            ],
          },
          handling_rejection_and_feedback: {
            importance:
              "Rejection is a part of freelancing, and how you handle it can affect your growth.",
            advice: [
              "Don't take rejection personally; learn from it.",
              "Request constructive feedback when possible.",
              "Use rejection as motivation to improve your skills.",
              "Always be professional, even if you don’t get the job.",
            ],
          },
          continuing_learning: {
            importance:
              "Freelancing requires continuous learning to stay competitive and relevant.",
            how_to_continue_learning: [
              "Attend webinars and conferences.",
              "Read books and articles related to your niche.",
              "Experiment with new tools and technologies.",
              "Join online communities and forums to exchange ideas.",
            ],
          },
          scaling_your_freelancing_business: {
            importance:
              "Once you’ve built a steady flow of work, scaling your freelancing business will help you grow.",
            how_to_scale: [
              "Outsource non-core tasks (like admin or marketing) to focus on client work.",
              "Increase your rates as you gain more experience.",
              "Hire other freelancers to collaborate with you on larger projects.",
              "Offer additional services to expand your revenue streams.",
            ],
            tips: "Scaling requires careful planning and strategic decisions, but it’s the key to transforming your freelance work into a business.",
          },
          calculating_your_freelance_rates: {
            steps: [
              {
                step: "Assess Your Skill Level",
                description:
                  "Your experience and expertise in your field will directly influence the rates you can charge. More experienced freelancers can charge higher rates due to their proven skills, while beginners may need to start at a lower rate and gradually increase it.",
              },
              {
                step: "Research Industry Standards",
                description:
                  "Look into the average rates for your niche. Platforms like Upwork, Fiverr, and freelance websites can give you insights into what others with similar skills are charging. This will give you a benchmark.",
              },
              {
                step: "Consider Your Expenses",
                description:
                  "Freelancers have overhead costs like software, equipment, taxes, insurance, and marketing. It's crucial to factor these into your rates to ensure you're covering all business expenses.",
              },
              {
                step: "Choose Your Pricing Model",
                options: [
                  {
                    model: "Hourly Rate",
                    description:
                      "You charge based on the number of hours you work. This model is great for ongoing projects or tasks with unclear timelines.",
                  },
                  {
                    model: "Project-Based Rate",
                    description:
                      "You charge a flat fee for an entire project. This is ideal for clients with well-defined project scopes and is more predictable for both you and the client.",
                  },
                  {
                    model: "Retainer Rate",
                    description:
                      "You charge clients a fixed monthly fee for ongoing services. This provides predictable income and long-term relationships with clients.",
                  },
                ],
              },
              {
                step: "Factor in Your Target Income",
                description:
                  "Determine your desired annual income. Divide that by the number of billable hours or projects you plan to work on in a year. This gives you a base hourly or project rate.",
              },
              {
                step: "Account for Taxes and Fees",
                description:
                  "Don't forget to include taxes and platform fees. Freelancers are responsible for their own taxes, and if you work on freelance platforms, they often take a commission. Make sure your rates cover these additional costs.",
              },
              {
                step: "Adjust for Market Demand",
                description:
                  "If there’s high demand for your skillset, you can increase your rates. Conversely, in a saturated market, you might need to start at a lower rate to attract clients and gradually raise it as you gain experience.",
              },
              {
                step: "Test and Adjust",
                description:
                  "Start with your calculated rate, and over time, adjust based on feedback, the value you're providing, and market conditions. Don’t be afraid to raise your rates once you gain more experience and a stronger client base.",
              },
            ],
            additional_tips: [
              "Always be transparent about your rates with clients and ensure they understand the value you're providing.",
              "Consider offering packages or discounts for long-term clients to build stronger relationships.",
              "Regularly revisit your rates as your skills improve and your business grows.",
            ],
            summary:
              "Calculating your freelance rates is crucial to ensure you're compensated fairly for your time and skills. By considering factors such as your skill level, market demand, and expenses, you can create a pricing structure that works for both you and your clients.",
          },
          resourses: [
            {
              title: "How to Write a Project Proposal Template",
              url: "https://schoolforfreelancers.com/blog/how-to-write-a-project-proposal-template/",
            },
            {
              title:
                "The Future of Self-Employment: How is AI Going to Impact Freelancing",
              url: "https://schoolforfreelancers.com/blog/the-future-of-self-employment-how-is-ai-going-to-impact-freelancing/",
            },
            {
              title: "Top 50 Side Hustle Ideas to Make Extra Money",
              url: "https://schoolforfreelancers.com/blog/top-50-side-hustle-ideas-to-make-extra-money/",
            },
            {
              title: "How to Become a Freelance Social Media Manager",
              url: "https://schoolforfreelancers.com/blog/how-to-become-a-freelance-social-media-manager/",
            },
            {
              title: "How to Use Smartsheet for Project Management",
              url: "https://schoolforfreelancers.com/blog/how-to-use-smartsheet-for-project-management/",
            },
            {
              title:
                "Finding Freelance Jobs: Your Guide to Remote Work Opportunities",
              url: "https://schoolforfreelancers.com/blog/finding-freelance-jobs/",
            },
            {
              title:
                "Is Upwork Worth It? A Comprehensive Guide for Freelancers",
              url: "https://schoolforfreelancers.com/blog/is-upwork-worth-it/",
            },
            {
              title:
                "How to Write a Contract for Freelance Work: Essentials & FREE Template",
              url: "https://schoolforfreelancers.com/blog/how-to-write-a-contract-for-freelance-work/",
            },
            {
              title:
                "Freelance Writing Jobs For Beginners – Comprehensive Guide to Starting Your Freelance Writing Career",
              url: "https://schoolforfreelancers.com/blog/freelance-writing-jobs-for-beginners/",
            },
          ],
          tools: {
            "🧭Keep You Focused": [
              {
                tool: "Tomato Timer",
                url: " https://tomato-timer.com/",
              },
              {
                tool: "OneTab",
                url: "https://www.one-tab.com/",
              },
              {
                tool: "Freedom",
                url: "https://freedom.to/",
              },
              {
                tool: "Coffitivity",
                url: "https://coffitivity.com/",
              },
            ],
            "📆 Calendar and Meeting Scheduler Tools": [
              {
                tool: "Google Calendar",
                url: "https://www.google.com/calendar/about/",
              },
              {
                tool: "Calendly",
                url: "https://calendly.com/",
              },
              {
                tool: "Doodle",
                url: "https://doodle.com/en/",
              },
            ],
            "📫 Client Communication Tools": [
              {
                tool: "Followup",
                url: " https://followup.cc/",
              },
              {
                tool: "Boomerang",
                url: "https://www.boomeranggmail.com/",
              },
              {
                tool: "Slack",
                url: "https://slack.com/",
              },
              {
                tool: "Chatwork",
                url: "https://go.chatwork.com/",
              },
            ],
            "📈 Project Management Tools": [
              {
                tool: "Trello",
                url: "https://trello.com/",
              },
              {
                tool: "Asana",
                url: "https://asana.com/",
              },

              {
                tool: "Monday",
                url: "https://monday.com/",
              },
              {
                tool: "Wrike",
                url: "https://www.wrike.com/",
              },
              {
                tool: "Basecamp",
                url: " https://basecamp.com/",
              },
            ],
            "💰 Invoicing Tools": [
              {
                tool: "Zoho invoice",
                url: " https://www.zoho.com/invoice/",
              },
              {
                tool: " Invoice.to",
                url: "https://invoice.to/",
              },
              {
                tool: "Simple Invoices",
                url: " https://simpleinvoices.io/",
              },
              {
                tool: "AND.CO",
                url: "https://www.and.co/",
              },
            ],
            "📁 Accounting and Bookkeeping Tools": [
              {
                tool: "FreeAgent",
                url: "https://www.freeagent.com/",
              },
              {
                tool: "Xero",
                url: " https://www.xero.com/",
              },
              {
                tool: "Wave",
                url: "https://www.waveapps.com/",
              },
            ],
            "🧰 Contracting and Legal Paperwork": [
              {
                tool: "LegalZoom",
                url: "https://www.legalzoom.com/country/in",
              },
              {
                tool: "Bonsai",
                url: "https://www.hellobonsai.com/",
              },
              {
                tool: "HelloSign",
                url: "https://www.hellosign.com/",
              },
              {
                tool: "TermsFeed",
                url: " https://www.termsfeed.com/",
              },
            ],
            "⌛ Time Tracking Tools": [
              {
                tool: " Toggl",
                url: "https://toggl.com/",
              },
              {
                tool: "RescueTime",
                url: "https://www.rescuetime.com/",
              },
              {
                tool: "Time Doctor",
                url: "https://www.timedoctor.com/",
              },
            ],
            "📄 Proposal Tools": [
              {
                tool: "Proposify",
                url: "https://www.proposify.com/",
              },
              {
                tool: "Prospero",
                url: "https://www.goprospero.com/",
              },
              {
                tool: "Draftsend",
                url: "https://draftsend.com/",
              },
            ],
            "🏙 Find Workspace": [
              {
                tool: "WiFi Map",
                url: "https://www.wifimap.io/",
              },
              {
                tool: "Workfrom",
                url: " https:// workfrom.co/",
              },
            ],
            "🎨 Design Tools": [
              {
                tool: "Canva",
                url: "https://www.canva.com/",
              },
              {
                tool: "Invision",
                url: " https://www.invisionapp.com/",
              },
              {
                tool: "Behance",
                url: "https://www.behance.net/",
              },
            ],
          },
        },
      }}
    />
  );
}
