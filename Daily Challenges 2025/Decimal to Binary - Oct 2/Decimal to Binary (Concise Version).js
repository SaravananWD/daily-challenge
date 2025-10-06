function toBinary(decimal) {
  if (decimal === 0) return 0;

  const binaryArr = [];
  let num = decimal;

  while (num > 0) {
    binaryArr.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  return binaryArr.join("");
}

console.log(toBinary(12));
