function spookify(boo) {
  let count = 0;
  return boo
    .replace(/[_-]/g, "~")
    .replace(/[^~]/g, (char) =>
      count++ % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    );
}
