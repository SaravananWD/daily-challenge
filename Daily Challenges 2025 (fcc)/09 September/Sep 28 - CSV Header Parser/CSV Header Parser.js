function getHeadings(csv) {
  return csv.split(",").map((str) => str.trim());
}

console.log(getHeadings("name,age,city"));
