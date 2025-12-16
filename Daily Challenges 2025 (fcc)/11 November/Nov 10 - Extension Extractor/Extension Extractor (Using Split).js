function getExtension(filename) {
  const parts = filename.split(".");

  // If only one part (no dots) or empty part after last dot
  if (parts.length === 1 || parts[parts.length - 1] === "") {
    return "none";
  }

  return parts[parts.length - 1];
}
