/*
Challenge #64

Date: November 17, 2025
Name: Fingerprint Test
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-17
*/

function isMatch(fingerprintA, fingerprintB) {
  const length = fingerprintA.length;
  if (length !== fingerprintB.length) return false;

  let mismatch = 0;
  for (let i = 0; i < length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      mismatch++;
    }
  }
  return mismatch <= length * 0.1;
}

console.log(isMatch("helloworld", "helloworlds"));
