function generateSignature(name, title, company) {
  const firstChar = name[0].toUpperCase();

  let prefix;
  if ("ABCDEFGHI".includes(firstChar)) prefix = ">>";
  else if ("JKLMNOPQR".includes(firstChar)) prefix = "--";
  else if ("STUVWXYZ".includes(firstChar)) prefix = "::";
  else prefix = "";

  return `${prefix}${name}, ${title} at ${company}`;
}
