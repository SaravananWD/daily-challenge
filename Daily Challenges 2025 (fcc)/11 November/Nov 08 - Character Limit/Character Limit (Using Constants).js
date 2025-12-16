function canPost(message) {
  const SHORT_LIMIT = 40;
  const LONG_LIMIT = 80;

  const length = message.length;

  if (length <= SHORT_LIMIT) return "short post";
  if (length <= LONG_LIMIT) return "long post";
  return "invalid post";
}
