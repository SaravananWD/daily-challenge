let inputArr = ["a", "a", "b", "b", "c", "d", "e"];

const counts = inputArr.reduce((obj, letter) => {
  obj[letter] = (obj[letter] || 0) + 1;
  return obj;
}, {});

console.log(counts);
