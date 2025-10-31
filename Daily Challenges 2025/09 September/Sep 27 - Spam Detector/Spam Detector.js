function isSpam(number) {
  //helper functions
  const checkRepetition = (fullNumber, limit) => {
    const result = fullNumber.split("").reduce(
      (acc, numStr) => {
        const num = Number(numStr);
        if (acc.prevNumber === num) {
          acc.currentCount++;
        } else {
          acc.currentCount = 1;
          acc.prevNumber = num;
        }
        if (acc.currentCount >= limit) {
          acc.isSpam = true;
        }
        return acc;
      },
      { prevNumber: null, currentCount: 0, isSpam: false }
    );

    return result.isSpam;
  };

  const checkSumOfFirstInLast = (firstNum, lastNum) => {
    const sumOfFirstNumber = firstNum
      .split("")
      .reduce((acc, num) => acc + Number(num), 0);

    if (lastNum.includes(sumOfFirstNumber)) {
      return true;
    }
    return false;
  };

  const phoneNumber = {
    countryCode: number.split(" ")[0].slice(1),
    areaCode: number.split(" ")[1].slice(1, -1),
    localNumberFirst: number.split(" ")[2].split("-")[0],
    localNumberLast: number.split(" ")[2].split("-")[1],
  };

  let mergedNumber = "";
  for (let prop in phoneNumber) {
    mergedNumber += phoneNumber[prop];
  }

  const countryCodeFirstDigit = Number(phoneNumber.countryCode.split("")[0]);

  if (
    phoneNumber.countryCode.length > 2 ||
    countryCodeFirstDigit !== 0 ||
    Number(phoneNumber.areaCode) > 900 ||
    Number(phoneNumber.areaCode) < 200 ||
    checkRepetition(mergedNumber, 4) ||
    checkSumOfFirstInLast(
      phoneNumber.localNumberFirst,
      phoneNumber.localNumberLast
    )
  ) {
    return true;
  }
  return false;
}

console.log(isSpam("+0 (900) 880-0162"));
