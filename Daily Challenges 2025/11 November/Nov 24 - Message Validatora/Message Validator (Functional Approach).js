function isValidMessage(message, validator) {
  if (typeof message !== "string" || typeof validator !== "string") {
    return false;
  }

  const words = message.trim().split(/\s+/).filter(Boolean);

  return (
    words.length === validator.length &&
    words.every(
      (word, index) => word[0].toLowerCase() === validator[index].toLowerCase()
    )
  );
}
