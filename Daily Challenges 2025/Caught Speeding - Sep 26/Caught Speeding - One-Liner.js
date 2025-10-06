function speeding(speeds, limit) {
  const overSpeeds = speeds.map((s) => s - limit).filter((s) => s > 0);
  return [
    overSpeeds.length,
    overSpeeds.length
      ? overSpeeds.reduce((a, b) => a + b) / overSpeeds.length
      : 0,
  ];
}
console.log(speeding([56, 57, 58], 55));
