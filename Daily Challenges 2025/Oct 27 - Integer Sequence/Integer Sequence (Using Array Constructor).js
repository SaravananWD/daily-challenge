function sequence(n) {
  return [...Array(n)].map((_, i) => i + 1).join("");
}
