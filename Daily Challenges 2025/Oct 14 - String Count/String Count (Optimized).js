function count(text, pattern) {
  if (pattern.length === 0) return 0;

  let count = 0;
  for (let i = 0; i <= text.length - pattern.length; i++) {
    if (text.slice(i, i + pattern.length) === pattern) {
      count++;
    }
  }
  return count;
}
