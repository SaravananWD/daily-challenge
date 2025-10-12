function formatNumber(number) {
  const match = number.toString().match(/^(\d)(\d{3})(\d{3})(\d{4})$/);

  if (!match) {
    throw new Error("Input must be an 11-digit number");
  }

  const [_, countryCode, areaCode, firstPart, secondPart] = match;
  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}
