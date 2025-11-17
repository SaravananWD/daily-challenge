function isMatch(fingerprintA, fingerprintB) {
  if (fingerprintA.length !== fingerprintB.length) return false;

  const maxMismatches = Math.floor(fingerprintA.length * 0.1);

  const mismatchCount = fingerprintA
    .split("")
    .reduce(
      (count, char, index) => count + (char !== fingerprintB[index] ? 1 : 0),
      0
    );

  return mismatchCount <= maxMismatches;
}
