const isMirror = (str1, str2) =>
  str1.replace(/[^A-Za-z]/g, "") ===
  str2
    .replace(/[^A-Za-z]/g, "")
    .split("")
    .reverse()
    .join("");
