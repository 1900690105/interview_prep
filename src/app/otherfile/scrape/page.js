// app/page.js
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/scrape");
      const data = await response.json();
      setHeadings(data.headings);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scraped Headings</h1>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>{heading}</li>
        ))}
      </ul>
    </div>
  );
}
