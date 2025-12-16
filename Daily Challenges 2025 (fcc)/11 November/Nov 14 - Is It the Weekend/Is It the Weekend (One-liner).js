const daysUntilWeekend = (dateString) => {
  const daysLeft = 6 - new Date(dateString + "T00:00:00Z").getUTCDay();
  return daysLeft <= 0
    ? "It's the weekend!"
    : `${daysLeft} day${daysLeft === 1 ? "" : "s"} until the weekend.`;
};
