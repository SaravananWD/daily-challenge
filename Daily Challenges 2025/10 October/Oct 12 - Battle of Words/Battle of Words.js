/*
Challenge details

Date: October 12, 2025
Name: Battle of Words
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-12
*/

function battle(ourTeam, opponent) {
  const LETTER_SCORE = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 2,
    B: 4,
    C: 6,
    D: 8,
    E: 10,
    F: 12,
    G: 14,
    H: 16,
    I: 18,
    J: 20,
    K: 22,
    L: 24,
    M: 26,
    N: 28,
    O: 30,
    P: 32,
    Q: 34,
    R: 36,
    S: 38,
    T: 40,
    U: 42,
    V: 44,
    W: 46,
    X: 48,
    Y: 50,
    Z: 52,
  };

  const SCORE = {
    ourTeamScore: 0,
    opponentScore: 0,
  };

  const ourTeamWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  if (ourTeamWords.length != opponentWords.length) return "Invalid input!";

  const findScoreByWord = (word) => {
    return word
      .split("")
      .reduce((score, letter) => score + LETTER_SCORE[letter], 0);
  };

  for (let i = 0; i < ourTeamWords.length; i++) {
    const ourTeamWordScore = findScoreByWord(ourTeamWords[i]);
    const opponentWordScore = findScoreByWord(opponentWords[i]);

    if (ourTeamWordScore > opponentWordScore) {
      SCORE.ourTeamScore++;
    } else if (ourTeamWordScore < opponentWordScore) {
      SCORE.opponentScore++;
    }
  }

  if (SCORE.ourTeamScore > SCORE.opponentScore) {
    return "We win";
  } else if (SCORE.ourTeamScore < SCORE.opponentScore) {
    return "We lose";
  }
  return "Draw";
}

console.log("1: ", battle("Hello world", "hello world"));

/* For generating scores
function logConstants() {
  let count = 2;
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    let str = String.fromCharCode(i);
    console.log(`${str}: ${count},`);
    count += 2;
  }
}
*/
