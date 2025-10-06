function checkStrength(password) {
  const scores = {
    length: password.length >= 12 ? 2 : password.length >= 8 ? 1 : 0,
    case: /[a-z]/.test(password) && /[A-Z]/.test(password) ? 1 : 0,
    numbers: /\d/.test(password) ? 1 : 0,
    special: /[!@#$%^&*]/.test(password) ? 1 : 0,
  };

  const totalScore = Object.values(scores).reduce(
    (sum, score) => sum + score,
    0
  );

  if (totalScore >= 4) return "strong";
  if (totalScore >= 2) return "medium";
  return "weak";
}
