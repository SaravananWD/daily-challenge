const countWords = (sentence) =>
  sentence && typeof sentence === "string"
    ? sentence.trim().split(/\s+/).filter(Boolean).length
    : 0;
