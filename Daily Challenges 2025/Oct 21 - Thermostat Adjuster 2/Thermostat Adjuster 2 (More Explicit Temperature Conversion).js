function adjustThermostat(currentF, targetC) {
  const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
  const targetF = celsiusToFahrenheit(targetC);
  const difference = Math.round((currentF - targetF) * 10) / 10;

  if (difference > 0)
    return `Cool: ${difference.toFixed(1)} degrees Fahrenheit`;
  if (difference < 0)
    return `Heat: ${Math.abs(difference).toFixed(1)} degrees Fahrenheit`;
  return "Hold";
}
