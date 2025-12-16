const getWeekday = (dateString) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(dateString + "T00:00:00").getDay()];
