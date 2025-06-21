"use client";

import React from "react";

function SideBar({ sections, activeSection, setActiveSection }) {
  return (
    <>
      <div className="lg:w-1/4 mb-8 lg:mb-0">
        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Progress Indicator */}
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress
              </span>
              <span className="text-sm text-gray-500">3/8</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                style={{ width: "37.5%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
