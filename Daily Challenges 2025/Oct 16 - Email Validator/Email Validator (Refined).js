function validate(email) {
  // Basic @ check
  const atIndex = email.indexOf("@");
  if (atIndex === -1 || email.indexOf("@", atIndex + 1) !== -1) {
    return false;
  }

  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex + 1);

  // Local part validation
  if (!/^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?$/.test(localPart)) {
    return false; // Starts/ends with dot or invalid chars
  }

  // Domain part validation
  const lastDotIndex = domainPart.lastIndexOf(".");
  if (lastDotIndex === -1 || lastDotIndex === domainPart.length - 1) {
    return false; // No dot or ends with dot
  }

  const domainName = domainPart.slice(0, lastDotIndex);
  const extension = domainPart.slice(lastDotIndex + 1);

  if (!/^[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?$/.test(domainName)) {
    return false; // Invalid domain name
  }

  if (!/^[a-zA-Z]{2,}$/.test(extension)) {
    return false; // Extension not 2+ letters
  }

  // Check consecutive dots in both parts
  if (/(\.\.)/.test(localPart) || /(\.\.)/.test(domainName)) {
    return false;
  }

  return true;
}
