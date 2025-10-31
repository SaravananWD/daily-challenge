function speeding(speeds, limit) {
  const overSpeeds = [];

  for (let speed of speeds) {
    if (speed > limit) {
      overSpeeds.push(speed - limit);
    }
  }

  const overSpeedVehicleCount = overSpeeds.length;
  const sumOfSpeeds = overSpeeds.reduce((sum, num) => sum + num, 0);
  const averageOfSpeeds = sumOfSpeeds / overSpeedVehicleCount;

  return [overSpeedVehicleCount, averageOfSpeeds || 0];
}

console.log(speeding([56, 57, 58], 55));
