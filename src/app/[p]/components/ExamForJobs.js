import React, { useState } from "react";
import { Search, BookOpen, Filter } from "lucide-react";

const CompetitiveExamsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);

  const competitiveExams = [
    {
      name: "GATE",
      fullForm: "Graduate Aptitude Test in Engineering",
      description:
        "The GATE exam allows entry for master's and Ph.D. programs in engineering across India and some foreign universities. The GATE scorecard is also used by multiple PSUs (e.g., IOCL, GAIL, ONGC, NTPC) to recruit engineers.",
      resources: [
        "Official GATE website: https://gate.iitb.ac.in/",
        "GATE preparation books by Made Easy, GKP, and GATE Academy",
        "Online platforms: Unacademy, GradeUp, Byju's",
        "Previous Year Papers",
      ],
      tips: [
        "Start preparing early and focus on understanding the concepts.",
        "Practice solving previous year papers to get familiar with the exam pattern.",
        "Refer to standard textbooks for each subject and follow a structured study plan.",
        "Take online mock tests to assess your progress.",
      ],
    },
    {
      name: "SSC CGL",
      fullForm:
        "Staff Selection Commission Combined Graduate Level Examination",
      description:
        "SSC CGL is a national-level exam conducted by the Staff Selection Commission to recruit candidates for Group B and Group C posts in various government departments.",
      resources: [
        "Official SSC website: https://ssc.nic.in/",
        "Books: Lucent's General Knowledge, Kiran's SSC Mathematics",
        "Online platforms: Testbook, Unacademy, GradeUp",
        "Previous Year Papers and Mock Tests",
      ],
      tips: [
        "Focus on topics like Quantitative Aptitude, General Awareness, Reasoning, and English.",
        "Practice mock tests and analyze your performance regularly.",
        "Stay updated with current affairs and revise regularly.",
      ],
    },
    {
      name: "CAT",
      fullForm: "Common Admission Test",
      description:
        "CAT is conducted annually for admission into prestigious Indian Institutes of Management (IIMs) and other top B-Schools in India for MBA and equivalent programs.",
      resources: [
        "Official CAT website: https://iimcat.ac.in/",
        "Books: Arun Sharma for Quantitative Aptitude, Verbal Ability, and Logical Reasoning",
        "Online platforms: Career Launcher, TIME, Unacademy",
        "Mock Tests and Previous Year Papers",
      ],
      tips: [
        "Develop strong reading habits to improve Verbal Ability.",
        "Focus on speed and accuracy in Quantitative Aptitude and Logical Reasoning.",
        "Take as many mock tests as possible and analyze performance.",
      ],
    },
    {
      name: "XAT",
      fullForm: "Xavier Aptitude Test",
      description:
        "XAT is conducted by XLRI for admission into MBA and equivalent programs at XLRI and other B-Schools across India.",
      resources: [
        "Official XAT website: https://xatonline.in/",
        "Books: Arun Sharma for Logical Reasoning, Verbal Ability, and Quantitative Aptitude",
        "Online platforms: Career Launcher, TIME, BYJU's",
        "Mock Tests and Previous Year Papers",
      ],
      tips: [
        "Prepare for all sections, including Decision Making, which is unique to XAT.",
        "Work on essay writing skills as XAT includes a written ability test.",
        "Practice mock tests regularly to improve speed and accuracy.",
      ],
    },
    {
      name: "UPSC ESE",
      fullForm: "Engineering Services Examination",
      description:
        "ESE is conducted annually by UPSC to recruit engineers in 4 domains: CE, ME, EE, and ECE. These candidates, after final selection, are posted in various ministries and departments of GOI as Class-1 officers.",
      resources: [
        "Official UPSC ESE website: https://www.upsc.gov.in/",
        "Books by GKP, Made Easy, and APME",
        "Online platforms: Vision IAS, Unacademy, BYJU's",
        "Previous Year Papers and Mock Tests",
      ],
      tips: [
        "Start with the syllabus and cover each topic thoroughly.",
        "Focus on technical subjects, but don't neglect General Studies.",
        "Revise consistently and practice previous years' questions.",
        "Follow a time-bound preparation strategy and take online mock tests regularly.",
      ],
    },
    {
      name: "Indian Army Technical Entry",
      fullForm: "Indian Army Technical Officer Entry",
      description:
        "This entry allows young aspirants to join the Indian Army through technical streams after completing their 10+2 or graduation.",
      resources: [
        "Official Indian Army website: https://joinindianarmy.nic.in/",
        "Books: Arihant Pathfinder, RS Aggarwal",
        "Online platforms: Oliveboard, GradeUp",
      ],
      tips: [
        "Focus on clearing the written examination followed by the SSB interview.",
        "Understand the physical requirements and prepare accordingly.",
        "Stay updated with the notifications on the official website.",
      ],
    },
    {
      name: "UES (University Entry Scheme) - Indian Navy",
      fullForm: "University Entry Scheme - Indian Navy",
      description:
        "UES is for engineering students to join the Indian Navy as officers while pursuing their degrees.",
      resources: [
        "Official Indian Navy website: https://www.joinindiannavy.gov.in/",
        "Study materials for Navy-specific technical subjects",
        "Mock interviews and preparation for SSB.",
      ],
      tips: [
        "Focus on academic excellence during your engineering studies.",
        "Prepare for the SSB interview by practicing mock sessions and group discussions.",
      ],
    },
    {
      name: "TGC (Technical Graduate Course) - Indian Army",
      fullForm: "Technical Graduate Course - Indian Army",
      description:
        "TGC is a direct entry scheme for engineering graduates to join the Indian Army as officers.",
      resources: [
        "Official Indian Army website: https://joinindianarmy.nic.in/",
        "Study materials for engineering-specific technical subjects",
        "SSB preparation books",
      ],
      tips: [
        "Focus on preparing for the SSB interview process.",
        "Maintain physical fitness for the selection process.",
      ],
      name: "Indian Navy Technical Entry",
      fullForm: "Indian Navy Technical Officer Entry",
      description:
        "This entry allows engineering graduates to join the Indian Navy as technical officers. Selection is based on SSB interviews and technical knowledge.",
      resources: [
        "Official Indian Navy website: https://www.joinindiannavy.gov.in/",
        "Books by Arihant, R Gupta, and Kiran Publications",
        "Online platforms: Unacademy, BYJU's",
        "Previous Year Papers",
      ],
      tips: [
        "Brush up on technical subjects related to engineering and marine systems.",
        "Focus on developing leadership skills for the interview process.",
        "Ensure top physical fitness levels for selection.",
      ],
    },
    {
      name: "UPSC IRMS",
      fullForm: "Indian Railway Management Service",
      description:
        "UPSC will conduct a separate exam for the Indian Railway Management Service (IRMS) from 2023. These candidates, after final selection, are posted in Indian Railways as Class-1 officers.",
      resources: [
        "Official UPSC website: https://www.upsc.gov.in/",
        "Books for IRMS preparation: by GKP, Arihant, and R Gupta",
        "Online platforms: Vision IAS, Unacademy",
        "Previous Year Papers",
      ],
      tips: [
        "Understand the pattern of the new IRMS exam and focus on management-related subjects.",
        "Revise current affairs, as they are crucial for the General Studies part.",
        "Practice previous year’s papers and take mock exams regularly.",
      ],
    },
    {
      name: "UPSC CSE",
      fullForm: "Civil Services Examination",
      description:
        "UPSC conducts the Civil Services Exam for IAS, IFS, IPS, IRS. These candidates, after final selection, are posted in various departments of GOI as Class-1 officers.",
      resources: [
        "Official UPSC CSE website: https://www.upsc.gov.in/",
        "Books by M. Laxmikanth, R. Gupta, and NCERT",
        "Online platforms: Vajiram & Ravi, Unacademy, BYJU's",
        "Previous Year Papers and Current Affairs magazines",
      ],
      tips: [
        "Start with the NCERT books to build a strong foundation in General Studies.",
        "For the Mains, practice writing answers to improve speed and articulation.",
        "Make a regular habit of reading newspapers for current affairs.",
        "Take regular mock exams to assess your preparation.",
      ],
    },
    {
      name: "BARC Exam",
      fullForm: "Bhabha Atomic Research Centre",
      description:
        "BARC conducts an exam every year for filling up the posts of Trainee Scientific Officers (OCES, DGFS). These candidates, after final selection, are posted in BARC as Class-1 Scientific Officers.",
      resources: [
        "Official BARC website: https://www.barc.gov.in/",
        "Books by Made Easy, GKP, and BARC Academy",
        "Online platforms: Unacademy, Testbook",
        "Previous Year Papers and Mock Tests",
      ],
      tips: [
        "Focus on core engineering subjects and solve as many practice papers as possible.",
        "Brush up on technical topics like Nuclear Science, Atomic Physics, and Thermodynamics.",
        "Revise thoroughly and take online mock tests to simulate real exam conditions.",
      ],
    },
    {
      name: "ISRO Exam",
      fullForm: "Indian Space Research Organization",
      description:
        "ISRO conducts an exam every year for filling up the posts of Trainee Scientific Officers. These candidates, after final selection, are posted in ISRO as Class-1 Scientific Officers.",
      resources: [
        "Official ISRO website: https://www.isro.gov.in/",
        "Books by GATE Academy, Made Easy, and ISRO Prep",
        "Online platforms: Unacademy, GradeUp",
        "Previous Year Papers",
      ],
      tips: [
        "Focus on technical subjects like Aerospace, Electronics, and Mechanical Engineering.",
        "Understand ISRO's work culture and the nature of the work environment.",
        "Practice problem-solving with previous year’s papers and mock exams.",
      ],
    },
    {
      name: "DRDO Exam",
      fullForm: "Defence Research and Development Organization",
      description:
        "DRDO conducts an exam every year for filling up the posts of Trainee Scientific Officers. These candidates, after final selection, are posted in DRDO as Class-1 Scientific Officers.",
      resources: [
        "Official DRDO website: https://www.drdo.gov.in/",
        "Books by Made Easy, GKP, and DRDO Academy",
        "Online platforms: Unacademy, BYJU’s",
        "Previous Year Papers and Mock Tests",
      ],
      tips: [
        "Revise core engineering subjects and focus on R&D-related topics.",
        "Solve previous year papers to understand the exam pattern and types of questions.",
        "Practice time management during mock exams.",
      ],
    },
    {
      name: "CDS",
      fullForm: "Combined Defence Services",
      description:
        "CDS allows entry into the Army, Navy, Air Force, and Marine branches for both men and women.",
      resources: [
        "Official CDS website: https://www.upsc.gov.in/",
        "Books for CDS preparation by Arihant, GKP, and R Gupta",
        "Online platforms: Unacademy, BYJU’s, Testbook",
        "Previous Year Papers",
      ],
      tips: [
        "Focus on General Knowledge, English, and current affairs.",
        "Practice previous years’ questions to get an idea of the pattern.",
        "Work on improving your physical fitness for the SSB interview.",
      ],
    },
    {
      name: "AFCAT",
      fullForm: "Air Force Common Admission Test",
      description:
        "AFCAT is a recruitment exam for the Indian Air Force, open to both men and women.",
      resources: [
        "Official AFCAT website: https://careerindianairforce.cdac.in/",
        "Books by Arihant, GKP, and PathFinder",
        "Online platforms: Unacademy, BYJU’s, Testbook",
        "Previous Year Papers and Mock Tests",
      ],
      tips: [
        "Focus on improving your reasoning, quantitative aptitude, and general awareness.",
        "Practice solving previous year papers and mock tests.",
        "Stay updated on current affairs, especially related to defense and air force.",
      ],
    },
    {
      name: "SSC Tech",
      fullForm: "Short Service Commission Technical",
      description:
        "Direct SSB (interview) entry based on B.Tech percentage. Open for both men and women.",
      resources: [
        "Official SSC Tech website: https://joinindianarmy.nic.in/",
        "Books for SSC Tech preparation by Arihant, GKP",
        "Online platforms: Unacademy, BYJU’s",
        "Previous Year Papers",
      ],
      tips: [
        "Focus on your engineering subjects and technical knowledge.",
        "Prepare for the SSB interview through mock interviews and physical fitness training.",
        "Stay confident during the interview and be clear on your career aspirations.",
      ],
    },
    {
      name: "Junior Engineer Exams",
      description:
        "RRB JE (Railways) and SSC JE (various departments) recruit Junior Engineers for technical roles.",
      resources: [
        "Official RRB JE website: https://www.rrbcdg.gov.in/",
        "Books by Made Easy, Arihant",
        "Online platforms: Unacademy, Testbook",
        "Previous Year Papers",
      ],
      tips: [
        "Focus on core engineering subjects and general studies.",
        "Take practice tests and mock exams to improve speed and accuracy.",
        "Revise thoroughly and practice problem-solving techniques.",
      ],
    },
    {
      name: "PSU Exams",
      description:
        "Apart from GATE, PSUs like Vizag Steel and CIL conduct separate exams for recruitment into technical and managerial positions.",
      resources: [
        "Official PSU Exam websites (Vizag Steel, CIL)",
        "Books by Made Easy, GKP",
        "Online platforms: Testbook, GradeUp",
        "Previous Year Papers",
      ],
      tips: [
        "Prepare using GATE syllabus as a base for PSU exams.",
        "Practice technical subjects and quantitative aptitude regularly.",
        "Take online mock exams to simulate the actual exam environment.",
      ],
    },
    {
      name: "Bank PO",
      fullForm: "Probationary Officer",
      description:
        "Banking exams like IBPS PO and SBI PO recruit candidates for managerial roles in banks.",
      resources: [
        "Official IBPS PO website: https://www.ibps.in/",
        "Books for Bank PO by Arihant, GKP, and R Gupta",
        "Online platforms: Unacademy, Testbook",
        "Previous Year Papers and Mock Tests",
      ],
      tips: [
        "Focus on quantitative aptitude, reasoning, and English language skills.",
        "Practice mock tests regularly to improve your accuracy and speed.",
        "Stay updated on current affairs related to banking and finance.",
      ],
    },
    {
      name: "State Engineering Services",
      description:
        "State-level exams recruit Grade A and B officers in various state engineering departments.",
      resources: [
        "Official state engineering service websites",
        "Books by Made Easy, GKP, and Arihant",
        "Online platforms: Unacademy, GradeUp",
        "Previous Year Papers",
      ],
      tips: [
        "Revise state-specific laws and general knowledge apart from technical subjects.",
        "Solve previous years' papers to understand the state exam pattern.",
        "Work on improving your speed and time management.",
      ],
    },
  ];

  const filteredExams = competitiveExams.filter((exam) =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Competitive Exams Guide
          </h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Your comprehensive resource for competitive exam preparation
          </p>
        </header>

        {/* Search and Filter Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search exams..."
              className="w-full p-3 pl-10 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
          </div>
        </div>

        {/* Exam List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedExam(exam)}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-blue-800">
                    {exam.name}
                  </h2>
                  <BookOpen className="text-blue-500" />
                </div>
                <p className="text-blue-600 mb-4 line-clamp-3">
                  {exam.description}
                </p>
                <div className="flex items-center text-blue-700">
                  <Filter className="mr-2" size={16} />
                  <span className="text-sm">Click to view details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Exam Details */}
        {selectedExam && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 bg-blue-800 text-white rounded-t-lg">
                <h2 className="text-2xl font-bold">{selectedExam.name}</h2>
                <p className="text-blue-200">{selectedExam.fullForm}</p>
              </div>
              <div className="p-6">
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Description
                  </h3>
                  <p className="text-blue-700">{selectedExam.description}</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Resources
                  </h3>
                  <ul className="list-disc list-inside text-blue-700">
                    {selectedExam.resources.map((resource, index) => (
                      <li key={index} className="mb-2">
                        {resource}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Preparation Tips
                  </h3>
                  <ul className="list-disc list-inside text-blue-700">
                    {selectedExam.tips.map((tip, index) => (
                      <li key={index} className="mb-2">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="p-4 bg-blue-50 text-right">
                <button
                  onClick={() => setSelectedExam(null)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitiveExamsDashboard;
