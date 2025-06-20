import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Info,
  AlertTriangle,
  Search,
  Building2,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react";
import service from "../../../../config/service";
import YouTube from "react-youtube";
import { CgYoutube } from "react-icons/cg";
import { Button } from "@/components/ui/button";

function GhostJobs() {
  const [videoId, setVideoId] = useState("-FAYkoAeTVU");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  const ghost = {
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

  const YoutubeVideo = async () => {
    const response = await service.getVideos(`ghost jobs`);
    if (response && response.length > 0) {
      setVideoId(response[0]?.id?.videoId);
    } else {
      console.log("errror");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-blue-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold">
              GHOST JOBS are the reason you can't find a job.
            </CardTitle>
            <p className="text-blue-100 mt-2">
              A Comprehensive Guide for Job Seekers
            </p>
          </CardHeader>
        </Card>

        {/* Definition */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                Definition
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-gray-700 text-xl">{ghost.definition}</p>
          </CardContent>
        </Card>

        {/* Number that talk about */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                Numbers that Talk
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ghost.number.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border-2 border-gray-100 bg-white p-6 hover:shadow-md transition-shadow"
                >
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Circle */}
                    <div
                      className={`mb-4 inline-flex p-3 rounded-full ${item.color}`}
                    >
                      <item.icon size={24} />
                    </div>

                    {/* Text Content */}
                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* video */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <CgYoutube className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                Youtube Video
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <YouTube videoId={videoId} opts={opts} />
          </CardContent>
          <Button onClick={() => YoutubeVideo()}>Change video</Button>
        </Card>

        {/* Common Reasons */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                Common Reasons
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ghost.common_reasons.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <h3 className="font-semibold text-blue-700 mb-2">
                    {item.reason}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impacts */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Job Seekers Impact */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-blue-800">
                  Impact on Job Seekers
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {ghost.impacts.job_seekers.map((impact, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-blue-500 mt-1">•</span>
                    {impact}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Company Impact */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-blue-800">
                  Impact on Companies
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {ghost.impacts.company.map((impact, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="text-blue-500 mt-1">•</span>
                    {impact}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Identification Tips */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                How to Identify Ghost Jobs
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {ghost.identification_tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <span className="font-semibold text-blue-600">
                    {index + 1}.
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* get help */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                Plateform that help
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid gap-6 md:grid-cols-2">
              {ghost.help.map((tip, index) => (
                <div
                  key={index}
                  className=" p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <p className="text-gray-700 font-semibold text-base">
                    {tip.plateform}
                  </p>
                  <p className="text-gray-700 mt-2">{tip.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent News */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b border-blue-100">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">
                Recent News
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ghost.news.slice(0, 3).map((news, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <p className="text-sm text-blue-600 mb-2">{news.date}</p>
                  <h3 className="font-medium text-gray-800 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600">{news.source}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default GhostJobs;
