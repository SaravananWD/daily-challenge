function canPost(message) {
  const length = message.length;

  switch (true) {
    case length <= 40:
      return "short post";
    case length <= 80:
      return "long post";
    default:
      return "invalid post";
  }
}
