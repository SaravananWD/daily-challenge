function capitalize(paragraph) {
  if (!paragraph) return paragraph;

  // Capitalize first letter of paragraph
  let result = paragraph.replace(
    /^(\s*)([a-z])/,
    (_, spaces, letter) => spaces + letter.toUpperCase()
  );

  // Capitalize after sentence endings (handles multiple punctuation and spaces)
  result = result.replace(
    /([.!?]+)(\s*)([a-z])/g,
    (match, punctuation, spaces, letter) =>
      punctuation + spaces + letter.toUpperCase()
  );

  return result;
}
