function count(text, pattern) {
  if (pattern.length === 0) return 0;
  return (text.match(new RegExp(`(?=${pattern})`, "g")) || []).length;
}
