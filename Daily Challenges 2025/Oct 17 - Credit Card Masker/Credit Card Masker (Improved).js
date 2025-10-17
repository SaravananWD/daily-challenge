function mask(card) {
  // Split into groups using either space or hyphen as separator
  const groups = card.split(/[ -]/);

  // Mask all but the last group
  const maskedGroups = groups.map((group, index) =>
    index < groups.length - 1 ? "****" : group
  );

  // Rejoin with the original separator
  const separator = card.includes("-") ? "-" : " ";
  return maskedGroups.join(separator);
}

console.log(mask("4012-8888-8888-1881")); // "****-****-****-1881"
console.log(mask("4012 8888 8888 1881")); // "**** **** **** 1881"
