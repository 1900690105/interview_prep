import { Eye } from "lucide-react";
import React from "react";

function MainContaint({
  sections,
  activeSection,
  renderSection,
  setActiveSection,
}) {
  return (
    <>
      <div className="lg:w-3/4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 capitalize">
                {sections.find((s) => s.id === activeSection)?.label}
              </h2>
              <p className="text-gray-600 mt-1">
                {activeSection === "personal" &&
                  "Let's start with your basic information"}
                {activeSection === "summary" &&
                  "Write a compelling professional summary"}
                {activeSection === "skills" &&
                  "Highlight your technical and soft skills"}
                {activeSection === "experience" &&
                  "Add your work experience details"}
                {activeSection === "projects" && "Showcase your best projects"}
                {activeSection === "education" &&
                  "Add your educational background"}
                {activeSection === "certifications" &&
                  "List your professional certifications"}
                {activeSection === "courses" &&
                  "Include relevant courses and training"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </div>

          {/* Section Content */}
          <div className="space-y-6">{renderSection()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                const currentIndex = sections.findIndex(
                  (s) => s.id === activeSection
                );
                if (currentIndex > 0) {
                  setActiveSection(sections[currentIndex - 1].id);
                }
              }}
              disabled={sections.findIndex((s) => s.id === activeSection) === 0}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Previous
            </button>

            <button
              onClick={() => {
                const currentIndex = sections.findIndex(
                  (s) => s.id === activeSection
                );
                if (currentIndex < sections.length - 1) {
                  setActiveSection(sections[currentIndex + 1].id);
                }
              }}
              disabled={
                sections.findIndex((s) => s.id === activeSection) ===
                sections.length - 1
              }
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContaint;
