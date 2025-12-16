/*
Challenge #90

Date: November 30, 2025
Name: AI Detector
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-30
*/

function detectAI(text) {
  const split = text.split(/\s+/);
  let count = { dash: 0, parens: 0, longWords: 0 };

  const increment = (type) => {
    count[type]++;
    if (type === "longWords") {
      if (count[type] >= 3) return true;
    } else if (count[type] >= 2) {
      return true;
    }
    return false;
  };

  for (let el of split) {
    let isAI = false;
    const wordLen = el.replace(/[^A-Za-z]/g, "").length;
    const hasParen = el[0] === "(";

    if (wordLen >= 7) count.longWords++;

    if (el === "-") {
      isAI = increment("dash");
    } else {
      if (wordLen >= 7) {
        isAI = increment("longWords");
      }
      if (hasParen) {
        isAI = increment("parens");
      }
    }

    if (isAI) return "AI";
  }

  return "Human";
}

console.log(detectAI("The extraordinary students were studying vivaciously."));
