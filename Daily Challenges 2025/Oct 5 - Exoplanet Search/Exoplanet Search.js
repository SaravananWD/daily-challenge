function hasExoplanet(readings) {
  const getNumericalValue = (reading) => {
    const result = Number(reading);

    if (Number.isNaN(result)) {
      return reading.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 10;
    }
    return result <= 9 ? result : "Invalid input.";
  };

  const numericalValues = readings
    .split("")
    .map((reading) => getNumericalValue(reading));

  const readingsAverage =
    numericalValues.reduce((acc, num) => acc + num, 0) / numericalValues.length;

  const eightyPercentOfAverage = readingsAverage * 0.8;

  const isExoPlanet = numericalValues.some(
    (reading) => reading <= eightyPercentOfAverage
  );
  console.log(eightyPercentOfAverage);

  return isExoPlanet;
}

console.log(hasExoplanet("9AB98AB9BC98A"));

/*
uppercase the characters
find the numerical value for each reading
find an average of all numerical values
find the 80% of the average
find if any single reading is less than or  equal to the 80% value. 
*/
