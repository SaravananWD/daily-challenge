function getExtension(filename) {
  const lastDotIndex = filename.lastIndexOf(".");

  // Check if dot exists and there's at least one character after it
  if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) {
    return "none";
  }

  return filename.slice(lastDotIndex + 1);
}
