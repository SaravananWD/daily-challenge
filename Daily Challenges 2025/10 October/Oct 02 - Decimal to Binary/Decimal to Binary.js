function toBinary(decimal) {
  if (decimal === 0) return 0;

  const binaryArr = [];
  let num = decimal;

  while (num > 0) {
    num % 2 ? binaryArr.unshift(1) : binaryArr.unshift(0);
    num = Math.floor(num / 2);
  }

  return binaryArr.join("");
}

console.log(toBinary(12));
