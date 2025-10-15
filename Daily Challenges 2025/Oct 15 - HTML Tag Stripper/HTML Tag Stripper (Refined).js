/*
Challenge #21

Date: October 15, 2025
Name: HTML Tag Stripper
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-15
*/

function stripTags(html) {
  const result = [];
  let insideTag = false;

  for (let i = 0; i < html.length; i++) {
    const char = html[i];

    if (char === "<") {
      insideTag = true;
    } else if (char === ">") {
      insideTag = false;
    } else if (!insideTag) {
      result.push(char);
    }
  }

  return result.join("");
}
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>'));
