function generateSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .join("%20");
}
