function flatten(arr) {
  return arr.reduce((acc, val) => {
    if (!Array.isArray(val)) {
      acc.push(val);
    } else {
      acc.push(...flatten(val));
    }
    return acc;
  }, []);
}

console.log(flatten([1, [2, [3, 4]], 5])); // [1,2,3,4,5]
