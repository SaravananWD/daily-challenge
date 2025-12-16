const adjustThermostat = (temp, target) =>
  typeof temp === "number" &&
  typeof target === "number" &&
  isFinite(temp) &&
  isFinite(target)
    ? temp < target
      ? "heat"
      : temp > target
      ? "cool"
      : "hold"
    : "invalid";
