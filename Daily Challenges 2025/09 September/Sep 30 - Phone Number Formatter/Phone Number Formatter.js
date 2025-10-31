function formatNumber(number) {
  return `+${number.slice(0, 1)} (${number.slice(1, 4)}) ${number.slice(
    4,
    7
  )}-${number.slice(7)}`;
}

console.log(formatNumber("05552340182"));
console.log(formatNumber("15554354792"));
