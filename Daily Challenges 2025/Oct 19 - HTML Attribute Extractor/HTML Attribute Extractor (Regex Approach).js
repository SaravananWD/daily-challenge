function extractAttributes(element) {
  const attributes = [];
  const attrRegex = /(\w+)=(["'])(.*?)\2/g;
  let match;

  while ((match = attrRegex.exec(element)) !== null) {
    attributes.push(`${match[1]}, ${match[3]}`);
  }

  return attributes;
}
