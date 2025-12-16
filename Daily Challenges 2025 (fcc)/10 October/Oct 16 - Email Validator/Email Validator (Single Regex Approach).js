function validate(email) {
  const emailRegex =
    /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) return false;

  // Additional check for consecutive dots
  const [localPart, domainWithExtension] = email.split("@");
  const domain = domainWithExtension.slice(
    0,
    domainWithExtension.lastIndexOf(".")
  );

  return !/(\.\.)/.test(localPart) && !/(\.\.)/.test(domain);
}
