function isSpam(number) {
  try {
    const parser =
      /^\+(?<country>\d+) \((?<area>\d{3})\) (?<first>\d{3})-(?<last>\d{4})$/;
    const match = number.match(parser);

    if (!match) return false;

    const { country, area, first, last } = match.groups;
    const fullNumber = country + area + first + last;

    const conditions = [
      // Country code: > 2 digits or doesn't start with 0
      country.length > 2 || !country.startsWith("0"),
      // Area code: > 900 or < 200
      parseInt(area) > 900 || parseInt(area) < 200,
      // Sum of first three digits appears in last four
      last.includes(
        [...first].reduce((sum, d) => sum + parseInt(d), 0).toString()
      ),
      // Four or more consecutive identical digits
      /(\d)\1{3}/.test(fullNumber),
    ];

    return conditions.some(Boolean);
  } catch {
    return false; // Invalid format
  }
}
