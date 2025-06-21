"use client";

import React from "react";

function LogTable({ logs }) {
  // Handle empty state
  if (!logs || logs.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
        <p className="text-lg">No log entries available</p>
        <p className="text-sm mt-2">
          Use the form above to add your first entry
        </p>
      </div>
    );
  }

  // Status badge component
  const StatusBadge = ({ status }) => {
    const badgeClasses = {
      Completed: "bg-green-100 text-green-800",
      "In Progress": "bg-blue-100 text-blue-800",
      Pending: "bg-yellow-100 text-yellow-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          badgeClasses[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  // Progress bar component
  const ProgressBar = ({ value }) => {
    let bgColor = "bg-red-500";
    if (value >= 70) bgColor = "bg-green-500";
    else if (value >= 30) bgColor = "bg-yellow-500";

    return (
      <div className="flex items-center">
        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
          <div
            className={`${bgColor} h-2 rounded-full`}
            style={{ width: `${value}%` }}
          />
        </div>
        <span className="text-xs font-medium">{value}%</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Activity Log</h2>
        <span className="text-sm text-gray-500">{logs.length} entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Week
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doubt
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {logs.map((log, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {log.studentId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{log.week}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.task}</td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate" title={log.description}>
                    {log.description}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="max-w-xs truncate" title={log.doubt}>
                    {log.doubt}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={log.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ProgressBar value={log.progress} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{log.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LogTable;
