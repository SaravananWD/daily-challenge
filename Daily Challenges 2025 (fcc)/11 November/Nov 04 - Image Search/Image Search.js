/*
Challenge #41

Date: November 4, 2025
Name: Image Search
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-04
*/
function imageSearch(images, term) {
  const outputArray = [];
  for (let image of images) {
    if (image.toLowerCase().includes(term.toLowerCase())) {
      outputArray.push(currentImage);
    }
  }
  return outputArray;
}

console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"));
