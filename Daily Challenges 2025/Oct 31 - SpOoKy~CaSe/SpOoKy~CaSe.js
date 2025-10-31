/*
Challenge #37

Date: October 31, 2025
Name: SpOoKy~CaSe
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-31
*/

function spookify(boo) {
  let newData = boo.replace(/[_-]/g, "~");

  const newArr = newData.split("");

  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    const char = newArr[i];
    newArr[i] = char.toLowerCase();

    if (char !== "~") {
      if (count % 2 === 0) {
        newArr[i] = char.toUpperCase();
      }
      count++;
    }
  }

  return newArr.join("");
}

console.log(spookify("TRICK-or-TREAT"));
