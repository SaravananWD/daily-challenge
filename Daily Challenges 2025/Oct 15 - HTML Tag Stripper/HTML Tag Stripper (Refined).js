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
