function classification(temp) {
  if (typeof temp !== "number" || temp < 0) {
    return "Invalid temperature";
  }

  // Ordered by temperature ranges
  const classifications = [
    { type: "M", max: 3699 },
    { type: "K", max: 5199 },
    { type: "G", max: 5999 },
    { type: "F", max: 7499 },
    { type: "A", max: 9999 },
    { type: "B", max: 29999 },
    { type: "O", max: Infinity },
  ];

  return (
    classifications.find(({ max }) => temp <= max)?.type || "Unexpected error"
  );
}
