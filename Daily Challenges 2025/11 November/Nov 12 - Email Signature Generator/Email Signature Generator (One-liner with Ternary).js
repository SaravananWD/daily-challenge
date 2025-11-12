const generateSignature = (name, title, company) => {
  const code = name[0].toUpperCase().charCodeAt(0);
  const prefix =
    code >= 65 && code <= 73
      ? ">>"
      : code >= 74 && code <= 82
      ? "--"
      : code >= 83 && code <= 90
      ? "::"
      : "";
  return `${prefix}${name}, ${title} at ${company}`;
};
