// app/api/scrape/route.js
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(request) {
  const url = "https://www.dice.com/"; // Replace with the URL you want to scrape

  try {
    // Fetch HTML from the page
    const { data } = await axios.get(url);

    // Load HTML into cheerio for parsing
    const $ = cheerio.load(data);

    // Example: Extract all <h2> headings
    const headings = [];
    $("title").each((index, element) => {
      headings.push($(element).text());
    });

    // Respond with the scraped data as JSON
    return new Response(JSON.stringify({ headings }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error scraping data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
