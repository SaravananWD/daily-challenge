function buildAcronym(str) {
  const exclusion = new Set(["a", "for", "an", "and", "by", "of"]);

  return str
    .split(/\s+/)
    .map((word, index) => {
      // Always include first word, check exclusion for others
      if (index === 0 || !exclusion.has(word.toLowerCase())) {
        return word[0].toUpperCase();
      }
      return "";
    })
    .join("");
}
