import React, { useEffect, useState } from "react";
import {
  Github,
  Youtube,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import YouTube from "react-youtube";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import service from "../../../../config/service";
import { Button } from "@/components/ui/button";

const GithubProfile = () => {
  const githubData = {
    account: {
      title: "GitHub Profile Mastery for Software Testers",
      steps: [
        {
          title: "Create Your Account",
          description:
            "Visit GitHub and set up a professional profile that showcases your testing expertise.",
          details: [
            "Choose a professional username",
            "Use a professional email address",
            "Create a strong, unique password",
          ],
        },
        {
          title: "Craft Your Portfolio",
          description:
            "Transform your GitHub into a powerful professional showcase.",
          details: [
            "Create project repositories demonstrating testing skills",
            "Write comprehensive README files",
            "Highlight your technical capabilities",
          ],
        },
      ],
    },
    resources: [
      {
        title: "Profile Picture Tools",
        links: [
          {
            name: "PFP Maker",
            url: "https://pfpmaker.com",
            description: "AI-powered profile picture generation",
          },
          {
            name: "Hotpot.ai",
            url: "https://hotpot.ai/profile-picture-editor",
            description: "Professional headshot editing",
          },
        ],
      },
      {
        title: "Learning Resources",
        links: [
          {
            name: "GitHub Docs",
            url: "https://docs.github.com/",
            description: "Official GitHub documentation",
          },
          {
            name: "Software Testing Help",
            url: "https://www.softwaretestinghelp.com/",
            description: "Comprehensive testing resources",
          },
          {
            name: "README Documentation",
            url: "https://readme.so/",
            description: "The easiest way to create a README",
          },
          {
            name: "Markdown Guide",
            url: "https://www.markdownguide.org/",
            description: "Markdown Guide",
          },
          {
            name: "GitHub Inspiration",
            url: "https://github.com/eddiejaoude",
            description: "GitHub Profiles for Inspiration",
          },
          {
            name: "Profiles readmes",
            url: "https://dev.to/github/10-standout-github-profile-readmes-h2o",
            description: "10 Standout GitHub Profiles readmes",
          },
          {
            name: "good GitHub profile",
            url: "https://www.bradymower.com/how-to-build-a-good-github-profile/",
            description: "How to build a good GitHub profile",
          },
          {
            name: "GitHub profile",
            url: "https://www.profileme.dev/",
            description: "Create an amazing GitHub profile in minutes",
          },
          {
            name: "Github Profile READMEs",
            url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme",
            description: "A curated list of awesome Github Profile READMEs",
          },
        ],
      },
    ],
  };

  const [selectedStep, setSelectedStep] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [featuredVideoId, setFeaturedVideoId] = useState("");

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const fetchYouTubeVideos = async () => {
    try {
      const cachedVideos = localStorage.getItem("githubVideos");
      if (cachedVideos) {
        const parsedVideos = JSON.parse(cachedVideos);
        setYoutubeVideos(parsedVideos);
        setFeaturedVideoId(parsedVideos[0]?.id?.videoId);
        return;
      }

      const response = await service.getVideos("github profile building");
      localStorage.setItem("githubVideos", JSON.stringify(response));
      setYoutubeVideos(response);
      setFeaturedVideoId(response[0]?.id?.videoId);
    } catch (error) {
      console.error("Failed to fetch YouTube videos", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
            GitHub Profile Mastery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive guide to building a standout GitHub profile for
            software testing professionals
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideoId && (
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <YouTube
              videoId={featuredVideoId}
              opts={{
                width: "100%",
                height: "500px",
              }}
              className="w-full"
            />
          </div>
        )}

        {/* Account Setup Steps */}
        <div className="grid md:grid-cols-1 gap-6">
          {githubData.account.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setSelectedStep(selectedStep === index ? null : index)
                }
              >
                <h2 className="text-2xl font-bold text-indigo-700">
                  {step.title}
                </h2>
                {selectedStep === index ? (
                  <ChevronUp className="text-indigo-600" />
                ) : (
                  <ChevronDown className="text-indigo-600" />
                )}
              </div>

              <p className="text-gray-600 mt-2">{step.description}</p>

              {selectedStep === index && (
                <ul className="space-y-2 mt-4 text-gray-700">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center space-x-2"
                    >
                      <Badge variant="secondary">Step {detailIndex + 1}</Badge>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="grid md:grid-cols-1 gap-6">
          {githubData.resources.map((resourceGroup, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
            >
              <h3 className="text-2xl font-bold text-indigo-700 border-b pb-2">
                {resourceGroup.title}
              </h3>
              <div className="space-y-3">
                {resourceGroup.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-indigo-50 p-3 rounded-lg transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-indigo-800 group-hover:text-indigo-600">
                          {link.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="text-gray-400 group-hover:text-indigo-600" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          className="bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            window.location.href = "/params/page?page=linkedinProfile";
          }}
        >
          Linkedin Profile
        </Button>
      </div>
    </div>
  );
};

export default GithubProfile;
