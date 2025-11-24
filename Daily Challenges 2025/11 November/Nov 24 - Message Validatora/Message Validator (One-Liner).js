const isValidMessage = (message, validator) =>
  typeof message === "string" &&
  typeof validator === "string" &&
  message.trim().split(/\s+/).filter(Boolean).length === validator.length &&
  message
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .every((w, i) => w[0].toLowerCase() === validator[i].toLowerCase());
