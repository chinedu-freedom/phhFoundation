export default function sitemap() {
  const baseUrl = "https://phhfoundation.org";
  
  const routes = [
    "",
    "/about",
    "/programs",
    "/projects",
    "/impact",
    "/get-involved",
    "/partner",
    "/donate",
    "/events",
    "/faq",
    "/contact",
    "/transparency",
    "/privacy",
    "/terms",
    "/cookies",
    "/safeguarding",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "/blog" || route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/donate" ? 0.9 : 0.7,
  }));
}
