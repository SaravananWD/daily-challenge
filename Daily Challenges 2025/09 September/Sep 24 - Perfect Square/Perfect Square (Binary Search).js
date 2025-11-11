function isPerfectSquare(n) {
  if (n < 0) return false;
  if (n < 2) return true; // 0 and 1 are perfect squares

  let left = 2;
  let right = Math.floor(n / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === n) return true;
    if (square < n) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
