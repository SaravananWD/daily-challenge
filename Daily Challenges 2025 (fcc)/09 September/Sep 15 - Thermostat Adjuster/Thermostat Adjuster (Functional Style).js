function adjustThermostat(temp, target) {
  // Input validation
  if (
    typeof temp !== "number" ||
    typeof target !== "number" ||
    !isFinite(temp) ||
    !isFinite(target)
  ) {
    return "invalid";
  }

  const adjustments = {
    [temp < target]: "heat",
    [temp > target]: "cool",
    [temp === target]: "hold",
  };

  return adjustments.true;
}
