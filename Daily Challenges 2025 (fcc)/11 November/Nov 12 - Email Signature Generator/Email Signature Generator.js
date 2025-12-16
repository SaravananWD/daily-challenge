/*
Challenge #57

Date: November 12, 2025
Name: Email Signature Generator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-12
*/

function generateSignature(name, title, company) {
  const charCode = name[0].toUpperCase().charCodeAt(0);

  const prefix = (() => {
    if (charCode >= 65 && charCode <= 73) return ">>";
    else if (charCode >= 74 && charCode <= 82) return "--";
    else if (charCode >= 83 && charCode <= 90) return "::";
    else return "";
  })();

  return `${prefix}${name}, ${title} at ${company}`;
}

console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"));
// return "--Quinn Waverly, Founder and CEO at TechCo"
