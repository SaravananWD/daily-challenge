function formatNumber(number) {
  const cleaned = number.toString().replace(/\D/g, "");

  if (cleaned.length !== 11) {
    throw new Error("Input must contain exactly 11 digits");
  }

  return cleaned.replace(/(\d)(\d{3})(\d{3})(\d{4})/, "+$1 ($2) $3-$4");
}
