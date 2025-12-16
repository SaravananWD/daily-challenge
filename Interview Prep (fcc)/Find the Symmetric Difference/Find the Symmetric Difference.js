function sym(...rest) {
  const allArrays = [...rest];
  let newArr = [];

  for (let i = 0; i < allArrays.length - 1; i++) {
    let firstArr = i > 0 ? [...newArr] : [...allArrays[i]];
    let secondArr = [...allArrays[i + 1]];
    if (!firstArr.length >= secondArr.length) {
      const tempArr = [...firstArr];
      firstArr = [...secondArr];
      secondArr = [...tempArr];
    }

    for (let j = 0; j < firstArr.length; j++) {
      if (!secondArr.includes(firstArr[j]) && !newArr.includes(firstArr[j])) {
        newArr.push(firstArr[j]);
      } else if (
        secondArr.includes(firstArr[j]) &&
        newArr.includes(firstArr[j])
      ) {
        const index = newArr.indexOf(firstArr[j]);
        newArr.splice(index, 1);
      }
    }
    for (let k = 0; k < secondArr.length; k++) {
      if (!firstArr.includes(secondArr[k]) && !newArr.includes(secondArr[k])) {
        newArr.push(secondArr[k]);
      } else if (
        firstArr.includes(secondArr[k]) &&
        newArr.includes(secondArr[k])
      ) {
        const index = newArr.indexOf(secondArr[k]);
        newArr.splice(index, 1);
      }
    }
  }

  return newArr;
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
