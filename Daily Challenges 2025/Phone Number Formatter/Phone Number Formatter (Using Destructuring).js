function formatNumber(number) {
  if (
    typeof number !== "string" ||
    number.length !== 11 ||
    !/^\d+$/.test(number)
  ) {
    throw new Error("Input must be an 11-digit string");
  }

  const [countryCode, ...rest] = number;
  const areaCode = rest.slice(0, 3).join("");
  const firstPart = rest.slice(3, 6).join("");
  const secondPart = rest.slice(6).join("");

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}
