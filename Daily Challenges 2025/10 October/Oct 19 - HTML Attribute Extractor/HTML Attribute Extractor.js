/*
Challenge #25

Date: October 19, 2025
Name: HTML Attribute Extractor
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-19
*/
function extractAttributes(element) {
  // fetch everything inside < and >
  let startTagBody = element
    .slice(element.indexOf("<") + 1, element.indexOf(">"))
    .split(" ")
    .slice(1)
    .join(" ");

  // remove / if self closing tag
  startTagBody =
    startTagBody[startTagBody.length - 1] === "/"
      ? startTagBody.slice(0, startTagBody.length - 2)
      : startTagBody;

  const strArr = [];
  let pushFlag = 0;
  for (let i = 0; i < startTagBody.length; i++) {
    const char = startTagBody[i];

    if (pushFlag !== 2) {
      strArr.push(startTagBody[i]);
    } else {
      strArr.push("*");
      pushFlag = 0;
    }
    if (char === '"' || char === "'") pushFlag++;
  }
  startTagBody = strArr.join("").split("*");

  let attributes = [];
  if (startTagBody[0] !== "") {
    attributes = startTagBody.map((attr) => {
      const splitAttr = attr.split("=");
      splitAttr[1] = splitAttr[1].slice(1, -1);

      return splitAttr.join(", ");
    });
  }

  return attributes;
}

console.log(extractAttributes('<span class="red"></span>'));
