function tooMuchScreenTime(hours) {
  if (!hours || hours.length !== 7) {
    throw new Error("Input must be an array of 7 numbers");
  }

  return (
    hasSingleDayOverLimit(hours) ||
    hasThreeDayAverageOverLimit(hours) ||
    hasWeekAverageOverLimit(hours)
  );
}

function hasSingleDayOverLimit(hours) {
  return hours.some((hour) => hour >= 10);
}

function hasThreeDayAverageOverLimit(hours) {
  for (let i = 0; i <= 4; i++) {
    const average = (hours[i] + hours[i + 1] + hours[i + 2]) / 3;
    if (average >= 8) return true;
  }
  return false;
}

function hasWeekAverageOverLimit(hours) {
  const weeklyAverage = hours.reduce((sum, hour) => sum + hour, 0) / 7;
  return weeklyAverage >= 6;
}
