function canPost(message) {
  const length = message.length;
  return length <= 40
    ? "short post"
    : length <= 80
    ? "long post"
    : "invalid post";
}
