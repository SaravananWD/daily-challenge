function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}
