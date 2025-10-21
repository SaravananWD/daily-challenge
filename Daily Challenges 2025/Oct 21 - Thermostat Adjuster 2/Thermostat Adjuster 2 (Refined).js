function adjustThermostat(currentF, targetC) {
  const targetF = targetC * 1.8 + 32;
  const difference = Math.round((currentF - targetF) * 10) / 10;

  if (difference > 0) {
    return `Cool: ${difference.toFixed(1)} degrees Fahrenheit`;
  } else if (difference < 0) {
    return `Heat: ${Math.abs(difference).toFixed(1)} degrees Fahrenheit`;
  } else {
    return "Hold";
  }
}
