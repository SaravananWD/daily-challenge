function isMatch(fingerprintA, fingerprintB) {
  const len = fingerprintA.length;
  if (len !== fingerprintB.length) return false;
  if (len === 0) return true;

  const maxMismatches = Math.floor(len * 0.1);
  let mismatch = 0;

  // Process in chunks for very large fingerprints
  for (let i = 0; i < len; i++) {
    if (fingerprintA.charCodeAt(i) !== fingerprintB.charCodeAt(i)) {
      mismatch++;
      if (mismatch > maxMismatches) return false;
    }
  }
  return true;
}
