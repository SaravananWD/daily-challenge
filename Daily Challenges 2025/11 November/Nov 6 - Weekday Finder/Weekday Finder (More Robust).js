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

  const date = new Date(dateString + "T00:00:00");

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  return DAYS[date.getDay()];
}
