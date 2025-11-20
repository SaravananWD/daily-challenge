function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  return words.reduce((longest, current) => {
    const cleanCurrent = current.replace(/[^a-zA-Z]/g, "");
    const cleanLongest = longest.replace(/[^a-zA-Z]/g, "");

    return cleanCurrent.length > cleanLongest.length ? current : longest;
  });
}
