"use client";
import React, { useState } from "react";
import {
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Home,
  MessageSquare,
  PieChart,
  Settings,
  Target,
  TrendingUp,
  User,
  Users,
  Bell,
  Search,
  Filter,
  Star,
  Award,
  Briefcase,
} from "lucide-react";
import SideBar from "../components/SideBar";
import Image from "next/image";

export default function JobPrepDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Applications Sent",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: FileText,
    },
    {
      title: "Interview Scheduled",
      value: "8",
      change: "+25%",
      trend: "up",
      icon: Calendar,
    },
    {
      title: "Skills Completed",
      value: "15",
      change: "+5%",
      trend: "up",
      icon: CheckCircle,
    },
    {
      title: "Days Streak",
      value: "42",
      change: "+2%",
      trend: "up",
      icon: Target,
    },
  ];

  const recentActivities = [
    {
      action: "Completed React.js assessment",
      time: "2 hours ago",
      type: "skill",
    },
    {
      action: "Applied to Software Engineer at Google",
      time: "5 hours ago",
      type: "application",
    },
    {
      action: "Interview scheduled with Microsoft",
      time: "1 day ago",
      type: "interview",
    },
    {
      action: "Updated portfolio project",
      time: "2 days ago",
      type: "portfolio",
    },
  ];

  const upcomingEvents = [
    {
      title: "Technical Interview - Amazon",
      date: "Tomorrow",
      time: "2:00 PM",
      type: "interview",
    },
    {
      title: "System Design Mock Interview",
      date: "Dec 20",
      time: "10:00 AM",
      type: "practice",
    },
    {
      title: "Career Fair - Tech Giants",
      date: "Dec 22",
      time: "9:00 AM",
      type: "event",
    },
  ];

  const skillProgress = [
    { skill: "Data Structures", progress: 85, level: "Advanced" },
    { skill: "System Design", progress: 60, level: "Intermediate" },
    { skill: "React.js", progress: 90, level: "Expert" },
    { skill: "Node.js", progress: 70, level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  JobPrep Portal
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search jobs, companies..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center space-x-2">
                {/* <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                /> */}
                <span className="text-sm font-medium text-gray-700">
                  Alex Johnson
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Dashboard Overview
            </h2>
            <p className="text-gray-600 mt-2">
              Track your job search progress and skill development
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${
                            activity.type === "skill"
                              ? "bg-green-100"
                              : activity.type === "application"
                              ? "bg-blue-100"
                              : activity.type === "interview"
                              ? "bg-purple-100"
                              : "bg-orange-100"
                          }`}
                        >
                          {activity.type === "skill" && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                          {activity.type === "application" && (
                            <FileText className="h-4 w-4 text-blue-600" />
                          )}
                          {activity.type === "interview" && (
                            <Calendar className="h-4 w-4 text-purple-600" />
                          )}
                          {activity.type === "portfolio" && (
                            <Star className="h-4 w-4 text-orange-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-6">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Skills Progress
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {skillProgress.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.skill}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                skill.level === "Expert"
                                  ? "bg-green-100 text-green-800"
                                  : skill.level === "Advanced"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {skill.level}
                            </span>
                            <span className="text-sm text-gray-500">
                              {skill.progress}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Upcoming Events
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4 py-2"
                      >
                        <h4 className="text-sm font-medium text-gray-900">
                          {event.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{event.date}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quick Actions
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <FileText className="h-4 w-4 mr-2" />
                      New Application
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Practice Problems
                    </button>
                    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Users className="h-4 w-4 mr-2" />
                      Mock Interview
                    </button>
                  </div>
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Week Champion!</h3>
                    <p className="text-sm text-purple-100">
                      you&apos;ve completed 5 coding challenges this week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
