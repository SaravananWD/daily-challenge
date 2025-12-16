const complementaryDNA = (strand) =>
  [...strand].reduce(
    (acc, char) => acc + { A: "T", T: "A", C: "G", G: "C" }[char],
    ""
  );
