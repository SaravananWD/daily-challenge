function generateSignature(name, title, company) {
  const PREFIX_MAP = {
    "A-I": ">>",
    "J-R": "--",
    "S-Z": "::",
  };

  const firstChar = name[0].toUpperCase();
  const charCode = firstChar.charCodeAt(0);

  let range;
  if (charCode >= 65 && charCode <= 73) range = "A-I";
  else if (charCode >= 74 && charCode <= 82) range = "J-R";
  else if (charCode >= 83 && charCode <= 90) range = "S-Z";
  else range = null;

  const prefix = range ? PREFIX_MAP[range] : "";

  return `${prefix}${name}, ${title} at ${company}`;
}
