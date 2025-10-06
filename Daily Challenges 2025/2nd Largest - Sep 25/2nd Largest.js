// my solution

function secondLargest(arr) {
  const originalArray = [...arr];

  const getLargest = (ARR) => {
    let temp = 0;
    for (let i = 0; i < ARR.length; i++) {
      if (ARR[i] > temp) {
        temp = ARR[i];
      }
    }
    return temp;
  };

  const largest = getLargest(originalArray);
  const filteredArray = arr.filter((n) => n !== largest);

  return getLargest(filteredArray);
}

console.log(secondLargest([9, 1, 3, 4, 2, 3]));
