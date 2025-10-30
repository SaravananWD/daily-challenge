function navigate(commands) {
  const pages = ["Home"];
  let currentIndex = 0;
  let currentPage = pages[currentIndex]; // "Home"

  commands.forEach((currentCommand) => {
    if (currentCommand.includes("Visit")) {
      // console.log(currentCommand);
      currentIndex++; // 1

      const croppedString = currentCommand.slice(6);
      pages.push(croppedString); // ["Home, "Visit X"]
      currentPage = pages[currentIndex];
    } else if (currentCommand === "Back") {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      currentPage = pages[currentIndex];
    } else if (currentCommand === "Forward") {
      currentIndex =
        currentIndex < pages.length - 1 ? currentIndex + 1 : currentIndex;
      currentPage = pages[currentIndex];
    }
  });

  return currentPage;
}

console.log(navigate(["Visit About Us", "Back", "Forward"]));

/*
Home 0
Visit X 1
Back-Home 0
Forward-Visit X 1

["Home", "Visit X","Home", "Visit X"]
4
3


 if 3 < 4-1

Forward-undefined 2 

*/

/*

arr = ["Home"];
currentIndex = 0;
currentPage = arr[currentIndex]; // "Home"


1.
Back
arr[currentIndex-1] // arr[-1] // undefined // end action 
Home


2.
Visit About
currentIndex = currentIndex+1; // 0+1 = 1
arr.push("About") // ["Home", "About"]
currentPage = arr[currentIndex]; //  "About"

4.
Back
currentIndex = currentIndex - 1 // 1-1 = 0 
currentPage = arr[currentIndex] // "Home"
// ["Home", "About"]

5.
Forward
currentIndex = currentIndex + 1 // 0+1 // 1
currentPage = arr[currentIndex] // arr[1] // "About"
*/

/* 

1 Initialise array with "Home" page
2 Initialise currentIndex
3 initialise currentPage

4 get the commands provided
5 execute program for each command provided

6 if command is "back" go back
7 if command is "forward" go forward
8 if command is "visit page" go to page
 

*/
