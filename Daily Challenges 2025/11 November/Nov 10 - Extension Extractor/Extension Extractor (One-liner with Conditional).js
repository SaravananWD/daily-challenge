function getExtension(filename) {
  const ext = filename.slice(filename.lastIndexOf(".") + 1);
  return ext && !ext.includes(".") ? ext : "none";
}
