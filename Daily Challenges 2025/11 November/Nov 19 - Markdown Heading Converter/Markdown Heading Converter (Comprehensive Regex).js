function convert(heading) {
  const match = heading.match(/^(\s*)(#{1,6})\s+(.+)$/);

  if (!match) return "Invalid format";

  const [, leadingSpaces, hashes, text] = match;

  // Validate: hashes must be 1-6 characters, text must exist
  if (hashes.length > 6 || !text.trim()) {
    return "Invalid format";
  }

  return `<h${hashes.length}>${text.trim()}</h${hashes.length}>`;
}
