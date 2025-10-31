function complementaryDNA(strand) {
  return strand.replace(
    /[ATCG]/g,
    (char) =>
      ({
        A: "T",
        T: "A",
        C: "G",
        G: "C",
      }[char])
  );
}
