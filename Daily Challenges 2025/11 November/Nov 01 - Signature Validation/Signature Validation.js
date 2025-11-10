/*
Challenge #38

Date: November 1, 2025
Name: Signature Validation
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-01
*/

function verify(message, key, signature) {
  const LETTER_VALUE = {
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
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
  };

  const getScore = (str) => {
    let total = 0;
    for (const char of str) {
      const charScore = LETTER_VALUE[char] ? LETTER_VALUE[char] : 0;
      total += charScore;
    }
    return total;
  };

  return getScore(message) + getScore(key) === signature ? true : false;
}
console.log(verify("foo", "bar", 57));

/*
  // Generate Constants
  let val = 27;
  for (let i = 65; i < 91; i++) {
    console.log(`${String.fromCharCode(i)}: ${val},`);
    val++;
  }
*/
