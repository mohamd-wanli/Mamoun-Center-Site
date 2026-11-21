import { useEffect, useState } from "react";
import { fetchWordPressNews } from "../services/wordpressNews";

const siteUrl = (import.meta.env.VITE_WORDPRESS_SITE_URL || "").trim();
const categorySlug = (import.meta.env.VITE_WORDPRESS_NEWS_CATEGORY || "news").trim();

export default function useWordPressNews() {
  const [result, setResult] = useState({ stories: [], status: siteUrl ? "loading" : "unconfigured" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!siteUrl) return;
    const controller = new AbortController();
    let active = true;
    const timeout = setTimeout(() => controller.abort(), 12000);
    setResult({ stories: [], status: "loading" });
    fetchWordPressNews({ siteUrl, categorySlug, signal: controller.signal })
      .then((stories) => { if (active) setResult({ stories, status: "ready" }); })
      .catch(() => { if (active) setResult({ stories: [], status: "error" }); })
      .finally(() => clearTimeout(timeout));
    return () => { active = false; clearTimeout(timeout); controller.abort(); };
  }, [attempt]);

  return { ...result, retry: () => setAttempt((value) => value + 1) };
}
