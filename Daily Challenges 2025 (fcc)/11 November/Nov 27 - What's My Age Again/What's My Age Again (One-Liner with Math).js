function calculateAge(birthday, targetDate = "2025-11-27") {
  const born = new Date(birthday);
  const target = new Date(targetDate);

  return (
    target.getFullYear() -
    born.getFullYear() -
    (target < new Date(target.getFullYear(), born.getMonth(), born.getDate())
      ? 1
      : 0)
  );
}
