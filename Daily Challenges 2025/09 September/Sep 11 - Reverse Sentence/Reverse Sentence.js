/*
Challenge #80

Date: September 11, 2025
Name: Reverse Sentence
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-11
*/

function reverseSentence(sentence) {
  return sentence.split(/\s+/).reverse().join(" ");
}

console.log(reverseSentence("import    default   function  export"));
