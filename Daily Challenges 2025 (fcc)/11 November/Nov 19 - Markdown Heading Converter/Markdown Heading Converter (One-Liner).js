function convert(heading) {
  const match = heading.match(/^\s*(#{1,6})\s+(\S[\s\S]*?)\s*$/);
  return match
    ? `<h${match[1].length}>${match[2].trim()}</h${match[1].length}>`
    : "Invalid format";
}
