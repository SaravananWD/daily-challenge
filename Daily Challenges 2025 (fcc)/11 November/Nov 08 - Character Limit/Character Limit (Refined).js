function canPost(message) {
  const length = message.length;

  if (length <= 40) return "short post";
  if (length <= 80) return "long post";
  return "invalid post";
}
