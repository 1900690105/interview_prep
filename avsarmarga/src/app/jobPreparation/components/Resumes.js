"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Resume from "./resume-templete/components/Resume";

const ResumeHome = () => {
  const handleDownload = () => {
    window.print();
  };
  return (
    <>
      <div id="no-print">
        <Button onClick={handleDownload} className="w-36 h-12">
          Download Resume
        </Button>
      </div>
      <div id="print-area">
        <Resume />
      </div>
    </>
  );
};

export default ResumeHome;
