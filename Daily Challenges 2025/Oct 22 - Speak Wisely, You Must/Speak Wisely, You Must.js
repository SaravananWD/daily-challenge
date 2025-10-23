/*
Challenge #28

Date: October 22, 2025
Name: Speak Wisely, You Must
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-22
*/
function wiseSpeak(sentence) {
  const WORDS = ["have", "must", "are", "will", "can"];
  const punctuation = sentence.slice(-1);

  let isFound = false;

  const splitSentence = sentence.slice(0, -1).split(" ");

  const rearranged = splitSentence.reduce(
    (acc, word) => {
      if (WORDS.includes(word) && !isFound) {
        isFound = true;
        acc["secondHalf"] += ` ${word}`;
      } else if (isFound) {
        acc["firstHalf"] += ` ${word}`;
      } else if (!isFound) {
        acc["secondHalf"] += ` ${word}`;
      }
      return acc;
    },
    {
      firstHalf: "",
      secondHalf: "",
    }
  );

  rearranged.firstHalf = rearranged.firstHalf.trim();
  rearranged.secondHalf = rearranged.secondHalf.trim();

  const firsLetter = rearranged.firstHalf.charAt(0).toUpperCase();

  return (
    firsLetter +
    rearranged.firstHalf.slice(1) +
    ", " +
    rearranged.secondHalf.toLowerCase() +
    punctuation
  );
}
console.log(wiseSpeak("You must speak wisely."));
