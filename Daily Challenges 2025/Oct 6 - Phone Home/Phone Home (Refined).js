function sendMessage(route) {
  // Input validation
  if (!Array.isArray(route) || route.length === 0) {
    return 0;
  }

  const totalDistance = route.reduce((sum, distance) => sum + distance, 0);
  const transmissionTime = totalDistance / 300000; // km / (km/s) = seconds
  const hopDelays = (route.length - 1) * 0.5; // Each hop adds 0.5s

  const totalDuration = transmissionTime + hopDelays;

  // Round to 4 decimal places
  return Math.round(totalDuration * 10000) / 10000;
}
