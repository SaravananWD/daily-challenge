function to12(time) {
  // Input validation
  if (typeof time !== "string" || time.length !== 4 || !/^\d+$/.test(time)) {
    throw new Error("Input must be a 4-digit time string (HHMM)");
  }

  const hour = parseInt(time.slice(0, 2), 10);
  const minute = time.slice(2);

  if (hour < 0 || hour > 23 || parseInt(minute, 10) > 59) {
    throw new Error("Invalid time");
  }

  let convertedHour = hour;
  let amPM = "AM";

  if (hour === 0) {
    convertedHour = 12; // Midnight
  } else if (hour === 12) {
    amPM = "PM"; // Noon
  } else if (hour > 12) {
    convertedHour = hour - 12;
    amPM = "PM";
  }

  return `${convertedHour}:${minute} ${amPM}`;
}
