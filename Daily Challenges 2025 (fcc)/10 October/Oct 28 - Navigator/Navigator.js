/*
Challenge #34

Date: October 28, 2025
Name: Navigator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-28
*/

function navigate(commands) {
  console.log("__\n");

  const route = ["Home"];
  let currentPageIndex = 0;

  for (let i = 0; i < commands.length; i++) {
    const action = commands[i];
    console.log(`Command: ${action}`);

    if (action === "Back") {
      currentPageIndex =
        route[currentPageIndex - 1] !== undefined
          ? currentPageIndex - 1
          : currentPageIndex;
    } else if (action === "Forward") {
      currentPageIndex =
        route[currentPageIndex + 1] !== undefined
          ? currentPageIndex + 1
          : currentPageIndex;
    } else {
      route.push(action.slice(6));
      currentPageIndex = route.length - 1;
    }

    console.log(`Current Page: ${route[currentPageIndex]} \n`);
  }

  return route[currentPageIndex];
}

console.log(navigate(["Visit About Us", "Back", "Forward"]));
console.log(navigate(["Forward"]));
console.log(navigate(["Back"]));
console.log(navigate(["Visit About Us", "Visit Gallery"]));
console.log(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]));
console.log(
  navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"])
);
console.log(
  navigate([
    "Visit About Us",
    "Visit Visit Us",
    "Forward",
    "Visit Contact Us",
    "Back",
  ])
);
