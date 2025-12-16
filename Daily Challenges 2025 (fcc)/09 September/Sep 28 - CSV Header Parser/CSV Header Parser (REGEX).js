function getHeadings(csv) {
  // Handles quoted fields with commas: "last, first", age, city
  return (
    csv
      .match(/(?:^|,)(?:\s*"([^"]*)"\s*|\s*([^,]*)\s*)/g)
      ?.map((match) => match.replace(/^,/, "").trim().replace(/^"|"$/g, "")) ||
    []
  );
}
