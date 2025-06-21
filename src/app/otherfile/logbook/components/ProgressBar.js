"use client";

import React from "react";

function ProgressBar({ logs }) {
  // Calculate statistics
  const total = logs.length;
  const totalProgress = logs.reduce((sum, log) => sum + log.progress, 0);
  const average = total ? Math.round(totalProgress / total) : 0;

  // Calculate status counts
  const statusCounts = logs.reduce((counts, log) => {
    counts[log.status] = (counts[log.status] || 0) + 1;
    return counts;
  }, {});

  // Determine color based on progress
  const getProgressColor = (value) => {
    if (value >= 75) return "bg-green-500";
    if (value >= 50) return "bg-blue-500";
    if (value >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  const progressColor = getProgressColor(average);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Progress Summary
        </h2>
        <div className="mt-2 md:mt-0 text-sm text-gray-500">
          Based on {total} {total === 1 ? "entry" : "entries"}
        </div>
      </div>

      <div className="space-y-6">
        {/* Main progress bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium text-gray-800">
              Overall Progress
            </label>
            <span
              className={`text-lg font-bold ${
                average >= 50 ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {average}%
            </span>
          </div>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className={`${progressColor} h-4 rounded-full transition-all duration-500 ease-out`}
              style={{ width: `${average}%` }}
            />
          </div>
        </div>

        {/* Status breakdown */}
        {total > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Status Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-3 flex justify-between items-center">
                <span className="text-sm font-medium text-green-800">
                  Completed
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  {statusCounts["Completed"] || 0}
                </span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 flex justify-between items-center">
                <span className="text-sm font-medium text-blue-800">
                  In Progress
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {statusCounts["In Progress"] || 0}
                </span>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 flex justify-between items-center">
                <span className="text-sm font-medium text-yellow-800">
                  Pending
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                  {statusCounts["Pending"] || 0}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
