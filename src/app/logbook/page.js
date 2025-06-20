"use client";

import React, { useState } from "react";
import LogEntryForm from "./components/LogEntryForm";
import LogTable from "./components/LogTable";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [logs, setLogs] = useState([]);

  const handleAddLog = (log) => {
    setLogs((prev) => [...prev, log]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📘 Student Log Book Tracker</h1>
      <ProgressBar logs={logs} />
      <LogEntryForm onAdd={handleAddLog} />
      <LogTable logs={logs} />
    </div>
  );
}

export default App;
