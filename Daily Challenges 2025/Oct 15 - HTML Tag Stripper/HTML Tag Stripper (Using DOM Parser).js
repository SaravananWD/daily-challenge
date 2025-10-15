function stripTags(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>'));
