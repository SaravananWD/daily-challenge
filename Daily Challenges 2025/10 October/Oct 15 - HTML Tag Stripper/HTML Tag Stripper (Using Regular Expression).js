function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}
console.log(stripTags('<p class="center">Hello <b>World</b>!</p>'));
