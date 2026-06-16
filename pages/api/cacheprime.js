async function primeCacheUrls(urls) {
  const results = [];

  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "CustomCachePrimingAgent/1.0" },
        cache: "no-store",
      });
      console.log(`Primed: ${url} → ${res.status}`);
      results.push({ url, status: res.status, success: true });
    } catch (err) {
      console.error(`Failed: ${url} → ${err.message}`);
      results.push({ url, error: err.message, success: false });
    }
  }

  const succeeded = results.filter((r) => r.success).length;
  console.log(`Cache priming complete. ${succeeded}/${results.length} succeeded.`);
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = req.headers["x-cache-prime-secret"];

  if (secret !== process.env.CACHE_PRIME_SECRET) {
    return res.status(401).send("Unauthorized");
  }

  const urls = req.body?.urls;

  if (!Array.isArray(urls) || urls.length === 0) {
    return res.status(400).json({ error: "No URLs provided" });
  }

  // Fire and forget — respond immediately, prime in background
  primeCacheUrls(urls);

  return res.status(202).json({ message: "Cache priming started", count: urls.length });
}
