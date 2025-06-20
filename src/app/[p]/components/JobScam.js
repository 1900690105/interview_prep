import React, { useState } from "react";
import {
  Search,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const JobScam = () => {
  const [expandedScam, setExpandedScam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const scan = {
    job_scams: [
      {
        type: "Fake Job Listings on Trusted Platforms",
        description:
          "Scammers create realistic job postings on reputed sites to gather sensitive information or extract payments.",
        examples: [
          "A LinkedIn job listing redirects you to a phishing site.",
          "Jobs listed on Indeed ask for application fees through unverified channels.",
        ],
        red_flags: [
          "Vague descriptions or generic requirements",
          "Redirection to external sites not officially linked to the company",
        ],
        prevention_tips: [
          "Cross-check job details on the official company website",
          "Avoid sharing personal details without verifying authenticity",
        ],
        victim_actions: [
          "Report the scam to the job platform",
          "File a complaint with local authorities or cybercrime units",
        ],
        resources: [
          {
            organization: "Federal Trade Commission (FTC)",
            website: "https://www.ftc.gov",
            contact: "1-877-FTC-HELP",
          },
          {
            organization: "Action Fraud UK",
            website: "https://www.actionfraud.police.uk",
            contact: "0300 123 2040",
          },
        ],
      },
      {
        type: "Visa and Work Permit Scams",
        description:
          "Fraudsters promise overseas job placements but demand fees for fake visas and work permits.",
        examples: [
          "A recruiter guarantees a high-paying overseas job after paying for visa processing.",
          "Fake emails claim to represent immigration services requesting fees.",
        ],
        red_flags: [
          "Requests for money to expedite visa processing",
          "No official government documentation or process transparency",
        ],
        prevention_tips: [
          "Verify visa requirements on official immigration websites",
          "Avoid dealing with unverified agents",
        ],
        victim_actions: [
          "Contact the embassy of the respective country",
          "Report the incident to local anti-fraud agencies",
        ],
        resources: [
          {
            organization: "U.S. Department of State - Visa Scams",
            website: "https://travel.state.gov",
            contact: "1-888-407-4747",
          },
          {
            organization: "Canadian Anti-Fraud Centre",
            website: "https://www.antifraudcentre-centreantifraude.ca",
            contact: "1-888-495-8501",
          },
        ],
      },
      {
        type: "Internship or Graduate Role Scams",
        description:
          "Scammers target students and recent graduates with false internship offers requiring fees or personal data.",
        examples: [
          "An internship program asks for payment for guaranteed placement.",
          "A recruiter requests personal data for non-existent graduate roles.",
        ],
        red_flags: [
          "Upfront payment requests for training or certification",
          "No clear information about the internship provider",
        ],
        prevention_tips: [
          "Use university career services to verify opportunities",
          "Contact alumni or current employees to confirm program authenticity",
        ],
        victim_actions: [
          "Inform your university’s career services",
          "Report fraudulent postings to job boards",
        ],
        resources: [
          {
            organization:
              "National Association of Colleges and Employers (NACE)",
            website: "https://www.naceweb.org",
            contact: "contact@naceweb.org",
          },
        ],
      },
      {
        type: "Cryptocurrency or Investment Scams",
        description:
          "Scammers lure victims with fake job offers related to cryptocurrency or investment management.",
        examples: [
          "A job promises high commissions for managing cryptocurrency accounts.",
          "Fake employers ask for Bitcoin payments as part of onboarding.",
        ],
        red_flags: [
          "Focus on cryptocurrency transactions without legitimate credentials",
          "Requests to transfer or invest funds on behalf of the employer",
        ],
        prevention_tips: [
          "Research the legitimacy of the company’s operations",
          "Avoid any job requiring personal financial investments upfront",
        ],
        victim_actions: [
          "File a complaint with local cybercrime authorities",
          "Warn others through online reviews or community forums",
        ],
        resources: [
          {
            organization: "Blockchain Council",
            website: "https://www.blockchain-council.org",
            contact: "info@blockchain-council.org",
          },
        ],
      },
      {
        type: "Training Fee Scams",
        description:
          "Scammers ask for payment for mandatory training sessions that are not part of a legitimate job.",
        examples: [
          "A 'recruiter' demands a training fee to process job confirmation.",
          "A job ad requires candidates to pay for an online training course as a precondition for employment.",
        ],
        red_flags: [
          "Training fees required before starting the job",
          "No official contract or proof of employment offered",
        ],
        prevention_tips: [
          "Research the company and its training policies",
          "Ask for detailed documentation or contracts before payment",
        ],
        victim_actions: [
          "Contact consumer protection agencies to report the fraud.",
          "File a complaint with the local police or cybercrime department.",
        ],
        resources: [
          {
            organization: "Federal Trade Commission (FTC)",
            website: "https://www.ftc.gov",
            contact: "1-877-FTC-HELP",
          },
          {
            organization: "Better Business Bureau (BBB)",
            website: "https://www.bbb.org",
            contact: "complaints@bbb.org",
          },
        ],
      },
      {
        type: "Data Harvesting Scams",
        description:
          "Scammers use fake job applications to collect personal data for identity theft.",
        examples: [
          "A fake job application form asks for Social Security or Aadhaar details upfront.",
          "An employer insists on a scanned copy of a passport for verification without reason.",
        ],
        red_flags: [
          "Applications asking for sensitive data like Social Security numbers immediately",
          "No clear company address or contact details",
        ],
        prevention_tips: [
          "Provide only essential information during initial applications",
          "Verify the job listing on the company’s official website",
        ],
        victim_actions: [
          "Freeze your credit report to prevent identity theft.",
          "Report the scam to identity theft organizations or local authorities.",
        ],
        resources: [
          {
            organization: "Identity Theft Resource Center",
            website: "https://www.idtheftcenter.org",
            contact: "1-888-400-5530",
          },
          {
            organization: "Action Fraud (UK)",
            website: "https://www.actionfraud.police.uk",
            contact: "0300 123 2040",
          },
        ],
      },
      {
        type: "Freelance Job Scams",
        description:
          "Victims are offered freelance work with promises of high pay but are asked for upfront investments.",
        examples: [
          "A job asks for payment for specialized software before assigning work.",
          "Freelancers complete tasks only to discover the client disappears without paying.",
        ],
        red_flags: [
          "Jobs requiring initial investments for software, courses, or tools",
          "Requests for free work as part of an evaluation process",
        ],
        prevention_tips: [
          "Avoid freelance jobs requiring upfront payments",
          "Request partial payment before completing assignments",
        ],
        victim_actions: [
          "Report the client to the freelancing platform for fraud.",
          "Warn others through online reviews or forums.",
        ],
        resources: [
          {
            organization: "Freelancers Union",
            website: "https://www.freelancersunion.org",
            contact: "support@freelancersunion.org",
          },
        ],
      },
      {
        type: "Fake Internship Scams",
        description:
          "Scammers target students with fake internships to exploit free labor or collect personal details.",
        examples: [
          "An internship program asks for an application fee but never schedules any interviews.",
          "The 'company' demands unpaid work with no formal agreement.",
        ],
        red_flags: [
          "Internship offers without interviews or formal documentation",
          "Unverified company or recruiter information",
        ],
        prevention_tips: [
          "Verify internships through college career services or trusted networks",
          "Check for an official agreement or offer letter",
        ],
        victim_actions: [
          "Inform your college career services about the scam.",
          "File a complaint with fraud prevention organizations.",
        ],
        resources: [
          {
            organization:
              "National Association of Colleges and Employers (NACE)",
            website: "https://www.naceweb.org",
            contact: "contact@naceweb.org",
          },
        ],
      },
      {
        type: "Government Job Scams",
        description:
          "Scammers pose as government officials offering high-paying jobs, requiring fees for forms or processing.",
        examples: [
          "You receive an email claiming you’ve been selected for a government job but must pay a processing fee.",
          "A fake notification asks for payments for access to exclusive exams.",
        ],
        red_flags: [
          "Requests for payment to access applications or exams",
          "Unsolicited messages claiming government affiliation",
        ],
        prevention_tips: [
          "Verify government jobs through official portals",
          "Avoid paying fees for government applications unless through verified channels",
        ],
        victim_actions: [
          "Contact the relevant government department to confirm the job offer.",
          "Report the scam to cybercrime portals or anti-fraud bodies.",
        ],
        resources: [
          {
            organization: "National Consumer Helpline (India)",
            website: "https://consumerhelpline.gov.in",
            contact: "1800-11-4000",
          },
          {
            organization: "Fraud.org (USA)",
            website: "https://www.fraud.org",
            contact: "info@fraud.org",
          },
        ],
      },
      {
        type: "Job Placement Agency Scams",
        description:
          "Fake agencies promise job placement for a fee but fail to deliver any services.",
        examples: [
          "An agency claims to guarantee a high-paying job after paying a registration fee.",
          "The agency vanishes after collecting money without providing job leads.",
        ],
        red_flags: [
          "Agencies requiring payment before offering jobs",
          "No clear information about the agency’s success rates or clients",
        ],
        prevention_tips: [
          "Research the agency’s reviews and reputation",
          "Use agencies that only charge employers, not job seekers",
        ],
        victim_actions: [
          "Report the scam to local consumer protection agencies.",
          "Seek legal advice to recover payments made.",
        ],
        resources: [
          {
            organization: "Better Business Bureau (BBB)",
            website: "https://www.bbb.org",
            contact: "complaints@bbb.org",
          },
        ],
      },
      {
        type: "Social Media Job Scams",
        description:
          "Scammers use social media platforms to advertise fake jobs and collect personal data.",
        examples: [
          "A vague job ad on Facebook asks for personal details like bank account information.",
          "A recruiter on LinkedIn offers a job but insists on communicating via WhatsApp.",
        ],
        red_flags: [
          "Job offers with vague details posted on personal or non-company accounts",
          "Requests to continue the process outside the platform",
        ],
        prevention_tips: [
          "Apply only through official company accounts or websites",
          "Be cautious of jobs shared on non-professional profiles",
        ],
        victim_actions: [
          "Report fake profiles and ads to the platform’s support team.",
          "Avoid sharing personal details with unknown accounts.",
        ],
        resources: [
          {
            organization: "Cyber Crime Reporting Portal (India)",
            website: "https://cybercrime.gov.in",
            contact: "1909",
          },
        ],
      },
      {
        type: "Mystery Shopper Scams",
        description:
          "Victims are asked to evaluate stores or products but must pay upfront for training or supplies.",
        examples: [
          "A scammer asks for money to register as a mystery shopper.",
          "Fake assignments require victims to buy expensive items and never reimburse.",
        ],
        red_flags: [
          "Upfront payments for registration or training",
          "Unrealistic promises of high pay for simple tasks",
        ],
        prevention_tips: [
          "Research mystery shopping companies through trusted networks",
          "Avoid jobs requiring you to buy supplies upfront",
        ],
        victim_actions: [
          "Contact legitimate mystery shopping companies to confirm opportunities.",
          "Report the scam to consumer protection agencies.",
        ],
        resources: [
          {
            organization: "Mystery Shopping Providers Association (MSPA)",
            website: "https://www.mspa-global.org",
            contact: "info@mspa.org",
          },
        ],
      },
      {
        type: "Fake Remote Work Scams",
        description:
          "Scammers offer lucrative remote jobs requiring minimal effort, often targeting individuals seeking flexible schedules.",
        examples: [
          "A remote job promises $500/day for clicking ads or filling surveys.",
          "Scammers request payment for a 'work-from-home kit' to start the job.",
        ],
        red_flags: [
          "High salaries for simple tasks like clicking ads or data entry",
          "No professional communication or interviews",
        ],
        prevention_tips: [
          "Verify the job through company websites",
          "Avoid jobs that promise easy money with no clear responsibilities",
        ],
        victim_actions: [
          "Stop communication and report the scam to cybercrime portals.",
          "Block fraudulent email or messaging accounts.",
        ],
        resources: [
          {
            organization: "Internet Crime Complaint Center (IC3)",
            website: "https://www.ic3.gov",
            contact: "complaints@ic3.gov",
          },
        ],
      },
      {
        type: "Fake Job Offers / Phishing Scams",
        description:
          "Scammers impersonate reputable companies by sending fake job offers via email or messaging platforms to steal personal information.",
        examples: [
          "An email pretending to be from Google offers a job and asks for bank details.",
          "Scammers request upfront payments for 'background checks.'",
        ],
        red_flags: [
          "Unsolicited job offers from unknown recruiters",
          "Requests for sensitive information like Social Security or tax IDs early in the process",
          "Communication from non-professional or generic email domains (e.g., Gmail, Yahoo)",
        ],
        prevention_tips: [
          "Always verify the company's official website and contact details",
          "Avoid clicking on suspicious links or downloading attachments from unknown sources",
          "Cross-check job offers with the company's official career page",
        ],
        victim_actions: [
          "Contact the company directly to verify the job offer.",
          "Report phishing attempts to your email provider or anti-phishing services.",
        ],
        resources: [
          {
            organization: "Anti-Phishing Working Group (APWG)",
            website: "https://www.antiphishing.org",
            contact: "reportphishing@apwg.org",
          },
        ],
      },
      {
        type: "Fake Check Scams",
        description:
          "Victims receive counterfeit checks as part of an advance payment scheme and are asked to send back a portion of the money before the check bounces.",
        examples: [
          "You receive a check for a work-from-home job and are asked to buy equipment and send the remaining money.",
          "A scammer sends an overpaid check and asks you to wire the extra funds back.",
        ],
        red_flags: [
          "Receiving checks without prior agreement",
          "Being asked to wire money or return funds",
          "Urgency to act on the payment immediately",
        ],
        prevention_tips: [
          "Never deposit unexpected checks, especially from unverified sources",
          "Contact your bank to verify checks before depositing",
          "Avoid transferring money to unknown accounts or individuals",
        ],
        victim_actions: [
          "Report the scam to your bank and local law enforcement.",
          "Retain all communication records as evidence.",
        ],
        resources: [
          {
            organization: "National Consumers League Fraud Center",
            website: "https://www.fraud.org",
            contact: "info@fraud.org",
          },
        ],
      },
      {
        type: "Upfront Payment Scams",
        description:
          "Victims are asked to pay for training materials, equipment, or background checks before starting a job that doesn’t exist.",
        examples: [
          "A scammer asks for payment for training before offering a position that was never real.",
          "A job requires the victim to pay for a background check or equipment that isn't necessary.",
        ],
        red_flags: [
          "Jobs requiring upfront payment for any reason",
          "Promises of unusually high salaries with minimal work",
          "Lack of transparency regarding job roles and requirements",
        ],
        prevention_tips: [
          "Avoid paying for job opportunities; legitimate companies cover these costs",
          "Research the company extensively before making any payments",
          "Request a detailed job description and verify it with trusted sources",
        ],
        victim_actions: [
          "Report the scam to the relevant consumer protection agency.",
          "Request a refund if payment was made, and alert your bank.",
        ],
        resources: [
          {
            organization: "Federal Trade Commission (FTC)",
            website: "https://www.ftc.gov",
            contact: "1-877-382-4357",
          },
        ],
      },
      {
        type: "Work-from-Home Scams",
        description:
          "Scammers promise high-paying remote jobs that often involve minimal effort, such as reshipping goods or basic data entry.",
        examples: [
          "A job offer asks you to reship items from home with the promise of payment, but you never receive it.",
          "An employer offers an easy, well-paying remote job but requests access to your personal financial information.",
        ],
        red_flags: [
          "Unrealistic pay for simple or vague tasks",
          "Vague or non-existent job descriptions",
          "Requests to use your personal address or bank account for job-related tasks",
        ],
        prevention_tips: [
          "Research the job thoroughly to understand the responsibilities",
          "Ask for a formal contract and verify the employer’s credentials",
          "Be cautious of jobs requiring personal financial involvement",
        ],
        victim_actions: [
          "Verify the job and company before accepting any offers.",
          "Do not send personal or financial information until fully verifying the offer.",
        ],
        resources: [
          {
            organization:
              "Cybersecurity & Infrastructure Security Agency (CISA)",
            website: "https://www.cisa.gov",
            contact: "1-888-282-0870",
          },
        ],
      },
      {
        type: "Reshipping / Package Forwarding Scams",
        description:
          "Victims unknowingly reship stolen goods or handle packages as part of an illegal operation, putting themselves at risk.",
        examples: [
          "You are hired to reship products from home but later discover the goods are stolen.",
          "A company asks you to forward packages using your address without offering compensation.",
        ],
        red_flags: [
          "Jobs involving package reshipping or handling without a clear company name",
          "Requests to use personal addresses for business activities",
          "Unverified or non-existent company information",
        ],
        prevention_tips: [
          "Avoid handling packages or using personal addresses for job-related tasks",
          "Verify the legitimacy of the employer through multiple sources",
          "Be cautious of jobs with unclear descriptions or responsibilities",
        ],
        victim_actions: [
          "Contact local authorities if you suspect stolen goods.",
          "Do not ship any packages before confirming their authenticity.",
        ],
        resources: [
          {
            organization: "Internet Crime Complaint Center (IC3)",
            website: "https://www.ic3.gov",
            contact: "1-800-251-3221",
          },
        ],
      },
      {
        type: "Fake Job Offers / Phishing Scams",
        description:
          "Scammers impersonate reputable companies by sending fake job offers via email or messages to steal personal information.",
        examples: [
          "You receive an unsolicited email offering a job at a reputable company but asking for sensitive information.",
          "A job offer asks you to provide your Social Security number immediately to secure the position.",
        ],
        red_flags: [
          "Unsolicited job offers",
          "Requests for sensitive information like Social Security numbers",
          "Generic email domains (e.g., Gmail, Yahoo)",
        ],
        prevention_tips: [
          "Verify the company's official website and contact information",
          "Avoid sharing personal details without verifying legitimacy",
        ],
        victim_actions: [
          "Verify job offers with the company’s official HR or recruitment team.",
          "Report the scam to your email provider and the relevant authorities.",
        ],
        resources: [
          {
            organization: "Anti-Phishing Working Group (APWG)",
            website: "https://www.antiphishing.org",
            contact: "reportphishing@apwg.org",
          },
        ],
      },
      {
        type: "Fake Check Scams",
        description:
          "Scammers send counterfeit checks as advance payments and ask victims to send back a portion before the check bounces.",
        examples: [
          "You receive an unexpected check and are asked to send part of it back for 'training materials.'",
          "A supposed employer sends an overpaid check and asks you to wire the extra funds to another account.",
        ],
        red_flags: [
          "Receiving checks unexpectedly",
          "Requests to wire money or return funds",
        ],
        prevention_tips: [
          "Never deposit unexpected checks",
          "Confirm payments with your bank before taking further steps",
        ],
        victim_actions: [
          "Alert your bank if you deposit a check from an unverified source.",
          "Do not send any money or return funds without confirmation.",
        ],
        resources: [
          {
            organization: "Federal Reserve Consumer Help",
            website: "https://www.federalreserveconsumerhelp.gov",
            contact: "1-888-851-1920",
          },
        ],
      },
    ],
  };

  const filteredScams = scan.job_scams.filter(
    (scam) =>
      scam.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scam.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Job Scam Awareness Guide
        </h1>
        <Alert className="bg-blue-100 border-blue-300 mb-6">
          <AlertTriangle className="h-5 w-5 text-blue-700" />
          <AlertDescription className="text-blue-800">
            Stay informed and protected against common job scams. Knowledge is
            your first line of defense.
          </AlertDescription>
        </Alert>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for specific scams or keywords..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Scams Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {filteredScams.map((scam, index) => (
          <Card
            key={index}
            className="bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-lg font-semibold flex justify-between items-center">
                {scam.type}
                <button
                  onClick={() =>
                    setExpandedScam(expandedScam === index ? null : index)
                  }
                  className="p-1 hover:bg-blue-500 rounded-full transition-colors duration-200"
                >
                  {expandedScam === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600 mb-4">{scam.description}</p>

              {expandedScam === index && (
                <div className="space-y-4">
                  {/* Examples */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Examples:
                    </h3>
                    <ul className="list-disc list-inside text-blue-800 space-y-2">
                      {scam.examples.map((example, i) => (
                        <li key={i} className="text-sm">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red Flags */}
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">
                      Red Flags:
                    </h3>
                    <ul className="list-disc list-inside text-red-800 space-y-2">
                      {scam.red_flags.map((flag, i) => (
                        <li key={i} className="text-sm">
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention Tips */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">
                      Prevention Tips:
                    </h3>
                    <ul className="list-disc list-inside text-green-800 space-y-2">
                      {scam.prevention_tips.map((tip, i) => (
                        <li key={i} className="text-sm">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Resources:
                    </h3>
                    <div className="space-y-2">
                      {scam.resources.map((resource, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium text-blue-800">
                            {resource.organization}
                          </p>
                          <p className="text-sm text-gray-600">
                            Contact: {resource.contact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {expandedScam !== index && (
                <button
                  onClick={() => setExpandedScam(index)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobScam;
