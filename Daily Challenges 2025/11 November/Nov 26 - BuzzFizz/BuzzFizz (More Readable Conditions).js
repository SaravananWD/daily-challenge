function isFizzBuzz(sequence) {
  if (!Array.isArray(sequence)) return false;

  for (let i = 0; i < sequence.length; i++) {
    const expectedNumber = i + 1;
    const actualValue = sequence[i];
    const expectedValue = getExpectedFizzBuzzValue(expectedNumber);

    if (actualValue !== expectedValue) {
      return false;
    }
  }

  return true;
}

function getExpectedFizzBuzzValue(num) {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}
