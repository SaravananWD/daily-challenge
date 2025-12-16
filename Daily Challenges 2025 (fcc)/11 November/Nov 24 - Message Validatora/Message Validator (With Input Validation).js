function isValidMessage(message, validator) {
  // Input validation
  if (typeof message !== "string" || typeof validator !== "string") {
    return false;
  }

  const words = message
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Check if word count matches validator length
  if (words.length !== validator.length) {
    return false;
  }

  // Validate each word's first letter
  for (let i = 0; i < words.length; i++) {
    const wordFirstLetter = words[i][0].toLowerCase();
    const validatorLetter = validator[i].toLowerCase();

    if (wordFirstLetter !== validatorLetter) {
      return false;
    }
  }

  return true;
}
