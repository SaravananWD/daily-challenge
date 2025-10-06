// alternative solution

function secondLargest(arr) {
  if (arr.length < 2) return undefined;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest; // -I
      largest = num; // 4
    } else if (num > secondLargest && num != largest) {
      secondLargest = num; // 2
    }
  }

  return secondLargest !== -Infinity ? secondLargest : undefined;
}

console.log(secondLargest([4, 2]));
