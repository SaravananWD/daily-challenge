function toBinary(decimal) {
  if (decimal === 0) return 0;

  const binaryArr = [];
  let num = decimal;

  while (num > 0) {
    binaryArr.push(num % 2);
    num = Math.floor(num / 2);
  }

  return binaryArr.reverse().join("");
}

console.log(toBinary(12));
