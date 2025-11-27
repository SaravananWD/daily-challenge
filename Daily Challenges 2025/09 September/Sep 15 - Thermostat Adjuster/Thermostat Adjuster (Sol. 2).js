function adjustThermostat(temp, target) {
  if (isNaN(temp) || isNaN(target)) return;

  if (temp < target) return "heat";
  if (temp > target) return "cool";
  return "hold";
}

console.log(adjustThermostat(75, 72));
