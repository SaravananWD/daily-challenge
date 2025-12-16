function convert(heading) {
  // Remove leading/trailing spaces but preserve structure
  const trimmed = heading.trim();
  if (trimmed === "") return "Invalid format";

  // Find the first space after potential hashes
  const firstSpaceIndex = trimmed.indexOf(" ");

  // Must have space and it must come after at least one hash
  if (firstSpaceIndex === -1 || firstSpaceIndex === 0) {
    return "Invalid format";
  }

  const potentialHashes = trimmed.slice(0, firstSpaceIndex);
  const text = trimmed.slice(firstSpaceIndex + 1).trim();

  // Validate hashes and text
  if (!/^#{1,6}$/.test(potentialHashes) || text === "") {
    return "Invalid format";
  }

  return `<h${potentialHashes.length}>${text}</h${potentialHashes.length}>`;
}
