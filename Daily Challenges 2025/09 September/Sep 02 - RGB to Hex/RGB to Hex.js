/*
Challenge #92

Date: September 2, 2025
Name: RGB to Hex
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-02
*/

function rgbToHex(rgb) {
  const rgbValues = rgb.replace(/[^0-9,]/g, "").split(",");

  const hexaValues = rgbValues.map((dec) => {
    const converted = getHexa(dec);
    if (converted.length === 1) return "0" + converted;
    return converted;
  });

  return "#" + hexaValues.join("").toLowerCase();
}

console.log("Function output:", rgbToHex("rgb(1, 11, 111)"));

function getHexa(dec) {
  if (dec === 0) return "00";

  const HEX_VALUES = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  let q = dec;
  let r = [];
  while (q !== 0) {
    r.unshift(q % 16);
    q = Math.floor(q / 16);
  }

  return r.map((n) => (n > 9 ? HEX_VALUES[n] : n)).join("");
}
console.log(getHexa(0));
