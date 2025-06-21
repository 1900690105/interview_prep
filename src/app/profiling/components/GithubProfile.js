"use client";
import React, { useEffect, useState } from "react";
import {
  Github,
  Youtube,
  Link,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Star,
  Code,
  Users,
  GitBranch,
  Zap,
  Trophy,
  Sparkles,
  ArrowRight,
  Play,
  BookOpen,
  Target,
  Rocket,
  LinkIcon,
} from "lucide-react";

const GithubProfile = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("steps");

  // Mock data - replace with your actual data
  const githubData = {
    account: {
      steps: [
        {
          title: "Create Your Professional Foundation",
          description:
            "Set up your GitHub account with a strong professional presence",
          details: [
            "Choose a professional username that matches your other social profiles",
            "Upload a high-quality profile photo (professional headshot recommended)",
            "Write a compelling bio that highlights your testing expertise",
            "Add your location and company information",
            "Include links to your portfolio, LinkedIn, and personal website",
          ],
        },
        {
          title: "Craft an Outstanding README Profile",
          description:
            "Build a dynamic profile README that showcases your skills and personality",
          details: [
            "Create a repository with your username as the repository name",
            "Design an eye-catching header with your name and title",
            "Add sections for skills, current projects, and achievements",
            "Include GitHub stats and contribution graphs",
            "Add contact information and social links",
          ],
        },
        {
          title: "Showcase Your Testing Projects",
          description: "Organize and present your testing work effectively",
          details: [
            "Pin your best repositories to your profile",
            "Write comprehensive README files for each project",
            "Use clear, descriptive commit messages",
            "Add screenshots and demo links where applicable",
            "Include proper documentation and setup instructions",
          ],
        },
        {
          title: "Build Your Testing Portfolio",
          description:
            "Demonstrate your expertise through diverse testing projects",
          details: [
            "Create automation frameworks and test suites",
            "Contribute to open-source testing tools",
            "Document your testing methodologies and approaches",
            "Share test case examples and best practices",
            "Build tools that solve common testing problems",
          ],
        },
      ],
    },
    resources: [
      {
        title: "Essential GitHub Tools",
        links: [
          {
            name: "GitHub Desktop",
            description:
              "Official GitHub desktop application for easier repository management",
            url: "https://desktop.github.com/",
          },
          {
            name: "GitHub CLI",
            description: "Command-line tool for GitHub operations",
            url: "https://cli.github.com/",
          },
          {
            name: "GitHub Copilot",
            description: "AI-powered code completion tool",
            url: "https://github.com/features/copilot",
          },
        ],
      },
      {
        title: "Profile Enhancement Resources",
        links: [
          {
            name: "GitHub Profile README Generator",
            description: "Create stunning profile READMEs with ease",
            url: "https://rahuldkjain.github.io/gh-profile-readme-generator/",
          },
          {
            name: "GitHub Stats Cards",
            description: "Add dynamic stats to your profile",
            url: "https://github.com/anuraghazra/github-readme-stats",
          },
          {
            name: "Shields.io",
            description: "Create custom badges for your repositories",
            url: "https://shields.io/",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const StatCard = ({ icon: Icon, value, label, gradient }) => (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-4 translate-x-4"></div>
      <div className="relative z-10">
        <Icon className="w-8 h-8 mb-3 opacity-90" />
        <div className="text-2xl font-bold mb-1">{value}</div>
        <div className="text-sm opacity-90">{label}</div>
      </div>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/20 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 p-6 md:p-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Hero Section */}
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Professional GitHub Profile</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 leading-tight">
              GitHub Profile
              <br />
              <span className="text-4xl md:text-6xl">Mastery</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your GitHub presence into a powerful showcase of your
              <span className="font-semibold text-purple-600">
                {" "}
                software testing expertise
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>Start Building</span>
              </button>

              <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 border border-gray-200">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Tutorial</span>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <StatCard
              icon={Users}
              value="10K+"
              label="Developers Helped"
              gradient="from-purple-500 to-purple-700"
            />
            <StatCard
              icon={Star}
              value="500+"
              label="GitHub Stars"
              gradient="from-blue-500 to-blue-700"
            />
            <StatCard
              icon={GitBranch}
              value="1.2K+"
              label="Repositories"
              gradient="from-indigo-500 to-indigo-700"
            />
            <StatCard
              icon={Trophy}
              value="98%"
              label="Success Rate"
              gradient="from-green-500 to-green-700"
            />
          </div>

          {/* Features Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Your GitHub Profile Matters
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your GitHub profile is your digital portfolio. Make it count
                with these essential features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Code}
                title="Showcase Your Code"
                description="Display your best testing frameworks, automation scripts, and innovative solutions to demonstrate your technical expertise."
                color="from-purple-500 to-purple-600"
              />
              <FeatureCard
                icon={Target}
                title="Professional Branding"
                description="Create a cohesive professional brand that reflects your testing expertise and attracts the right opportunities."
                color="from-blue-500 to-blue-600"
              />
              <FeatureCard
                icon={Zap}
                title="Industry Recognition"
                description="Stand out to recruiters and hiring managers with a profile that showcases your contributions to the testing community."
                color="from-indigo-500 to-indigo-600"
              />
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab("steps")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === "steps"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <BookOpen className="w-5 h-5 inline mr-2" />
                  Setup Steps
                </button>
                <button
                  onClick={() => setActiveTab("resources")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === "resources"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <LinkIcon className="w-5 h-5 inline mr-2" />
                  Resources
                </button>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          {activeTab === "steps" && (
            <div className="space-y-6">
              {githubData.account.steps.map((step, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div
                    className="p-8 cursor-pointer"
                    onClick={() =>
                      setSelectedStep(selectedStep === index ? null : index)
                    }
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed ml-14">
                          {step.description}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {selectedStep === index ? (
                          <ChevronUp className="w-6 h-6 text-purple-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        )}
                      </div>
                    </div>

                    {selectedStep === index && (
                      <div className="mt-6 ml-14 animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-4">
                          {step.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-l-4 border-purple-400"
                            >
                              <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                {detailIndex + 1}
                              </div>
                              <p className="text-gray-700 leading-relaxed">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="grid md:grid-cols-2 gap-8">
              {githubData.resources.map((resourceGroup, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></div>
                    {resourceGroup.title}
                  </h3>

                  <div className="space-y-4">
                    {resourceGroup.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 border border-transparent hover:border-purple-200"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors text-lg">
                              {link.name}
                            </h4>
                            <p className="text-gray-600 mt-1 leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 ml-4" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Profile?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the next step in your career journey
            </p>
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Continue to LinkedIn Profile</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubProfile;
