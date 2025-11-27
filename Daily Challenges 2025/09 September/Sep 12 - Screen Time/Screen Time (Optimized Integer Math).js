function tooMuchScreenTime(hours) {
  if (!hours || hours.length !== 7) {
    throw new Error("Input must be an array of 7 numbers");
  }

  // Single day check
  if (Math.max(...hours) >= 10) return true;

  // Three-day average check (using integer math)
  for (let i = 0; i <= 4; i++) {
    if (hours[i] + hours[i + 1] + hours[i + 2] >= 24) return true;
  }

  // Weekly average check
  return hours.reduce((sum, hour) => sum + hour, 0) >= 42;
}
