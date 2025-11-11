function generateSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove invalid characters
    .replace(/\s+/g, "%20") // Replace spaces (single pass)
    .replace(/^%20|%20$/g, ""); // Remove leading/trailing %20
}
