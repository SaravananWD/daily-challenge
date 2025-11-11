function isMirror(str1, str2) {
  const cleanString = (s) => s.replace(/[^A-Za-z]/g, "");
  const cleaned1 = cleanString(str1);
  const cleaned2 = cleanString(str2);

  if (cleaned1.length !== cleaned2.length) return false;

  return Array.from(cleaned1).every(
    (char, index) => char === cleaned2[cleaned2.length - 1 - index]
  );
}
