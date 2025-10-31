/*
Challenge details

Date: October 11, 2025
Name: Hex to Decimal
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-11
*/

function hexToDecimal(hex) {
  const HEX_VALUES = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  const numberedHexArr = hex
    .split("")
    .map((val) => (!!HEX_VALUES[val] ? HEX_VALUES[val] : Number(val)));

  const decimal = numberedHexArr
    .map((hexNum, index) => {
      const pow = numberedHexArr.length - 1 - index;
      return hexNum * Math.pow(16, pow);
    })
    .reduce((sum, num) => sum + num, 0);

  return decimal;
}
console.log(hexToDecimal("2E"));

/*
Math Rules of Hex To Decimal Conversion:

1. Convert A-F to their decimal equavalents 10 - 15
2. Multiply each hexadecimal digit by 16 raised to the power of its position
   (starting from (0) on the right)
3. Sum the results
*/
