const shiftArray = (arr, n) => {
  const len = arr.length;
  if (len === 0) return arr;
  const shift = ((n % len) + len) % len;
  return shift === 0 ? arr : [...arr.slice(shift), ...arr.slice(0, shift)];
};
