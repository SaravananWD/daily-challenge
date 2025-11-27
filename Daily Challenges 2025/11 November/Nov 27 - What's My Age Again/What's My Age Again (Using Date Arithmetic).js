function calculateAge(birthday, targetDate = "2025-11-27") {
  const bornDate = new Date(birthday);
  const target = new Date(targetDate);

  // Calculate raw age difference
  let age = target.getFullYear() - bornDate.getFullYear();

  // Create a date representing birthday in target year
  const birthdayThisYear = new Date(
    target.getFullYear(),
    bornDate.getMonth(),
    bornDate.getDate()
  );

  // If birthday in target year hasn't occurred yet, subtract 1
  if (target < birthdayThisYear) {
    age--;
  }

  return age;
}
