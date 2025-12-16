/*
Challenge #91

Date: September 3, 2025
Name: Pangram
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-03
*/

function isPangram(sentence, letters) {
  const set = new Set([...letters.toLowerCase()]);
  const testSet = new Set([
    ...sentence.replace(/[^A-Za-z]/g, "").toLowerCase(),
  ]);

  return (
    [...testSet].every((el) => set.has(el)) &&
    [...set].every((el) => testSet.has(el))
  );

  //alternate method using symmetricDifference
  const diff = testSet.symmetricDifference(set);
  return diff.size === 0;
}

console.log(isPangram("Hello World!", "helowrd"));
