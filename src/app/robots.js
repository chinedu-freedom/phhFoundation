export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://phhfoundation.org/sitemap.xml",
  };
}
