// src/app/api/jobs/route.js
import axios from "axios";

export async function GET(request) {
  const url = "https://api.adzuna.com/v1/api/jobs/in/search/1"; // Use 'in' for India
  const query = new URL(request.url).searchParams.get("q");
  const location = ""; // Set default location to Maharashtra

  try {
    const response = await axios.get(url, {
      params: {
        app_id: process.env.APP_ID,
        app_key: process.env.APP_KEY,
        what: query,
        where: location, // Include location parameter
        results_per_page: 10,
      },
    });

    return new Response(JSON.stringify(response.data.results), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch jobs" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
