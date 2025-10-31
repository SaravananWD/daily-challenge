function goldilocksZone(mass) {
  const LUMINOSITY_EXPONENT = 3.5;
  const INNER_BOUNDARY_FACTOR = 0.95;
  const OUTER_BOUNDARY_FACTOR = 1.37;
  const PRECISION = 100; // 2 decimal places

  const habitableDistance = Math.sqrt(mass ** LUMINOSITY_EXPONENT);

  const roundToTwoDecimals = (value) =>
    Math.round(value * PRECISION) / PRECISION;

  return [
    roundToTwoDecimals(habitableDistance * INNER_BOUNDARY_FACTOR),
    roundToTwoDecimals(habitableDistance * OUTER_BOUNDARY_FACTOR),
  ];
}
