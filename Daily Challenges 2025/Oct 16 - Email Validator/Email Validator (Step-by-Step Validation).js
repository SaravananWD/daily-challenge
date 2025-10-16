function validate(email) {
  // Step 1: Exactly one @
  const atCount = (email.match(/@/g) || []).length;
  if (atCount !== 1) return false;

  const [localPart, domain] = email.split("@");

  // Step 2: Local part validation
  if (!/^[a-zA-Z0-9][\w.-]*[a-zA-Z0-9]$/.test(localPart)) {
    return false; // Invalid start/end or characters
  }

  // Step 3: Domain must contain at least one dot
  if (!domain.includes(".")) return false;

  // Step 4: Split domain and extension
  const lastDotIndex = domain.lastIndexOf(".");
  const domainName = domain.slice(0, lastDotIndex);
  const extension = domain.slice(lastDotIndex + 1);

  // Step 5: Domain name validation
  if (!/^[a-zA-Z0-9]([\w.-]*[a-zA-Z0-9])?$/.test(domainName)) {
    return false;
  }

  // Step 6: Extension validation (2+ letters)
  if (!/^[a-zA-Z]{2,}$/.test(extension)) return false;

  // Step 7: No consecutive dots
  if (localPart.includes("..") || domainName.includes("..")) {
    return false;
  }

  return true;
}
