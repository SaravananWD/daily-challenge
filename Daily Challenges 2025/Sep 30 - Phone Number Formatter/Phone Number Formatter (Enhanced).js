function formatNumber(number) {
  if (typeof number !== "string" || number.length !== 11) {
    throw new Error("Input must be an 11-digit string");
  }

  if (!/^\d+$/.test(number)) {
    throw new Error("Input must contain only digits");
  }

  return `+${number[0]} (${number.slice(1, 4)}) ${number.slice(
    4,
    7
  )}-${number.slice(7)}`;
}
