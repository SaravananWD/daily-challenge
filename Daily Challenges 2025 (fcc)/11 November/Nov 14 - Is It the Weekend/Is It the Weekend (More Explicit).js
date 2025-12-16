function daysUntilWeekend(dateString) {
  const date = new Date(dateString + "T00:00:00Z");
  const dayOfWeek = date.getUTCDay();

  // Weekend check
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return "It's the weekend!";
  }

  // Calculate days until Saturday
  const daysLeft = 6 - dayOfWeek;
  const dayWord = daysLeft === 1 ? "day" : "days";

  return `${daysLeft} ${dayWord} until the weekend.`;
}
