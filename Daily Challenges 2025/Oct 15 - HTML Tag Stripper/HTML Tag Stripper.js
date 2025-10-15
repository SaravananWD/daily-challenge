function stripTags(html) {
  const string = [];

  let isText = true;
  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") {
      isText = false;
    } else if (html[i] === ">") {
      isText = true;
    } else if (isText) {
      string.push(html[i]);
    }
  }

  return string.join("");
}

console.log(stripTags('<a href="#">Click here</a>'));
