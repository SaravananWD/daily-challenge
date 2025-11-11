/*
Challenge #54

Challenge Date: September 19, 2025
Name: Photo Storage
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-19
Completed Date: November 11, 2025
*/

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  const photoBytes = photoSizeMb * 1000 ** 2;
  const hardDriveBytes = hardDriveSizeGb * 1000 ** 3;

  return Math.floor(hardDriveBytes / photoBytes);
}
console.log(numberOfPhotos(1, 1)); // should return 1000
