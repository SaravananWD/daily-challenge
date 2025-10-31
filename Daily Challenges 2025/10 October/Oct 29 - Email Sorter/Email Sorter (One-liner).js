const sort = (emails) =>
  [...emails].sort(
    (a, b) =>
      a
        .split("@")[1]
        .toLowerCase()
        .localeCompare(b.split("@")[1].toLowerCase()) ||
      a.split("@")[0].toLowerCase().localeCompare(b.split("@")[0].toLowerCase())
  );
