function getWeekday(dateString) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString + "T00:00:00"); // Explicitly set time to avoid timezone issues
  return DAYS[date.getDay()];
}
