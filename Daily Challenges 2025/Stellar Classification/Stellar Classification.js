function classification(temp) {
  const stellarClassification = {
    M: temp >= 0 && temp <= 3699,
    K: temp >= 3700 && temp <= 5199,
    G: temp >= 5200 && temp <= 5999,
    F: temp >= 6000 && temp <= 7499,
    A: temp >= 7500 && temp <= 9999,
    B: temp >= 10000 && temp <= 29999,
    O: temp >= 30000,
  };

  for (let prop in stellarClassification) {
    if (stellarClassification[prop] === true) {
      return prop;
    }
  }

  return "Unexpected error";
}

console.log(classification(3700));
