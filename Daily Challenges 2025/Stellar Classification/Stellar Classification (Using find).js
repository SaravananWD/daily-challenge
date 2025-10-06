function classification(temp) {
  if (typeof temp !== "number" || temp < 0) {
    return "Invalid temperature";
  }

  const types = {
    M: [0, 3699],
    K: [3700, 5199],
    G: [5200, 5999],
    F: [6000, 7499],
    A: [7500, 9999],
    B: [10000, 29999],
    O: [30000, Infinity],
  };

  const foundType = Object.keys(types).find((type) => {
    const [min, max] = types[type];
    return temp >= min && temp <= max;
  });

  return foundType || "Unexpected error";
}
