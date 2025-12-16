function isMatch(fingerprintA, fingerprintB) {
  const length = fingerprintA.length;
  if (length !== fingerprintB.length) return false;
  if (length === 0) return true;

  const maxMismatches = Math.floor(length * 0.1);
  let mismatch = 0;

  for (let i = 0; i < length; i++) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      mismatch++;
      if (mismatch > maxMismatches) return false;
    }
  }
  return true;
}
