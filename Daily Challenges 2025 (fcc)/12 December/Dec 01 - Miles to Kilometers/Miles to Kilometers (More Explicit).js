function convertToKm(miles) {
  const MILES_TO_KM = 1.60934;
  const kilometers = miles * MILES_TO_KM;
  return Math.round(kilometers * 100) / 100;
}
