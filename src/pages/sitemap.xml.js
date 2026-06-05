import { siteConfig } from "../data/siteConfig.js";
import { siteRoutes } from "../data/routes.js";

export function GET() {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteRoutes
  .filter((route) => route !== "/404")
  .map((route) => `  <url><loc>${new URL(route, `${baseUrl}/`).toString()}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
