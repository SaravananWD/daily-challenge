function generateSlug(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove non-alphanumeric (except spaces)
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/\s/g, "%20"); // Replace spaces with %20
}
