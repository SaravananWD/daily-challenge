function speeding(speeds, limit) {
  const overSpeeds = speeds
    .filter((speed) => speed > limit)
    .map((speed) => speed - limit);

  if (overSpeeds.length === 0) {
    return [0, 0];
  }

  const sumOfSpeeds = overSpeeds.reduce((sum, num) => sum + num, 0);
  const averageOfSpeeds = sumOfSpeeds / overSpeeds.length;

  return [overSpeeds.length, averageOfSpeeds];
}
console.log(speeding([56, 57, 58], 55));
