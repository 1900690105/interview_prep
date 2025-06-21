"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Dynamically import component with `ssr: false` to prevent document access at build time
const CourseInterface = dynamic(() => import("../components/NotesSection"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <Suspense
        fallback={<div className="text-center py-10">Loading notes...</div>}
      >
        <CourseInterface />
      </Suspense>
    </main>
  );
}
