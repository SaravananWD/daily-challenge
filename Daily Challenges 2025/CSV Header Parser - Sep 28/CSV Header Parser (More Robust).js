function getHeadings(csv) {
  if (typeof csv !== "string") return [];

  return csv
    .split(",")
    .map((str) => str.trim())
    .filter((heading) => heading !== ""); // Optional: remove empty headings
}
