"use client";
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
import { DataGhost } from "@/app/data/GhostJobs";

function GhostJobs() {
  const [videoId, setVideoId] = useState("-FAYkoAeTVU");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  const ghost = DataGhost;

  const YoutubeVideo = async () => {
    const response = await service.getVideos(`ghost jobs`);
    if (response && response.length > 0) {
      setVideoId(response[0]?.id?.videoId);
    } else {
      console.log("errror");
    }
  };

  return (
    <main className="min-h-screen bg-blue-50 p-4 md:p-6 lg:p-8" role="main">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header aria-labelledby="ghost-title">
          <Card className="bg-blue-600 text-white">
            <CardHeader className="text-center">
              <CardTitle
                id="ghost-title"
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
              >
                GHOST JOBS are the reason you can&apos;t find a job.
              </CardTitle>
              <p className="text-blue-100 mt-2">
                A Comprehensive Guide for Job Seekers
              </p>
            </CardHeader>
          </Card>
        </header>

        {/* Definition */}
        <section aria-label="Definition of Ghost Jobs">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <CardTitle className="text-xl text-blue-800">
                  Definition
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 text-xl">{ghost.definition}</p>
            </CardContent>
          </Card>
        </section>

        {/* Numbers that Talk */}
        <section aria-label="Key Statistics on Ghost Jobs">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <CardTitle className="text-xl text-blue-800">
                  Numbers that Talk
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ghost.number.map((item, index) => (
                  <article
                    key={index}
                    className="relative overflow-hidden rounded-lg border-2 border-gray-100 bg-white p-6 hover:shadow-md transition-shadow"
                    aria-label={item.title}
                  >
                    <div className="relative z-10">
                      <div
                        className={`mb-4 inline-flex p-3 rounded-full ${item.color}`}
                      >
                        <item.icon size={24} aria-hidden="true" />
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Video */}
        <section aria-label="YouTube Explanation of Ghost Jobs">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <CgYoutube
                  className="w-6 h-6 text-blue-600"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl text-blue-800">
                  Youtube Video
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div role="region" aria-label="Embedded YouTube video">
                <YouTube videoId={videoId} opts={opts} />
              </div>
            </CardContent>
            <Button onClick={YoutubeVideo} aria-label="Change video content">
              Change video
            </Button>
          </Card>
        </section>

        {/* Common Reasons */}
        <section aria-label="Common Reasons for Ghost Jobs">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Building2
                  className="w-6 h-6 text-blue-600"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl text-blue-800">
                  Common Reasons
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ghost.common_reasons.map((item, index) => (
                  <article
                    key={index}
                    className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    aria-label={item.reason}
                  >
                    <h3 className="font-semibold text-blue-700 mb-2">
                      {item.reason}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impacts */}
        <section
          aria-label="Impacts of Ghost Jobs"
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Job Seekers Impact */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" aria-hidden="true" />
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
                    <span className="text-blue-500 mt-1" aria-hidden="true">
                      •
                    </span>
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
                <Building2
                  className="w-6 h-6 text-blue-600"
                  aria-hidden="true"
                />
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
                    <span className="text-blue-500 mt-1" aria-hidden="true">
                      •
                    </span>
                    {impact}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Identification Tips */}
        <section aria-label="Tips to Identify Ghost Jobs">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-600" aria-hidden="true" />
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
        </section>

        {/* Help Platforms */}
        <section aria-label="Helpful Platforms">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <Search className="w-6 h-6 text-blue-600" aria-hidden="true" />
                <CardTitle className="text-xl text-blue-800">
                  Platforms that Help
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {ghost.help.map((tip, index) => (
                  <article
                    key={index}
                    className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    aria-label={`Platform: ${tip.plateform}`}
                  >
                    <p className="text-gray-700 font-semibold text-base">
                      {tip.plateform}
                    </p>
                    <p className="text-gray-700 mt-2">{tip.description}</p>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recent News */}
        <section aria-label="Recent News About Ghost Jobs">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b border-blue-100">
              <div className="flex items-center gap-2">
                <AlertTriangle
                  className="w-6 h-6 text-blue-600"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl text-blue-800">
                  Recent News
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ghost.news.slice(0, 3).map((news, index) => (
                  <article
                    key={index}
                    className="p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                    aria-label={news.title}
                  >
                    <p className="text-sm text-blue-600 mb-2">{news.date}</p>
                    <h3 className="font-medium text-gray-800 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600">{news.source}</p>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default GhostJobs;
