/*
Challenge #35

Date: October 29, 2025
Name: Email Sorter
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-29
*/

function sort(emails) {
  const getDomain = (email) => {
    const indexOfAt = email.indexOf("@");
    return email.slice(indexOfAt + 1).toLowerCase();
  };
  const getEmail = (email) => {
    const indexOfAt = email.indexOf("@");
    return email.slice(0, indexOfAt).toLowerCase();
  };

  return emails.sort((a, b) => {
    const emailA = {
      mail: getEmail(a),
      domain: getDomain(a),
    };
    const emailB = {
      mail: getEmail(b),
      domain: getDomain(b),
    };

    const domainCompare =
      emailA.domain > emailB.domain
        ? 1
        : emailA.domain < emailB.domain
        ? -1
        : 0;

    if (domainCompare !== 0) {
      return domainCompare;
    }

    return emailA.mail > emailB.mail ? 1 : emailA.mail < emailB.mail ? -1 : 0;
  });
}

console.log(sort(["jill@mail.com", "john@example.com", "jane@example.com"]));
// should return ["jane@example.com", "john@example.com", "jill@mail.com"]
