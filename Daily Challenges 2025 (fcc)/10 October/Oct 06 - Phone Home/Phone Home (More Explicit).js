function sendMessage(route) {
  const LIGHT_SPEED = 300000; // km/s
  const HOP_DELAY = 0.5; // seconds per hop

  const totalDistance = route.reduce((a, b) => a + b, 0);
  const transmissionTime = totalDistance / LIGHT_SPEED;
  const totalHopDelays = Math.max(0, route.length - 1) * HOP_DELAY;

  return Number((transmissionTime + totalHopDelays).toFixed(4));
}
