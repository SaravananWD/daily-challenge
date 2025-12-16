function checkStrength(password) {
  const rules = [
    password.length >= 8,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*]/.test(password),
  ];

  const strength = rules.filter(Boolean).length;

  switch (strength) {
    case 4:
      return "strong";
    case 3:
      return "medium";
    case 2:
      return "medium";
    default:
      return "weak";
  }
}
