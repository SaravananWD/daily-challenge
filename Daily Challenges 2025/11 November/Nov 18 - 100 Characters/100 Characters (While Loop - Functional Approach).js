function oneHundred(chars) {
  return Array.from({ length: Math.ceil(100 / chars.length) }, () => chars)
    .join("")
    .slice(0, 100);
}
