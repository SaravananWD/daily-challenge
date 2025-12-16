function extractAttributes(element) {
  // Extract content between < and >
  const startIndex = element.indexOf("<") + 1;
  const endIndex = element.indexOf(">");
  let tagContent = element.slice(startIndex, endIndex).trim();

  // Remove tag name and handle self-closing
  const firstSpace = tagContent.indexOf(" ");
  if (firstSpace === -1) return []; // No attributes

  tagContent = tagContent.slice(firstSpace + 1).trim();
  if (tagContent.endsWith("/")) {
    tagContent = tagContent.slice(0, -1).trim();
  }

  // Parse attributes using regex
  const attrRegex = /(\w+)=(["'])(.*?)\2/g;
  const attributes = [];
  let match;

  while ((match = attrRegex.exec(tagContent)) !== null) {
    attributes.push(`${match[1]}, ${match[3]}`);
  }

  return attributes;
}
