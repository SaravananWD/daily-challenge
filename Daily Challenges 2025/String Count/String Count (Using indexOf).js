function count(text, pattern) {
  if (pattern.length === 0) return 0;

  let count = 0;
  let position = -1;

  while ((position = text.indexOf(pattern, position + 1)) !== -1) {
    count++;
  }

  return count;
}
