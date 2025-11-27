function tooMuchScreenTime(hours) {
  if (!hours || hours.length !== 7) {
    throw new Error("Input must be an array of 7 numbers");
  }

  // Constraint 1: Any single day >= 10 hours
  if (hours.some((hour) => hour >= 10)) {
    return true;
  }

  // Constraint 2: Any 3-day average >= 8 hours
  for (let i = 0; i <= 4; i++) {
    // Check windows: 0-2, 1-3, 2-4, 3-5, 4-6
    const threeDaySum = hours[i] + hours[i + 1] + hours[i + 2];
    if (threeDaySum >= 24) {
      // 8 * 3 = 24 (avoid floating point)
      return true;
    }
  }

  // Constraint 3: 7-day average >= 6 hours
  const sevenDaySum = hours.reduce((sum, hour) => sum + hour, 0);
  return sevenDaySum >= 42; // 6 * 7 = 42
}
