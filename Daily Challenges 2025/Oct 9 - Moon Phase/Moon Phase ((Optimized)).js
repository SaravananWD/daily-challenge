function moonPhase(dateString) {
  const REF_DATE = new Date("2000-01-06");
  const PHASE_DATE = new Date(dateString);

  // Validate input date
  if (isNaN(PHASE_DATE.getTime())) {
    throw new Error("Invalid date string");
  }

  // Calculate days difference using modulo for circular calculation
  const timeDifference = PHASE_DATE.getTime() - REF_DATE.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  // Normalize to 1-28 range using modulo
  daysDifference = ((((daysDifference - 1) % 28) + 28) % 28) + 1;

  // Determine phase using direct comparison (more efficient than object lookup)
  if (daysDifference >= 1 && daysDifference <= 7) return "New";
  if (daysDifference >= 8 && daysDifference <= 14) return "Waxing";
  if (daysDifference >= 15 && daysDifference <= 21) return "Full";
  if (daysDifference >= 22 && daysDifference <= 28) return "Waning";

  return "Unknown"; // Fallback
}
