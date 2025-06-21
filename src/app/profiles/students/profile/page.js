"use client";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  BookOpen,
  TrendingUp,
  Target,
  Users,
  Award,
  PlayCircle,
  CheckCircle,
  AlertCircle,
  User,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Star,
  FileText,
  Video,
} from "lucide-react";
import StudentSidebar from "./components/Sidebar";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Mock data
  const stats = {
    totalSessions: 24,
    completedTests: 18,
    averageScore: 85,
    streak: 7,
  };

  const upcomingSessions = [
    {
      id: 1,
      title: "Technical Interview - JavaScript",
      type: "Mock Interview",
      date: "2025-05-28",
      time: "2:00 PM",
      instructor: "Sarah Johnson",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      title: "System Design Basics",
      type: "Group Session",
      date: "2025-05-29",
      time: "10:00 AM",
      instructor: "Mike Chen",
      difficulty: "Advanced",
    },
    {
      id: 3,
      title: "Behavioral Interview Practice",
      type: "1-on-1 Session",
      date: "2025-05-30",
      time: "3:30 PM",
      instructor: "Emily Davis",
      difficulty: "Beginner",
    },
  ];

  const recentTests = [
    {
      id: 1,
      title: "Data Structures Quiz",
      score: 92,
      maxScore: 100,
      date: "2025-05-25",
      status: "completed",
    },
    {
      id: 2,
      title: "Algorithms Assessment",
      score: 78,
      maxScore: 100,
      date: "2025-05-23",
      status: "completed",
    },
    {
      id: 3,
      title: "React Fundamentals",
      score: 0,
      maxScore: 100,
      date: "2025-05-28",
      status: "pending",
    },
  ];

  const skills = [
    { name: "JavaScript", progress: 85, level: "Advanced" },
    { name: "React", progress: 70, level: "Intermediate" },
    { name: "System Design", progress: 45, level: "Beginner" },
    { name: "Problem Solving", progress: 90, level: "Advanced" },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        {/* <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === "overview"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("sessions")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === "sessions"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Sessions</span>
            </button>

            <button
              onClick={() => setActiveTab("practice")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === "practice"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Practice Tests</span>
            </button>

            <button
              onClick={() => setActiveTab("progress")}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                activeTab === "progress"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Award className="w-5 h-5" />
              <span>Progress</span>
            </button>
          </nav>
        </aside> */}
        <StudentSidebar setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "Dashboard" && (
            <div className="space-y-6">
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-2">Welcome back, Alex!</h2>
                <p className="text-blue-100">
                  Ready to ace your next interview? Let&apos;s continue your
                  preparation journey.
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">7-day streak</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">85% avg score</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total Sessions
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.totalSessions}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Completed Tests
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.completedTests}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Average Score
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.averageScore}%
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Current Streak
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.streak} days
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Sessions */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Upcoming Sessions
                      </h3>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                        View All
                      </button>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {upcomingSessions.slice(0, 3).map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Video className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {session.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {session.instructor} • {session.type}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-xs text-gray-500">
                                {session.date} at {session.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                              session.difficulty
                            )}`}
                          >
                            {session.difficulty}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Test Results */}
                <div className="bg-white rounded-xl shadow-sm border">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Tests
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {recentTests.map((test) => (
                      <div
                        key={test.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              test.status === "completed"
                                ? "bg-green-100"
                                : "bg-gray-100"
                            }`}
                          >
                            {test.status === "completed" ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Clock className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {test.title}
                            </p>
                            <p className="text-xs text-gray-500">{test.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {test.status === "completed" ? (
                            <p
                              className={`text-sm font-medium ${getScoreColor(
                                test.score,
                                test.maxScore
                              )}`}
                            >
                              {test.score}/{test.maxScore}
                            </p>
                          ) : (
                            <p className="text-sm text-gray-500">Pending</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Skills Progress
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {skill.progress}% complete
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "Interview" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Interview Sessions
                </h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule New Session
                </button>
              </div>

              <div className="grid gap-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-white p-6 rounded-xl shadow-sm border"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Video className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {session.title}
                          </h3>
                          <p className="text-gray-600">
                            with {session.instructor}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                {session.date}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                {session.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                            session.difficulty
                          )}`}
                        >
                          {session.difficulty}
                        </span>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Join Session
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Practice Tests
                </h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  New Practice Test
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentTests
                  .concat([
                    {
                      id: 4,
                      title: "Python Basics",
                      score: 88,
                      maxScore: 100,
                      date: "Available",
                      status: "available",
                    },
                    {
                      id: 5,
                      title: "Database Design",
                      score: 0,
                      maxScore: 100,
                      date: "Available",
                      status: "available",
                    },
                    {
                      id: 6,
                      title: "System Architecture",
                      score: 0,
                      maxScore: 100,
                      date: "Available",
                      status: "available",
                    },
                  ])
                  .map((test) => (
                    <div
                      key={test.id}
                      className="bg-white p-6 rounded-xl shadow-sm border"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            test.status === "completed"
                              ? "bg-green-100"
                              : test.status === "pending"
                              ? "bg-yellow-100"
                              : "bg-blue-100"
                          }`}
                        >
                          {test.status === "completed" ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : test.status === "pending" ? (
                            <Clock className="w-5 h-5 text-yellow-600" />
                          ) : (
                            <PlayCircle className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        {test.status === "completed" && (
                          <span
                            className={`text-sm font-medium ${getScoreColor(
                              test.score,
                              test.maxScore
                            )}`}
                          >
                            {test.score}/{test.maxScore}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {test.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{test.date}</p>

                      <button
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          test.status === "available"
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : test.status === "pending"
                            ? "bg-yellow-600 text-white hover:bg-yellow-700"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {test.status === "available"
                          ? "Start Test"
                          : test.status === "pending"
                          ? "Continue Test"
                          : "Review Results"}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {activeTab === "Applications" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Progress
              </h2>

              {/* Skills detailed view */}
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Skill Development
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium text-gray-900">
                          {skill.name}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{skill.progress}% complete</span>
                        <span>{100 - skill.progress}% remaining</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement badges */}
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Achievements
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">7-Day Streak</h4>
                    <p className="text-sm text-gray-600">Consistent learner</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">High Achiever</h4>
                    <p className="text-sm text-gray-600">85%+ average score</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900">Team Player</h4>
                    <p className="text-sm text-gray-600">
                      Joined 5+ group sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
