function sort(emails) {
  return emails
    .map((email) => {
      const atIndex = email.indexOf("@");
      return {
        original: email,
        sortKey:
          email.slice(atIndex + 1).toLowerCase() +
          "|" +
          email.slice(0, atIndex).toLowerCase(),
      };
    })
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
    .map((item) => item.original);
}
