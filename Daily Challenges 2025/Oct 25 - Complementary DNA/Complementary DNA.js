/*
Challenge #31

Date: October 25, 2025
Name: Complementary DNA
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-25
*/

function complementaryDNA(strand) {
  return strand
    .replaceAll("A", "1")
    .replaceAll("T", "A")
    .replaceAll("1", "T")
    .replaceAll("C", "1")
    .replaceAll("G", "C")
    .replaceAll("1", "G");
}

console.log(complementaryDNA("ATGCGTACGTTAGC"));
