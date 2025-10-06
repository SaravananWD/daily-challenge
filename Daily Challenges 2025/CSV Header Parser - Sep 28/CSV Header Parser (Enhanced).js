function getHeadings(csv) {
  if (!csv || csv.trim() === "") return [];
  return csv.split(",").map((str) => str.trim());
}
