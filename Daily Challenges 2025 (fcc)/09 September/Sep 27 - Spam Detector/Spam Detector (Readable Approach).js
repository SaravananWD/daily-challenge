function isSpam(number) {
  // Extract digits only for analysis
  const digits = number.replace(/\D/g, "");

  // Parse components using string positions (more reliable)
  const countryCode = number.match(/^\+(.+?) /)?.[1] || "";
  const areaCode = number.match(/\((\d{3})\)/)?.[1] || "";
  const localFirst = number.match(/\s(\d{3})-/)?.[1] || "";
  const localLast = number.match(/-(\d{4})$/)?.[1] || "";

  // Check 1: Country code validation
  const isInvalidCountryCode = countryCode.length > 2 || countryCode[0] !== "0";

  // Check 2: Area code validation
  const areaCodeNum = parseInt(areaCode, 10);
  const isInvalidAreaCode = areaCodeNum > 900 || areaCodeNum < 200;

  // Check 3: Sum of first three appears in last four
  const sumOfFirstThree = localFirst
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  const sumInLastFour = localLast.includes(sumOfFirstThree.toString());

  // Check 4: Four or more consecutive identical digits
  const hasFourConsecutive = /(\d)\1{3,}/.test(digits);

  return (
    isInvalidCountryCode ||
    isInvalidAreaCode ||
    sumInLastFour ||
    hasFourConsecutive
  );
}
