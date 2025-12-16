function arrayDiff(arr1, arr2) {
  const frequency = [...arr1, ...arr2].reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(frequency)
    .filter((item) => frequency[item] === 1)
    .sort();
}
