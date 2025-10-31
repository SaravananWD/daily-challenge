function sort(emails) {
  const getDomain = (email) => {
    const indexOfAt = email.indexOf("@");
    return email.slice(indexOfAt + 1).toLowerCase();
  };
  const getEmail = (email) => {
    const indexOfAt = email.indexOf("@");
    return email.slice(0, indexOfAt).toLowerCase();
  };

  const sortedByDomain = emails.sort((a, b) => {
    const domainA = getDomain(a);
    const domainB = getDomain(b);
    return domainA > domainB ? 1 : domainA < domainB ? -1 : 0;
  });

  let prevDomain = "";
  const emailSets = [];
  let tempSet = [];

  for (let i = 0; i < sortedByDomain.length; i++) {
    const email = sortedByDomain[i];
    const currentDomain = getDomain(email);
    if (prevDomain === "" || prevDomain === currentDomain) {
      tempSet.push(email);
    } else {
      emailSets.push(tempSet);
      tempSet = [];
      tempSet.push(email);
    }
    prevDomain = currentDomain;
    if (i === sortedByDomain.length - 1) {
      emailSets.push(tempSet);
    }
  }

  sortedEmailSets = [];
  emailSets.forEach((set) => {
    const sortedSet = set.sort((a, b) => {
      const emailA = getEmail(a);
      const emailB = getEmail(b);
      return emailA > emailB ? 1 : emailA < emailB ? -1 : 0;
    });
    sortedEmailSets.push(sortedSet);
  });

  return sortedEmailSets.reduce((acc, set) => {
    set.map((e) => acc.push(e));
    return acc;
  }, []);
}

console.log(sort(["jill@mail.com", "john@example.com", "jane@example.com"]));
// should return ["jane@example.com", "john@example.com", "jill@mail.com"]
//               ['jane@example.com', 'john@example.com', 'jill@mail.com']
/*
1 Sort by domain name X
2 Split into sets
3 Run a loop and sort each set
4 Merge all and return
*/
