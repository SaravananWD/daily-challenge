function getExtension(filename) {
  const match = filename.match(/\.([^.]+)$/);
  return match ? match[1] : "none";
}
