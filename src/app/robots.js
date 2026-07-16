export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/logout", "/register"],
    },
    sitemap: "https://phhfoundation.org/sitemap.xml",
  };
}
