function to12(time) {
  const hour = parseInt(time.slice(0, 2), 10);
  const minute = time.slice(2);

  const period = hour >= 12 ? "PM" : "AM";
  const twelveHour = hour % 12 || 12; // Converts 0 to 12, 13-23 to 1-11

  return `${twelveHour}:${minute} ${period}`;
}
