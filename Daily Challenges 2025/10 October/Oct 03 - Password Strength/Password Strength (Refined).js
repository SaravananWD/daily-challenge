function checkStrength(password) {
  const passwordRules = {
    minLength: password.length >= 8,
    hasBothCases: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialCharacter: /[!@#$%^&*]/.test(password),
  };

  let strength = 0;

  for (let rule in passwordRules) {
    if (passwordRules[rule]) {
      strength++;
    }
  }

  if (strength === 4) return "strong";
  if (strength >= 2) return "medium";
  return "weak";
}
