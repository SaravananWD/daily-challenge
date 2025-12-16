function lcm(a, b) {
  if (a === 0 || b === 0) return 0;

  let larger = Math.max(Math.abs(a), Math.abs(b));
  let smaller = Math.min(Math.abs(a), Math.abs(b));
  let lcm = larger;

  while (lcm % smaller !== 0) {
    lcm += larger;
  }

  return lcm;
}
