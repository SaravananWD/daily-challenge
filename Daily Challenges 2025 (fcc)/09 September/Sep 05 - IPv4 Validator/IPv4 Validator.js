/*
Challenge #86

Date: September 5, 2025
Name: IPv4 Validator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-05
*/

function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;

  for (let num of parts) {
    const integer = Number.parseInt(num);
    const isInteger = Number.isInteger(integer);

    if (!isInteger || num > 255 || num < 0) return false;
    if (num.length > String(integer).length) return false;
  }

  return true;
}
console.log(isValidIPv4("255.01.50.111"));
