function rotate(arr, n) {
  n = n % arr.length;
  return [...arr.slice(-n), ...arr.slice(0, -n)];
}

console.log(rotate([1, 2, 3, 4], 3));
