import { TrendingUp, Users, DollarSign } from "lucide-react";

export const DataGhost = {
  definition: [
    "Job postings that remain listed on job boards or company websites even when the position may not actively be hiring, is already filled, or exists as a placeholder.",
  ],
  common_reasons: [
    {
      reason: "Pipeline Building",
      description:
        "Companies keep positions open to build a candidate pool for future needs, especially for hard-to-fill roles or high turnover positions.",
    },
    {
      reason: "Show Growth",
      description:
        "Job postings may be kept up to create the impression of expansion, often aimed at boosting investor confidence or employee morale.",
    },
    {
      reason: "Evaluate Internal Candidates",
      description:
        "Positions are posted externally to test how internal candidates compare to outside applicants, sometimes used in public sector roles due to fair hiring requirements.",
    },
    {
      reason: "Employee Motivation",
      description:
        "In some cases, companies use job postings to make current employees feel replaceable, encouraging them to work harder.",
    },
    {
      reason: "Accidental Listings",
      description:
        "Some postings remain due to outdated listings on third-party job boards that may not sync immediately with company updates.",
    },
  ],
  impacts: {
    job_seekers: [
      "Wastes time and resources on applications for non-existent roles.",
      "Leads to frustration and distrust in the hiring process.",
      "May discourage qualified candidates from applying to the company in the future.",
    ],
    company: [
      "May harm brand reputation if candidates recognize the practice.",
      "Can attract the wrong applicants, reducing efficiency in actual hiring processes.",
    ],
  },
  identification_tips: [
    "Verify the job posting on the company's official website.",
    "Look for overly vague job descriptions that lack specific responsibilities or team information.",
    "Check the job post date; listings older than a month may indicate a ghost job.",
    "Reach out to recruiters or hiring managers for confirmation.",
  ],
  news: [
    {
      source: "indianexpress",
      link: "https://indianexpress.com/article/technology/rapid-rise-of-ghost-jobs-and-how-to-avoid-them-9528791/",
      date: "232024",
      title:
        "No, that job isn't real. The rapid rise of ghost jobs and how to avoid them",
    },
    {
      source: "business-standard",
      link: "https://www.business-standard.com/finance/personal-finance/what-are-ghost-jobs-how-to-identify-them-and-tips-for-job-seekers-124040100706_1.html",
      date: "01/04/2024",
      title:
        "What are ghost jobs? How to identify them and tips for job seekers",
    },
    {
      source: "theguardian",
      link: "https://www.theguardian.com/money/2024/oct/30/ghost-jobs-why-do-40-of-companies-advertise-positions-that-dont-exist",
      date: "01/11/2024",
      title:
        "Ghost jobs: why do 40% of companies advertise positions that don't exist?",
    },
  ],
  number: [
    {
      title: "40% of companies",
      desc: "have posted fake job listings in 2024",
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "70% of hiring managers",
      desc: "believe posting fake jobs is morally acceptable",
      icon: Users,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "1.8M jobs",
      desc: "posted on LinkedIn are more than a month old",
      icon: DollarSign,
      color: "bg-violet-100 text-violet-600",
    },
  ],
  help: [
    {
      plateform: "Ghostjobs",
      description:
        "A platform where job seekers can report and track suspicious job postings, providing a point of reference for others.",
    },
    {
      plateform: "r/recruitinghell and r/jobsearchhacks on Reddit",
      description:
        "Communities sharing knowledge and experiences about ghost jobs, as well as tips for identifying and avoiding them.",
    },
  ],
};
