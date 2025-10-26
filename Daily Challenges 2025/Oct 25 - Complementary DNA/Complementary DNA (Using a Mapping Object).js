function complementaryDNA(strand) {
  const complementMap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return strand
    .split("")
    .map((char) => complementMap[char])
    .join("");
}
