/*
Input: arr = [1, 2, 4, 7, 3, 7, 7, 5]
Expected Output: [1, 2,3,4,5,7,7,7]
*/

const arr = [1, 2, 4, 7, 3, 7, 7, 5];

const sorted = arr.sort();
const arrDup = [];
const arrUnique = [];

for (let i = 0; i < sorted.length; i++) {
  const currentValue = sorted[i];
  const lastIndex = sorted.lastIndexOf(currentValue);

  if (i === lastIndex && !arrDup.includes(currentValue)) {
    arrUnique.push(currentValue);
  } else {
    arrDup.push(currentValue);
  }
}

console.log("Output: " + [...arrUnique, ...arrDup]);
