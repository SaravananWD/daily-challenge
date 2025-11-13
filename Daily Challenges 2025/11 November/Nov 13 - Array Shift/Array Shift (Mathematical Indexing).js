function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return arr;

  // Normalize shift to positive and handle wrap-around
  const shift = ((n % len) + len) % len;
  if (shift === 0) return arr;

  return arr.slice(shift).concat(arr.slice(0, shift));
}
