"use client";

import React from "react";
import {
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle, // Not directly used in sidebar, but kept from original imports
  Clock, // Not directly used in sidebar, but kept from original imports
  FileText,
  Globe,
  Home,
  MessageSquare, // Not directly used in sidebar, but kept from original imports
  PieChart, // Not directly used in sidebar, but kept from original imports
  Settings,
  Target, // Not directly used in sidebar, but kept from original imports
  TrendingUp, // Not directly used in sidebar, but kept from original imports
  User,
  Users, // Not directly used in sidebar, but kept from original imports
  Bell, // Not directly used in sidebar, but kept from original imports
  Search, // Not directly used in sidebar, but kept from original imports
  Filter, // Not directly used in sidebar, but kept from original imports
  Star, // Not directly used in sidebar, but kept from original imports
  Award, // Not directly used in sidebar, but kept from original imports
  Briefcase, // Not directly used in sidebar, but kept from original imports
} from "lucide-react";

function SideBar({ activeTab, setActiveTab }) {
  return (
    <aside
      className="w-64 bg-white shadow-sm h-screen sticky top-0"
      aria-label="Company Dashboard Sidebar"
    >
      <nav className="mt-6 px-3">
        <h2 className="sr-only">Main Navigation</h2>{" "}
        {/* Hidden heading for screen readers */}
        <ul className="space-y-1" role="list">
          {" "}
          {/* Use ul for a list of navigation items */}
          {[
            { id: "overview", label: "Overview", icon: Home },
            { id: "applications", label: "Applications", icon: FileText },
            { id: "interviews", label: "Interviews", icon: Calendar },
            { id: "skills", label: "Skills & Practice", icon: BookOpen },
            { id: "companies", label: "Companies", icon: Globe },
            { id: "analytics", label: "Analytics", icon: BarChart3 },
            { id: "profile", label: "Profile", icon: User },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((item) => (
            <li key={item.id} role="listitem">
              {" "}
              {/* Wrap each button in a list item */}
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-current={activeTab === item.id ? "page" : undefined} // Indicate current page to screen readers
                aria-label={`Navigate to ${item.label}`} // Explicit label for navigation item
              >
                <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />{" "}
                {/* Hide icon from screen readers */}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
