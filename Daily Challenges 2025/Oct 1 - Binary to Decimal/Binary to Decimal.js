function toDecimal(binary) {
  return binary
    .split("")
    .reverse()
    .map((num, index) => {
      return num * num * Math.pow(2, index);
    })
    .reduce((acc, num) => acc + num, 0);
}

console.log(toDecimal("1010101"));
