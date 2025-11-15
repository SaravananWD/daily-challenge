function daysUntilWeekend(dateString) {
  const date = new Date(dateString + "T00:00:00Z");
  const dayIndex = date.getUTCDay();

  switch (dayIndex) {
    case 0: // Sunday
    case 6: // Saturday
      return "It's the weekend!";
    case 5: // Friday
      return "1 day until the weekend.";
    default: // Monday-Thursday
      return `${6 - dayIndex} days until the weekend.`;
  }
}
