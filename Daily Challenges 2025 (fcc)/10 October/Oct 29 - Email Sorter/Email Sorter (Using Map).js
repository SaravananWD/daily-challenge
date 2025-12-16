function sort(emails) {
  return [...emails].sort((a, b) => {
    const getParts = (email) => {
      const atIndex = email.indexOf("@");
      return {
        user: email.slice(0, atIndex).toLowerCase(),
        domain: email.slice(atIndex + 1).toLowerCase(),
      };
    };

    const partsA = getParts(a);
    const partsB = getParts(b);

    return (
      partsA.domain.localeCompare(partsB.domain) ||
      partsA.user.localeCompare(partsB.user)
    );
  });
}
