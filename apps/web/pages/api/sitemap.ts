const ABSOLUTE_PATH = process.env.NEXT_PUBLIC_ABSOLUTE_PATH || "https://7879.co"

export default function handler(_, res) {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/xml")

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600")

  const urls: { url: string; priority: number }[] = [
    {
      url: "",
      priority: 1,
    },
  ]
  const now = new Date().toISOString()

  // generate sitemap here
  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urls.map(
    (u) => `<url>
      <loc>${ABSOLUTE_PATH}/${u.url}</loc>
      <priority>${u.priority}</priority>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
    </url>
  `
  )}
    </urlset>`

  res.end(xml)
}
