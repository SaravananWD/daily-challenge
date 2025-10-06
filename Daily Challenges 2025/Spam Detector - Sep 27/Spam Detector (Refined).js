function isSpam(number) {
  // Helper function to check digit repetition
  const checkRepetition = (fullNumber, limit) => {
    let currentCount = 1;
    let prevDigit = fullNumber[0];

    for (let i = 1; i < fullNumber.length; i++) {
      if (fullNumber[i] === prevDigit) {
        currentCount++;
        if (currentCount >= limit) return true;
      } else {
        currentCount = 1;
        prevDigit = fullNumber[i];
      }
    }
    return false;
  };

  // Helper function to check sum condition
  const checkSumOfFirstInLast = (firstPart, lastPart) => {
    const sumOfFirst = firstPart
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    const sumString = sumOfFirst.toString();
    return lastPart.includes(sumString);
  };

  // Parse phone number more robustly
  const match = number.match(/^\+(.+) \((\d{3})\) (\d{3})-(\d{4})$/);
  if (!match) return false; // Invalid format

  const [_, countryCode, areaCode, localFirst, localLast] = match;

  // Create merged number without formatting
  const mergedNumber = countryCode + areaCode + localFirst + localLast;

  // Check spam conditions
  const conditions = [
    countryCode.length > 2 || countryCode[0] !== "0", // Country code check
    parseInt(areaCode, 10) > 900 || parseInt(areaCode, 10) < 200, // Area code check
    checkSumOfFirstInLast(localFirst, localLast), // Sum check
    checkRepetition(mergedNumber, 4), // Repetition check
  ];

  // If any condition is true, it's spam
  return conditions.some((condition) => condition);
}
