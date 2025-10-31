function complementaryDNA(strand) {
  return strand
    .replaceAll("A", "tempA")
    .replaceAll("T", "A")
    .replaceAll("tempA", "T")
    .replaceAll("C", "tempC")
    .replaceAll("G", "C")
    .replaceAll("tempC", "G");
}
