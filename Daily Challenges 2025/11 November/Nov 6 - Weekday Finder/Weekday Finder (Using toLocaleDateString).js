function getWeekday(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
}
console.log(getWeekday("2025-11-06"));
