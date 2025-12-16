function moonPhase(dateString) {
  const LUNAR_CYCLE_DAYS = 28;
  const REFERENCE_NEW_MOON = new Date("2000-01-06");
  const targetDate = new Date(dateString);

  const daysSinceRef = Math.floor(
    (targetDate - REFERENCE_NEW_MOON) / (1000 * 60 * 60 * 24)
  );
  const daysInCycle =
    (((daysSinceRef % LUNAR_CYCLE_DAYS) + LUNAR_CYCLE_DAYS) %
      LUNAR_CYCLE_DAYS) +
    1;

  if (daysInCycle <= 7) return "New";
  if (daysInCycle <= 14) return "Waxing";
  if (daysInCycle <= 21) return "Full";
  return "Waning";
}
