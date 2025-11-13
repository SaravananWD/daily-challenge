function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return arr;

  const result = new Array(len);
  for (let i = 0; i < len; i++) {
    // Calculate new index with wrap-around
    const newIndex = (i - (n % len) + len) % len;
    result[newIndex] = arr[i];
  }
  return result;
}
