function sequence(n) {
  if (n === 1) return "1";
  return sequence(n - 1) + n;
}
