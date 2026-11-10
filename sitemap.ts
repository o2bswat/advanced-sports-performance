 const pages = [
    "",
    "/about",
    "/services",
    "/facility",
    "/products",
    "/blog",
    "/events",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
