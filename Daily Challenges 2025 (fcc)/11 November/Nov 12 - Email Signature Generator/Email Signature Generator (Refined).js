function generateSignature(name, title, company) {
  const firstLetter = name[0].toUpperCase();
  const charCode = firstLetter.charCodeAt(0);

  let prefix;
  if (charCode >= 65 && charCode <= 73) {
    // A-I
    prefix = ">>";
  } else if (charCode >= 74 && charCode <= 82) {
    // J-R
    prefix = "--";
  } else if (charCode >= 83 && charCode <= 90) {
    // S-Z
    prefix = "::";
  } else {
    prefix = ""; // Fallback for non-letter names
  }

  return `${prefix}${name}, ${title} at ${company}`;
}
