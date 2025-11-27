function adjustThermostat(temp, target) {
  // More specific input validation
  if (typeof temp !== "number" || typeof target !== "number") {
    throw new Error("Both temperature and target must be numbers");
  }

  if (!isFinite(temp) || !isFinite(target)) {
    throw new Error("Temperatures must be finite numbers");
  }

  if (temp < target) return "heat";
  if (temp > target) return "cool";
  return "hold";
}
