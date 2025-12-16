function buildAcronym(str) {
  const exclusion = new Set(["a", "for", "an", "and", "by", "of"]);
  const words = str.split(/\s+/);
  const acronym = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const lowerWord = word.toLowerCase();

    // Include if it's the first word OR not in exclusion list
    if (i === 0 || !exclusion.has(lowerWord)) {
      acronym.push(word[0].toUpperCase());
    }
  }

  return acronym.join("");
}
