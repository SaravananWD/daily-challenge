/*
Challenge #22

Date: October 16, 2025
Name: Email Validator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-16
*/

function validate(email) {
  const parts = email.split("").reduce(
    (acc, val, index) => {
      // fetch local part
      if (val === "@") {
        acc.atCount++;
        acc.localPartEnd = true;
      }
      if (!acc.localPartEnd) {
        acc.localPart.push(val);
      }

      // fetch domain part
      if (acc.localPartEnd && !acc.domainPartEnd && val === ".") {
        acc.domainPartEnd = true;
      }
      if (acc.localPartEnd && !acc.domainPartEnd && val !== "@") {
        acc.domainPart.push(val);
      }

      // fetch extension part
      if (acc.domainPartEnd && val !== ".") {
        acc.extensionPart.push(val);
      }

      // two dots check
      if (val === "." && acc.oneDot) {
        acc.twoDots = true;
      }
      acc.oneDot = val === ".";

      return acc;
    },
    {
      localPart: [],
      domainPart: [],
      extensionPart: [],
      localPartEnd: false,
      domainPartEnd: false,
      atCount: 0,
      twoDots: false,
      oneDot: false,
    }
  );

  const localPartRegex = /^([a-z\d]|([a-z\d][\w.-]*[a-z\d]))$/i;

  const extensionPartTest = /^(?=.*[a-zA-Z].*[a-zA-Z])[a-zA-Z]*$/.test(
    parts.extensionPart.join("")
  );

  if (true) {
    // console.log(email);
    //   console.log(
    //     `Email: ${email} | Multiple @: ${parts.atCount > 1} | No @: ${
    //       parts.atCount === 0
    //     } | Continuous dots: ${
    //       parts.twoDots
    //     } | Local part char limit fail: ${!localPartRegex.test(
    //       parts.localPart.join("")
    //     )} | Extension part rules: ${
    //       parts.extensionPart.length < 2 || !extensionPartTest
    //     }`
    //   );
  }

  // Multiple @:
  if (parts.atCount > 1) return false;

  // No @:
  if (parts.atCount === 0) return false;

  // Continuous dots:
  if (parts.twoDots) return false;

  // Local part char limit fail:
  if (!localPartRegex.test(parts.localPart.join(""))) return false;

  // Extension part rules:
  if (parts.extensionPart.length < 2 || !extensionPartTest) return false;

  return true;
}

console.log(validate("a@b.cd"));
console.log(validate("hell.-w.rld@example.com"));
console.log(validate(".b@sh.rc"));
console.log(validate("example@test.c0"));
console.log(validate("freecodecamp.org"));
console.log(validate("develop.ment_user@c0D!NG.R.CKS"));
console.log(validate("hello.@wo.rld"));
console.log(validate("hello@world..com"));
console.log(validate("git@commit@push.io"));
