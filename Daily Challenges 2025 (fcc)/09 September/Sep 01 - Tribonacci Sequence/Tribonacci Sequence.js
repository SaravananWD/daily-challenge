/*
Challenge #93

Date: September 1, 2025
Name: Tribonacci Sequence
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-01
*/

function tribonacciSequence(startSequence, length) {
  if (length <= 3) return startSequence.slice(0, length);

  const sequence = [...startSequence];
  for (let i = 3; i < length; i++) {
    const next = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(next);
  }

  return sequence;
}

console.log(tribonacciSequence([0, 0, 1], 10));
