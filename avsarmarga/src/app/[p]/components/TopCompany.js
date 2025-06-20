import React, { useState } from "react";

const TopCompany = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    "Computer Engineering"
  );

  const company = {
    "Computer Engineering": [
      {
        company_name: "Google",
        company_ceo: "Sundar Pichai",
        job_roles: [
          "Software Engineer",
          "Data Scientist",
          "Product Manager",
          "AI Researcher",
        ],
        average_package: "₹99,60,000 - ₹1,49,40,000 per year",
        career_link: "https://careers.google.com",
      },
      {
        company_name: "Microsoft",
        company_ceo: "Satya Nadella",
        job_roles: [
          "Software Engineer",
          "Cloud Solutions Architect",
          "Data Analyst",
          "Cybersecurity Specialist",
        ],
        average_package: "₹91,30,000 - ₹1,32,80,000 per year",
        career_link: "https://careers.microsoft.com",
      },
      {
        company_name: "Apple",
        company_ceo: "Tim Cook",
        job_roles: [
          "iOS Developer",
          "Machine Learning Engineer",
          "Hardware Engineer",
          "UX Designer",
        ],
        average_package: "₹99,60,000 - ₹1,41,10,000 per year",
        career_link: "https://www.apple.com/careers",
      },
      {
        company_name: "Amazon",
        company_ceo: "Andy Jassy",
        job_roles: [
          "Software Development Engineer",
          "Cloud Consultant",
          "Product Manager",
          "Data Engineer",
        ],
        average_package: "₹83,00,000 - ₹1,24,50,000 per year",
        career_link: "https://www.amazon.jobs",
      },
      {
        company_name: "Meta (Facebook)",
        company_ceo: "Mark Zuckerberg",
        job_roles: [
          "Full Stack Engineer",
          "VR/AR Developer",
          "Data Scientist",
          "Software Developer",
        ],
        average_package: "₹91,30,000 - ₹1,41,10,000 per year",
        career_link: "https://www.metacareers.com",
      },
      {
        company_name: "Tesla",
        company_ceo: "Elon Musk",
        job_roles: [
          "Software Engineer",
          "Autopilot Engineer",
          "Battery Systems Developer",
          "Mechanical Engineer",
        ],
        average_package: "₹83,00,000 - ₹1,16,20,000 per year",
        career_link: "https://www.tesla.com/careers",
      },
      {
        company_name: "IBM",
        company_ceo: "Arvind Krishna",
        job_roles: [
          "Data Scientist",
          "Cloud Engineer",
          "AI Engineer",
          "Consulting Specialist",
        ],
        average_package: "₹74,70,000 - ₹1,07,90,000 per year",
        career_link: "https://www.ibm.com/employment",
      },
      {
        company_name: "Intel",
        company_ceo: "Pat Gelsinger",
        job_roles: [
          "Chip Designer",
          "Firmware Developer",
          "Software Engineer",
          "Research Scientist",
        ],
        average_package: "₹83,00,000 - ₹1,24,50,000 per year",
        career_link: "https://www.intel.com/jobs",
      },
      {
        company_name: "NVIDIA",
        company_ceo: "Jensen Huang",
        job_roles: [
          "GPU Developer",
          "AI Engineer",
          "Software Engineer",
          "Data Scientist",
        ],
        average_package: "₹99,60,000 - ₹1,32,80,000 per year",
        career_link: "https://www.nvidia.com/en-us/about/careers",
      },
      {
        company_name: "Adobe",
        company_ceo: "Shantanu Narayen",
        job_roles: [
          "Software Developer",
          "UI/UX Designer",
          "Product Manager",
          "AI Researcher",
        ],
        average_package: "₹83,00,000 - ₹1,16,20,000 per year",
        career_link:
          "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced",
      },
      {
        company_name: "Oracle",
        company_ceo: "Safra Catz",
        job_roles: [
          "Database Administrator",
          "Cloud Developer",
          "Software Engineer",
          "Technical Consultant",
        ],
        average_package: "₹74,70,000 - ₹1,16,20,000 per year",
        career_link: "https://www.oracle.com/careers",
      },
      {
        company_name: "SAP",
        company_ceo: "Christian Klein",
        job_roles: [
          "SAP Developer",
          "Solution Architect",
          "Data Analyst",
          "Cloud Engineer",
        ],
        average_package: "₹83,00,000 - ₹1,07,90,000 per year",
        career_link: "https://jobs.sap.com",
      },
      {
        company_name: "Qualcomm",
        company_ceo: "Cristiano Amon",
        job_roles: [
          "Embedded Systems Engineer",
          "Software Developer",
          "AI Specialist",
          "Hardware Engineer",
        ],
        average_package: "₹91,30,000 - ₹1,24,50,000 per year",
        career_link: "https://www.qualcomm.com/company/careers",
      },
      {
        company_name: "Cisco",
        company_ceo: "Chuck Robbins",
        job_roles: [
          "Network Engineer",
          "Cybersecurity Specialist",
          "Software Developer",
          "Cloud Engineer",
        ],
        average_package: "₹74,70,000 - ₹1,07,90,000 per year",
        career_link: "https://jobs.cisco.com",
      },
      {
        company_name: "Dell Technologies",
        company_ceo: "Michael Dell",
        job_roles: [
          "Software Developer",
          "Cloud Solutions Architect",
          "Product Manager",
          "Data Scientist",
        ],
        average_package: "₹74,70,000 - ₹99,60,000 per year",
        career_link: "https://jobs.dell.com",
      },
      {
        company_name: "Wipro",
        company_ceo: "Thierry Delaporte",
        job_roles: [
          "Software Engineer",
          "IT Consultant",
          "Cloud Developer",
          "Technical Support Specialist",
        ],
        average_package: "₹33,20,000 - ₹58,10,000 per year",
        career_link: "https://careers.wipro.com",
      },
      {
        company_name: "Infosys",
        company_ceo: "Salil Parekh",
        job_roles: [
          "Software Developer",
          "Data Analyst",
          "IT Consultant",
          "Cloud Engineer",
        ],
        average_package: "₹33,20,000 - ₹58,10,000 per year",
        career_link: "https://www.infosys.com/careers",
      },
      {
        company_name: "Tata Consultancy Services (TCS)",
        company_ceo: "K Krithivasan",
        job_roles: [
          "Software Developer",
          "IT Consultant",
          "Business Analyst",
          "Technical Support Specialist",
        ],
        average_package: "₹33,20,000 - ₹58,10,000 per year",
        career_link: "https://www.tcs.com/careers",
      },
      {
        company_name: "HCL Technologies",
        company_ceo: "C Vijayakumar",
        job_roles: [
          "Software Developer",
          "Cloud Engineer",
          "Data Analyst",
          "Technical Consultant",
        ],
        average_package: "₹41,50,000 - ₹66,40,000 per year",
        career_link: "https://www.hcltech.com/careers",
      },
      {
        company_name: "Accenture",
        company_ceo: "Julie Sweet",
        job_roles: [
          "IT Consultant",
          "Data Analyst",
          "Software Engineer",
          "Cloud Developer",
        ],
        average_package: "₹49,80,000 - ₹83,00,000 per year",
        career_link: "https://www.accenture.com/careers",
      },
    ],
    "Civil Engineering": [
      {
        company_name: "AECOM",
        company_ceo: "Troy Rudd",
        job_roles: [
          "Structural Engineer",
          "Transportation Planner",
          "Geotechnical Engineer",
          "Project Manager",
        ],
        average_package: "₹49,80,000 - ₹99,60,000 per year",
        career_link: "https://aecom.com/careers",
      },
      {
        company_name: "Bechtel",
        company_ceo: "Brendan Bechtel",
        job_roles: [
          "Construction Manager",
          "Civil Engineer",
          "Project Scheduler",
          "Cost Estimator",
        ],
        average_package: "₹58,10,000 - ₹1,07,90,000 per year",
        career_link: "https://jobs.bechtel.com",
      },
      {
        company_name: "Arup",
        company_ceo: "Alan Belfield",
        job_roles: [
          "Structural Engineer",
          "Urban Planner",
          "Civil Engineer",
          "Sustainability Consultant",
        ],
        average_package: "₹49,80,000 - ₹91,30,000 per year",
        career_link: "https://www.arup.com/careers",
      },
      {
        company_name: "Larsen & Toubro (L&T)",
        company_ceo: "S N Subrahmanyan",
        job_roles: [
          "Civil Engineer",
          "Construction Manager",
          "Site Supervisor",
          "Planning Engineer",
        ],
        average_package: "₹41,50,000 - ₹83,00,000 per year",
        career_link: "https://www.larsentoubro.com/corporate/careers",
      },
      {
        company_name: "Fluor Corporation",
        company_ceo: "David Constable",
        job_roles: [
          "Civil Engineer",
          "Project Engineer",
          "Construction Supervisor",
          "Site Engineer",
        ],
        average_package: "₹53,95,000 - ₹99,60,000 per year",
        career_link: "https://www.fluor.com/careers",
      },
      {
        company_name: "Jacobs Engineering Group",
        company_ceo: "Bob Pragada",
        job_roles: [
          "Civil Engineer",
          "Urban Planner",
          "Transportation Engineer",
          "Project Manager",
        ],
        average_package: "₹58,10,000 - ₹99,60,000 per year",
        career_link: "https://careers.jacobs.com",
      },
      {
        company_name: "Skanska",
        company_ceo: "Anders Danielsson",
        job_roles: [
          "Civil Engineer",
          "Construction Manager",
          "Site Supervisor",
          "Estimator",
        ],
        average_package: "₹49,80,000 - ₹91,30,000 per year",
        career_link: "https://www.skanska.com/careers",
      },
      {
        company_name: "WSP Global",
        company_ceo: "Alexandre L’Heureux",
        job_roles: [
          "Structural Engineer",
          "Environmental Engineer",
          "Civil Engineer",
          "Project Consultant",
        ],
        average_package: "₹53,95,000 - ₹99,60,000 per year",
        career_link: "https://www.wsp.com/en-gl/careers",
      },
      {
        company_name: "Kiewit Corporation",
        company_ceo: "Rick Lanoha",
        job_roles: [
          "Civil Engineer",
          "Construction Manager",
          "Estimator",
          "Field Engineer",
        ],
        average_package: "₹49,80,000 - ₹83,00,000 per year",
        career_link: "https://www.kiewit.com/careers",
      },
      {
        company_name: "HDR, Inc.",
        company_ceo: "Eric Keen",
        job_roles: [
          "Transportation Engineer",
          "Civil Engineer",
          "Structural Designer",
          "Environmental Planner",
        ],
        average_package: "₹53,95,000 - ₹91,30,000 per year",
        career_link: "https://hdrinc.com/careers",
      },
      {
        company_name: "Tata Projects",
        company_ceo: "Vinayak Pai",
        job_roles: [
          "Civil Engineer",
          "Site Engineer",
          "Planning Engineer",
          "Project Manager",
        ],
        average_package: "₹41,50,000 - ₹66,40,000 per year",
        career_link: "https://www.tataprojects.com/careers",
      },
      {
        company_name: "CH2M Hill (Now Jacobs)",
        company_ceo: "Bob Pragada",
        job_roles: [
          "Civil Engineer",
          "Environmental Consultant",
          "Urban Planner",
          "Project Manager",
        ],
        average_package: "₹49,80,000 - ₹91,30,000 per year",
        career_link: "https://careers.jacobs.com",
      },
      {
        company_name: "Gammon India",
        company_ceo: "Dipankar Banerjee",
        job_roles: [
          "Site Engineer",
          "Civil Engineer",
          "Project Supervisor",
          "Construction Manager",
        ],
        average_package: "₹33,20,000 - ₹58,10,000 per year",
        career_link: "https://gammonindia.com/careers",
      },
      {
        company_name: "Shapoorji Pallonji & Co.",
        company_ceo: "Kamal Bansal",
        job_roles: [
          "Civil Engineer",
          "Project Manager",
          "Site Engineer",
          "Planner",
        ],
        average_package: "₹37,35,000 - ₹66,40,000 per year",
        career_link: "https://www.shapoorjipallonji.com/careers",
      },
      {
        company_name: "Turner Construction",
        company_ceo: "Peter Davoren",
        job_roles: [
          "Civil Engineer",
          "Construction Manager",
          "Estimator",
          "Scheduler",
        ],
        average_package: "₹58,10,000 - ₹99,60,000 per year",
        career_link: "https://www.turnerconstruction.com/careers",
      },
      {
        company_name: "AFCONS Infrastructure",
        company_ceo: "Shapoor Mistry",
        job_roles: [
          "Civil Engineer",
          "Construction Manager",
          "Structural Engineer",
          "Estimator",
        ],
        average_package: "₹37,35,000 - ₹66,40,000 per year",
        career_link: "https://www.afcons.com/careers",
      },
      {
        company_name: "Hilti",
        company_ceo: "Christoph Loos",
        job_roles: [
          "Field Engineer",
          "Structural Engineer",
          "Technical Consultant",
          "Project Manager",
        ],
        average_package: "₹49,80,000 - ₹83,00,000 per year",
        career_link: "https://careers.hilti.group",
      },
      {
        company_name: "Parsons Corporation",
        company_ceo: "Carey Smith",
        job_roles: [
          "Civil Engineer",
          "Transportation Planner",
          "Structural Engineer",
          "Environmental Engineer",
        ],
        average_package: "₹53,95,000 - ₹99,60,000 per year",
        career_link: "https://parsons.com/careers",
      },
      {
        company_name: "Royal BAM Group",
        company_ceo: "Ruud Joosten",
        job_roles: [
          "Civil Engineer",
          "Construction Manager",
          "Site Engineer",
          "Estimator",
        ],
        average_package: "₹41,50,000 - ₹74,70,000 per year",
        career_link: "https://www.bam.com/careers",
      },
      {
        company_name: "Black & Veatch",
        company_ceo: "Mario Azar",
        job_roles: [
          "Civil Engineer",
          "Environmental Engineer",
          "Structural Designer",
          "Project Manager",
        ],
        average_package: "₹53,95,000 - ₹91,30,000 per year",
        career_link: "https://careers.bv.com",
      },
    ],
    "Electronics & Telecommunication Engineering": [
      {
        company_name: "Qualcomm",
        company_ceo: "Cristiano Amon",
        job_roles: [
          "RF Engineer",
          "Telecommunications Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 12000000,
        link: "https://www.qualcomm.com",
      },
      {
        company_name: "Ericsson",
        company_ceo: "Börje Ekholm",
        job_roles: [
          "Telecommunications Engineer",
          "Network Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 8000000,
        link: "https://www.ericsson.com",
      },
      {
        company_name: "Samsung Electronics",
        company_ceo: "Han Jong-hee",
        job_roles: [
          "Telecom Systems Engineer",
          "R&D Engineer",
          "Network Engineer",
        ],
        average_package_in_inr: 9000000,
        link: "https://www.samsung.com",
      },
      {
        company_name: "Intel Corporation",
        company_ceo: "Pat Gelsinger",
        job_roles: [
          "RF Engineer",
          "Telecom Systems Engineer",
          "IC Design Engineer",
        ],
        average_package_in_inr: 11000000,
        link: "https://www.intel.com",
      },
      {
        company_name: "Texas Instruments",
        company_ceo: "Haviv Ilan",
        job_roles: [
          "Telecommunications Engineer",
          "R&D Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 9500000,
        link: "https://www.ti.com",
      },
      {
        company_name: "Nokia",
        company_ceo: "Pekka Lundmark",
        job_roles: [
          "Telecom Engineer",
          "Signal Processing Engineer",
          "R&D Engineer",
        ],
        average_package_in_inr: 7500000,
        link: "https://www.nokia.com",
      },
      {
        company_name: "Cisco Systems",
        company_ceo: "Chuck Robbins",
        job_roles: [
          "Network Engineer",
          "Telecommunications Engineer",
          "Systems Engineer",
        ],
        average_package_in_inr: 9000000,
        link: "https://www.cisco.com",
      },
      {
        company_name: "Broadcom",
        company_ceo: "Hock Tan",
        job_roles: [
          "RF Engineer",
          "Telecommunication Systems Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 9500000,
        link: "https://www.broadcom.com",
      },
      {
        company_name: "Tata Communications",
        company_ceo: "Amur S Lakshminarayanan",
        job_roles: [
          "Network Engineer",
          "Telecommunications Engineer",
          "Systems Architect",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.tatacommunications.com",
      },
      {
        company_name: "Vodafone Idea",
        company_ceo: "Ravinder Takkar",
        job_roles: [
          "Telecommunications Engineer",
          "Network Operations Engineer",
          "RF Engineer",
        ],
        average_package_in_inr: 6500000,
        link: "https://www.vodafoneidea.com",
      },
      {
        company_name: "Huawei",
        company_ceo: "Ren Zhengfei",
        job_roles: [
          "Telecom Systems Engineer",
          "Network Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 9500000,
        link: "https://www.huawei.com",
      },
      {
        company_name: "ZTE Corporation",
        company_ceo: "Zhang Jianguo",
        job_roles: [
          "Telecommunications Engineer",
          "RF Engineer",
          "Network Architect",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.zte.com.cn",
      },
      {
        company_name: "Tech Mahindra",
        company_ceo: "CP Gurnani",
        job_roles: ["Telecom Engineer", "RF Engineer", "Network Engineer"],
        average_package_in_inr: 5500000,
        link: "https://www.techmahindra.com",
      },
      {
        company_name: "Wipro",
        company_ceo: "Thierry Delaporte",
        job_roles: [
          "Telecom Engineer",
          "Network Systems Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 6000000,
        link: "https://www.wipro.com",
      },
      {
        company_name: "HCL Technologies",
        company_ceo: "C Vijayakumar",
        job_roles: [
          "Network Engineer",
          "Telecommunications Engineer",
          "RF Engineer",
        ],
        average_package_in_inr: 6500000,
        link: "https://www.hcltech.com",
      },
      {
        company_name: "IBM",
        company_ceo: "Arvind Krishna",
        job_roles: [
          "Network Architect",
          "Telecom Systems Engineer",
          "Software Engineer",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.ibm.com",
      },
      {
        company_name: "Accenture",
        company_ceo: "Julie Sweet",
        job_roles: [
          "Telecommunications Engineer",
          "Network Architect",
          "Systems Engineer",
        ],
        average_package_in_inr: 7500000,
        link: "https://www.accenture.com",
      },
      {
        company_name: "Larsen & Toubro (L&T)",
        company_ceo: "S N Subrahmanyan",
        job_roles: [
          "Telecom Engineer",
          "Network Engineer",
          "Signal Processing Engineer",
        ],
        average_package_in_inr: 6500000,
        link: "https://www.larsentoubro.com",
      },
      {
        company_name: "Mphasis",
        company_ceo: "Nitin Rakesh",
        job_roles: ["Telecom Engineer", "Network Architect", "RF Engineer"],
        average_package_in_inr: 6000000,
        link: "https://www.mphasis.com",
      },
      {
        company_name: "Mindtree",
        company_ceo: "Debashis Chatterjee",
        job_roles: [
          "Telecommunications Engineer",
          "RF Engineer",
          "Network Systems Engineer",
        ],
        average_package_in_inr: 5500000,
        link: "https://www.mindtree.com",
      },
      {
        company_name: "Infosys",
        company_ceo: "Salil Parekh",
        job_roles: [
          "Telecommunications Engineer",
          "Network Engineer",
          "Systems Engineer",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.infosys.com",
      },
    ],
    "Mechanical Engineering": [
      {
        company_name: "Indian Oil Corporation Limited (IOCL)",
        company_ceo: "Shrikant Madhav Vaidya",
        job_roles: [
          "Pipeline Engineer",
          "Refinery Operations Engineer",
          "Equipment Maintenance",
        ],
        average_package_in_inr: 2000000,
        link: "https://www.iocl.com",
      },
      {
        company_name: "Bosch",
        company_ceo: "Stefan Hartung",
        job_roles: [
          "R&D Engineer",
          "Automation Engineer",
          "Production Engineer",
        ],
        average_package_in_inr: 4400000,
        link: "https://www.bosch.com",
      },
      {
        company_name: "Godrej Group",
        company_ceo: "Nadir Godrej",
        job_roles: [
          "Design Engineer",
          "Production Engineer",
          "Manufacturing Analyst",
        ],
        average_package_in_inr: 5000000,
        link: "https://www.godrej.com",
      },
      {
        company_name: "Oil and Natural Gas Corporation (ONGC)",
        company_ceo: "Arun Kumar Singh",
        job_roles: [
          "Drilling Engineer",
          "Equipment Optimization Engineer",
          "Production Engineer",
        ],
        average_package_in_inr: 6580000,
        link: "https://www.ongcindia.com",
      },
      {
        company_name: "Kirloskar",
        company_ceo: "Atul Kirloskar",
        job_roles: [
          "Production Engineer",
          "Maintenance Engineer",
          "Equipment Specialist",
        ],
        average_package_in_inr: 4800000,
        link: "https://www.kirloskar.com",
      },
      {
        company_name: "Larsen & Toubro (L&T)",
        company_ceo: "S N Subrahmanyan",
        job_roles: [
          "Design Engineer",
          "Construction Equipment Specialist",
          "Mechanical Analyst",
        ],
        average_package_in_inr: 3000000,
        link: "https://www.larsentoubro.com",
      },
      {
        company_name: "NHPC Limited",
        company_ceo: "Yamuna Kumar Chaubey",
        job_roles: [
          "Hydropower Plant Engineer",
          "Operations Specialist",
          "System Maintenance Engineer",
        ],
        average_package_in_inr: 4960000,
        link: "https://www.nhpcindia.com",
      },
      {
        company_name: "Tata Motors",
        company_ceo: "Günter Butschek",
        job_roles: [
          "Vehicle Design Engineer",
          "Production Manager",
          "Assembly Line Supervisor",
        ],
        average_package_in_inr: 2400000,
        link: "https://www.tatamotors.com",
      },
      {
        company_name: "General Electric (GE)",
        company_ceo: "Larry Culp",
        job_roles: [
          "Turbine Design Engineer",
          "Maintenance Specialist",
          "R&D Engineer",
        ],
        average_package_in_inr: 4500000,
        link: "https://www.ge.com",
      },
      {
        company_name: "Mahindra & Mahindra",
        company_ceo: "Anish Shah",
        job_roles: [
          "Design Engineer",
          "Vehicle System Analyst",
          "Production Supervisor",
        ],
        average_package_in_inr: 3000000,
        link: "https://www.mahindra.com",
      },
      {
        company_name: "Ashok Leyland",
        company_ceo: "Shenu Agarwal",
        job_roles: [
          "Vehicle Manufacturing Engineer",
          "System Analyst",
          "Quality Control Engineer",
        ],
        average_package_in_inr: 2200000,
        link: "https://www.ashokleyland.com",
      },
      {
        company_name: "Hindustan Aeronautics Limited (HAL)",
        company_ceo: "C B Ananthakrishnan",
        job_roles: [
          "Aircraft Design Engineer",
          "Systems Engineer",
          "Assembly Supervisor",
        ],
        average_package_in_inr: 4000000,
        link: "https://hal-india.co.in",
      },
      {
        company_name: "Thermax",
        company_ceo: "Ashish Bhandari",
        job_roles: [
          "Boiler Specialist",
          "Thermal Engineer",
          "Mechanical Systems Analyst",
        ],
        average_package_in_inr: 3800000,
        link: "https://www.thermaxglobal.com",
      },
      {
        company_name: "Bharat Heavy Electricals Limited (BHEL)",
        company_ceo: "Nalin Singhal",
        job_roles: [
          "Power Plant Engineer",
          "Mechanical Designer",
          "Equipment Specialist",
        ],
        average_package_in_inr: 3600000,
        link: "https://www.bhel.com",
      },
      {
        company_name: "Hero MotoCorp",
        company_ceo: "Pawan Munjal",
        job_roles: [
          "Product Development Engineer",
          "R&D Analyst",
          "Production Engineer",
        ],
        average_package_in_inr: 3200000,
        link: "https://www.heromotocorp.com",
      },
      {
        company_name: "Jindal Steel and Power",
        company_ceo: "V R Sharma",
        job_roles: [
          "Structural Engineer",
          "Equipment Specialist",
          "Production Manager",
        ],
        average_package_in_inr: 4000000,
        link: "https://www.jindalsteelpower.com",
      },
      {
        company_name: "Cummins India",
        company_ceo: "Ashwath Ram",
        job_roles: [
          "Engine Design Engineer",
          "Maintenance Specialist",
          "Assembly Supervisor",
        ],
        average_package_in_inr: 3000000,
        link: "https://www.cummins.com",
      },
      {
        company_name: "Siemens",
        company_ceo: "Roland Busch",
        job_roles: [
          "Automation Engineer",
          "Equipment Maintenance",
          "Mechanical Designer",
        ],
        average_package_in_inr: 4400000,
        link: "https://www.siemens.com",
      },
      {
        company_name: "BOSCH Rexroth",
        company_ceo: "Stefan Hartung",
        job_roles: [
          "Fluid Systems Engineer",
          "Production Engineer",
          "Automation Designer",
        ],
        average_package_in_inr: 5000000,
        link: "https://www.boschrexroth.com",
      },
      {
        company_name: "Reliance Industries Limited",
        company_ceo: "Mukesh Ambani",
        job_roles: [
          "Production Supervisor",
          "Equipment Maintenance Engineer",
          "R&D Specialist",
        ],
        average_package_in_inr: 2800000,
        link: "https://www.ril.com",
      },
    ],
    "Electrical Engineering": [
      {
        company_name: "Schneider Electric",
        company_ceo: "Jean-Pascal Tricoire",
        job_roles: [
          "Electrical Engineer",
          "Design Engineer",
          "Automation Engineer",
        ],
        average_package_in_inr: 6000000,
        link: "https://www.se.com",
      },
      {
        company_name: "Siemens",
        company_ceo: "Roland Busch",
        job_roles: [
          "Electrical Engineer",
          "Control Systems Engineer",
          "Design Engineer",
        ],
        average_package_in_inr: 5500000,
        link: "https://www.siemens.com",
      },
      {
        company_name: "General Electric (GE)",
        company_ceo: "Larry Culp",
        job_roles: [
          "Electrical Design Engineer",
          "Control Systems Engineer",
          "Project Engineer",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.ge.com",
      },
      {
        company_name: "Bharat Heavy Electricals Limited (BHEL)",
        company_ceo: "Nalin Singhal",
        job_roles: [
          "Power Systems Engineer",
          "Control & Instrumentation Engineer",
          "Electrical Engineer",
        ],
        average_package_in_inr: 4500000,
        link: "https://www.bhel.com",
      },
      {
        company_name: "ABB India",
        company_ceo: "Sanjiv Paul",
        job_roles: [
          "Electrical Engineer",
          "Automation Engineer",
          "Power Systems Engineer",
        ],
        average_package_in_inr: 6500000,
        link: "https://new.abb.com/in",
      },
      {
        company_name: "Tata Power",
        company_ceo: "Praveer Sinha",
        job_roles: [
          "Electrical Design Engineer",
          "Power Distribution Engineer",
          "Project Engineer",
        ],
        average_package_in_inr: 5000000,
        link: "https://www.tatapower.com",
      },
      {
        company_name: "Reliance Industries Limited",
        company_ceo: "Mukesh Ambani",
        job_roles: [
          "Electrical Engineer",
          "Maintenance Engineer",
          "Instrumentation Engineer",
        ],
        average_package_in_inr: 8000000,
        link: "https://www.ril.com",
      },
      {
        company_name: "Larsen & Toubro (L&T)",
        company_ceo: "S N Subrahmanyan",
        job_roles: [
          "Electrical Engineer",
          "Construction Engineer",
          "Project Design Engineer",
        ],
        average_package_in_inr: 6000000,
        link: "https://www.larsentoubro.com",
      },
      {
        company_name: "Cognizant Technology Solutions",
        company_ceo: "Raghavan Seetharaman",
        job_roles: [
          "Electrical Design Engineer",
          "Systems Engineer",
          "Automation Engineer",
        ],
        average_package_in_inr: 6000000,
        link: "https://www.cognizant.com",
      },
      {
        company_name: "Exide Industries",
        company_ceo: "Manish Bhatnagar",
        job_roles: [
          "Electrical Engineer",
          "Battery Systems Engineer",
          "Energy Storage Engineer",
        ],
        average_package_in_inr: 4000000,
        link: "https://www.exideindustries.com",
      },
      {
        company_name: "Honeywell",
        company_ceo: "Darius Adamczyk",
        job_roles: [
          "Electrical Design Engineer",
          "Instrumentation Engineer",
          "Systems Engineer",
        ],
        average_package_in_inr: 5500000,
        link: "https://www.honeywell.com",
      },
      {
        company_name: "Bosch",
        company_ceo: "Stefan Hartung",
        job_roles: [
          "Control Systems Engineer",
          "Electrical Engineer",
          "Automation Specialist",
        ],
        average_package_in_inr: 6500000,
        link: "https://www.bosch.com",
      },
      {
        company_name: "NTPC Limited",
        company_ceo: "P.K. Sinha",
        job_roles: [
          "Electrical Engineer",
          "Power Systems Engineer",
          "Maintenance Engineer",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.ntpc.co.in",
      },
      {
        company_name: "Indian Oil Corporation Limited (IOCL)",
        company_ceo: "Shrikant Madhav Vaidya",
        job_roles: [
          "Electrical Engineer",
          "Automation Engineer",
          "Control Systems Engineer",
        ],
        average_package_in_inr: 6500000,
        link: "https://www.iocl.com",
      },
      {
        company_name: "Siemens Gamesa",
        company_ceo: "Andreas Nauen",
        job_roles: [
          "Wind Power Systems Engineer",
          "Electrical Design Engineer",
          "Project Manager",
        ],
        average_package_in_inr: 7000000,
        link: "https://www.siemensgamesa.com",
      },
      {
        company_name: "Schneider Electric",
        company_ceo: "Jean-Pascal Tricoire",
        job_roles: [
          "Electrical Engineer",
          "Energy Management Specialist",
          "Automation Engineer",
        ],
        average_package_in_inr: 7500000,
        link: "https://www.se.com/in/en/",
      },
      {
        company_name: "Tata Consultancy Services (TCS)",
        company_ceo: "Rajesh Gopinathan",
        job_roles: [
          "Embedded Systems Engineer",
          "Electrical Design Engineer",
          "Control Systems Engineer",
        ],
        average_package_in_inr: 5500000,
        link: "https://www.tcs.com",
      },
      {
        company_name: "Bajaj Auto",
        company_ceo: "Rajiv Bajaj",
        job_roles: [
          "Electrical Engineer",
          "R&D Engineer",
          "Power Systems Engineer",
        ],
        average_package_in_inr: 4500000,
        link: "https://www.bajajauto.com",
      },
      {
        company_name: "Wipro",
        company_ceo: "Thierry Delaporte",
        job_roles: [
          "Electrical Engineer",
          "Automation Engineer",
          "System Integration Engineer",
        ],
        average_package_in_inr: 5000000,
        link: "https://www.wipro.com",
      },
      {
        company_name: "Apar Industries",
        company_ceo: "Vijay Agarwal",
        job_roles: [
          "Electrical Engineer",
          "R&D Engineer",
          "Electrical Project Engineer",
        ],
        average_package_in_inr: 4200000,
        link: "https://www.apar.com",
      },
      {
        company_name: "ABB India",
        company_ceo: "Sanjiv Paul",
        job_roles: [
          "Electrical Engineer",
          "Automation Engineer",
          "Project Engineer",
        ],
        average_package_in_inr: 7000000,
        link: "https://new.abb.com/in",
      },
    ],
  };

  const departments = Object.keys(company);

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Top Companies by Engineering Department
        </h1>

        {/* Department Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300
                ${
                  selectedDepartment === dept
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }
              `}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {company[selectedDepartment].map((comp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold text-blue-700 mb-2">
                {comp.company_name}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">CEO:</span> {comp.company_ceo}
              </p>

              <div className="mb-4">
                <h3 className="font-semibold text-blue-600 mb-1">Job Roles:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {comp.job_roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="text-sm">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-green-600 font-semibold mb-2">
                Avg. Package:{" "}
                {comp.average_package || comp.average_package_in_inr}
              </p>

              <a
                href={comp.career_link || comp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                View Careers
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
