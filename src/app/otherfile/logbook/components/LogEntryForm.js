import React, { useState } from "react";

function LogEntryForm({ onAdd }) {
  const [form, setForm] = useState({
    studentId: "",
    week: "",
    date: "",
    task: "",
    description: "",
    doubt: "",
    status: "",
    progress: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, progress: parseInt(form.progress) || 0 });
    setForm({
      studentId: "",
      week: "",
      date: "",
      task: "",
      description: "",
      doubt: "",
      status: "",
      progress: "",
      remarks: "",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Log New Activity
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Student ID
            </label>
            <input
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              placeholder="Enter ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Week
            </label>
            <input
              name="week"
              value={form.week}
              onChange={handleChange}
              placeholder="e.g. Week 3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Task Title
              </label>
              <input
                name="task"
                value={form.task}
                onChange={handleChange}
                placeholder="Enter task title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the task in detail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Doubt
            </label>
            <textarea
              name="doubt"
              value={form.doubt}
              onChange={handleChange}
              placeholder="Describe the task in detail"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Progress (%)
              </label>
              <div className="flex items-center">
                <input
                  name="progress"
                  type="range"
                  min="0"
                  max="100"
                  value={form.progress}
                  onChange={handleChange}
                  className="w-full mr-4"
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={form.progress}
                  onChange={(e) =>
                    setForm({ ...form, progress: e.target.value })
                  }
                  className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Remarks
              </label>
              <input
                name="remarks"
                value={form.remarks}
                onChange={handleChange}
                placeholder="Additional comments"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={() =>
              setForm({
                studentId: "",
                week: "",
                date: "",
                task: "",
                description: "",
                doubt: "",
                status: "",
                progress: "",
                remarks: "",
              })
            }
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md px-5 py-2 hover:bg-blue-700 transition font-medium"
          >
            Submit Log Entry
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogEntryForm;
