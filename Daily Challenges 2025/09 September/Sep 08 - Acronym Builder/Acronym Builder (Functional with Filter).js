function buildAcronym(str) {
  const exclusion = new Set(["a", "for", "an", "and", "by", "of"]);
  const words = str.split(/\s+/);

  return words
    .filter((word, index) => index === 0 || !exclusion.has(word.toLowerCase()))
    .map((word) => word[0].toUpperCase())
    .join("");
}
