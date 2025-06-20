"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  MessageCircle,
  FolderOpen,
  FileText,
  Map,
  Settings,
  User,
} from "lucide-react";

const StudentSidebar = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "interview", label: "Interview", icon: MessageCircle },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "applications", label: "Applications", icon: FileText },
    { id: "roadmaps", label: "Roadmaps", icon: Map },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // Close mobile menu after selection
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex gap-0">
        <div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden fixed top-16 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Overlay for mobile */}
          {isOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`
          fixed lg:static top-0 left-0 h-full bg-gray-900 text-white z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          w-72 lg:w-64 xl:w-72
        `}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Nikhil</h2>
                    <p className="text-sm text-gray-400">Kandhare</p>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            handleItemClick(item.id);
                            setActiveTab(item.label);
                          }}
                          className={`
                        w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                        transition-all duration-200 text-left
                        ${
                          activeItem === item.id
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }
                      `}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-gray-700">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Interview Prep Pro
                  </h3>
                  <p className="text-xs text-blue-100 mb-3">
                    Upgrade to access premium interview questions and mock
                    sessions.
                  </p>
                  <button className="w-full bg-white text-blue-600 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Area (Demo) */}
        {/* <div className="lg:ml-64 xl:ml-0 w-full min-h-screen bg-gray-50 p-6">
          <div className="mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {menuItems.find((item) => item.id === activeItem)?.label ||
                "Dashboard"}
            </h1>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600">
                This is the main content area. The active section is:{" "}
                <strong>{activeItem}</strong>
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Quick Stats
                  </h3>
                  <p className="text-blue-700">Track your progress</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">
                    Recent Activity
                  </h3>
                  <p className="text-green-700">Latest updates</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">
                    Achievements
                  </h3>
                  <p className="text-purple-700">Your milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default StudentSidebar;
