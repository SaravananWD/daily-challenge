function goldilocksZone(mass) {
  const habitableDistance = Math.sqrt(mass ** 3.5);

  return [
    Math.round(habitableDistance * 0.95 * 100) / 100,
    Math.round(habitableDistance * 1.37 * 100) / 100,
  ];
}
