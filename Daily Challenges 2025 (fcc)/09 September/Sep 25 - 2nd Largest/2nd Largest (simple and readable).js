// simple and readable

function secondLargest(arr) {
  if (arr.length < 2) return undefined;

  const sortedNums = [...new Set(arr)].sort((a, b) => b - a);
  return sortedNums.length > 1 ? sortedNums[1] : undefined;
}

console.log(secondLargest([4, 2]));
