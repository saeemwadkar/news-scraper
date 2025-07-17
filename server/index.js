import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import cors from "cors";

const app = express();
app.use(cors());

// Multiple RSS sources
const SOURCES = [
  "https://feeds.bbci.co.uk/news/rss.xml",
  "http://rss.cnn.com/rss/edition.rss",
  "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
  "https://www.theguardian.com/world/rss",
];

// Fetch & parse single RSS feed
const fetchRSS = async (url) => {
  try {
    const res = await axios.get(url, { headers: { "Cache-Control": "no-cache" } });
    const $ = cheerio.load(res.data, { xmlMode: true });
    const items = [];

    $("item").each((_, el) => {
      const title = $(el).find("title").text().trim();
      const link = $(el).find("link").text().trim();
      if (title && link) items.push({ title, link, source: url });
    });

    return items;
  } catch (err) {
    console.error(`❌ Failed to fetch ${url}:`, err.message);
    return [];
  }
};

// Shuffle array for randomness
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// ROOT route
app.get("/", (req, res) => {
  res.send(`
    <h2> News API is running!</h2>
    <p>Go to <a href="/api/scrape">/api/scrape</a> to fetch latest headlines.</p>
  `);
});

// Scraper API route
app.get("/api/scrape", async (req, res) => {
  try {
    // Fetch all RSS sources in parallel
    const allPromises = SOURCES.map((url) => fetchRSS(url));
    const results = await Promise.all(allPromises);

    // Merge all headlines
    const merged = results.flat();

    // Shuffle for random order each request
    const shuffled = shuffleArray(merged);

    // Limit to 30 random headlines
    const limited = shuffled.slice(0, 30);

    // Prevent caching
    res.set({
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "Surrogate-Control": "no-store",
    });

    res.json({ headlines: limited });
  } catch (err) {
    console.error("❌ Scrape failed:", err.message);
    res.status(500).json({ error: "Failed to fetch headlines" });
  }
});

//  Start backend
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
