const generateSlug = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "%20")
    .replace(/^%20|%20$/g, "");
