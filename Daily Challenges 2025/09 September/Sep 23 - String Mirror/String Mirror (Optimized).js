function isMirror(str1, str2) {
  const cleanString = (s) => s.replace(/[^A-Za-z]/g, "");
  const cleaned1 = cleanString(str1);
  const cleaned2 = cleanString(str2);

  return cleaned1 === cleaned2.split("").reverse().join("");
}
