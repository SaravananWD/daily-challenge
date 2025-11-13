function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return arr;

  // Normalize shift to be within [0, len-1]
  let shift = n % len;
  if (shift < 0) shift += len;
  if (shift === 0) return arr;

  // Use three reverses for O(n) time, O(1) space (if mutable)
  const result = [...arr];

  // Reverse entire array
  reverse(result, 0, len - 1);
  // Reverse first 'shift' elements
  reverse(result, 0, shift - 1);
  // Reverse remaining elements
  reverse(result, shift, len - 1);

  return result;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
