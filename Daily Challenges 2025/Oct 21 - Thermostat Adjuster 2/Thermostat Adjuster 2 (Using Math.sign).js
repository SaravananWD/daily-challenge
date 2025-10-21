function adjustThermostat(currentF, targetC) {
  const targetF = targetC * 1.8 + 32;
  const difference = Math.round((currentF - targetF) * 10) / 10;
  const absoluteDifference = Math.abs(difference);

  const actions = {
    1: `Cool: ${absoluteDifference.toFixed(1)} degrees Fahrenheit`,
    [-1]: `Heat: ${absoluteDifference.toFixed(1)} degrees Fahrenheit`,
    0: "Hold",
  };

  return actions[Math.sign(difference)];
}
