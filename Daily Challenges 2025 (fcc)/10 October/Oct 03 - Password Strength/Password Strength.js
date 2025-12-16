function checkStrength(password) {
  const passwordRules = {
    characterLimit: /^.{8,}$/,
    hasBothCases: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
    hasNumber: /^(?=.*\d).+$/,
    hasSpecialCharacter: /^(?=.*[!@#$%^&*]).+$/,
  };

  let strength = 0;

  for (let rule in passwordRules) {
    console.log(`${rule}: ${passwordRules[rule].test(password)}`);

    if (passwordRules[rule].test(password)) {
      strength++;
    }
  }

  if (strength === 4) {
    return "strong";
  } else if (strength >= 2) {
    return "medium";
  }
  return "weak";
}

console.log(checkStrength("dsdHsd@1"));
