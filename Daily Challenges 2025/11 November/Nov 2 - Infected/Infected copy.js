/*
Challenge #39

Date: November 2, 2025
Name: Infected
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-02
*/

function infected(days) {
  let infected = 1;
  for (let day = 1; day < days + 1; day++) {
    infected *= 2;
    // console.log("\nDay", day);
    // console.log("Infected", infected);
    if (day % 3 === 0) {
      const patched = Math.ceil((infected * 20) / 100);
      infected -= patched;
      // console.log(`3rd day | Patched: ${patched}, Still infected: ${infected}`);
    }
  }
  return infected;
}

console.log("\nFunction Output:", infected(10));
