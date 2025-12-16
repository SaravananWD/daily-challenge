/*
Challenge #58

Date: November 13, 2025
Name: 100 doors
Link: https://www.freecodecamp.org/learn/rosetta-code/rosetta-code-challenges/100-doors
*/

function getFinalOpenedDoors(numDoors) {
  let doors = Array.from({ length: numDoors }, (_, index) => [
    index + 1,
    false,
  ]);

  for (let visitCount = 1; visitCount <= numDoors; visitCount++) {
    doors = doors.map(([doorNum, status]) =>
      doorNum % visitCount === 0 ? [doorNum, !status] : [doorNum, status]
    );
  }

  return doors
    .filter(([doorNum, status]) => status === true)
    .map(([doorNum], index) => doorNum);
}

console.log(getFinalOpenedDoors(100));

/* Review:

The "100 doors (Mathematical).js" is the most efficient. 

My approach is a result of simulation like thought process.

Once pattern is confirmed in the result 
- we should be refactoring the code for efficiency. */
