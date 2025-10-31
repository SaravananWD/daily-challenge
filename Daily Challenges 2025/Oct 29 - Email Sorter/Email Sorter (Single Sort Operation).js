function sort(emails) {
  return emails.sort((a, b) => {
    const [userA, domainA] = a.split("@");
    const [userB, domainB] = b.split("@");

    // Compare domains first (case-insensitive)
    const domainCompare = domainA
      .toLowerCase()
      .localeCompare(domainB.toLowerCase());
    if (domainCompare !== 0) return domainCompare;

    // If domains are equal, compare usernames (case-insensitive)
    return userA.toLowerCase().localeCompare(userB.toLowerCase());
  });
}
