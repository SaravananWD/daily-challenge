/*
Challenge #53

Challenge Date: September 20, 2025
Name: File Storage
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-20
Completed Date: November 11, 2025
*/

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const UNIT_FACTORS = {
    B: 1,
    KB: 1000,
    MB: 1000 ** 2,
    GB: 1000 ** 3,
  };

  const driveSizeInBytes = driveSizeGb * UNIT_FACTORS.GB;
  const fileSizeInBytes = fileSize * UNIT_FACTORS[fileUnit];

  return Math.floor(driveSizeInBytes / fileSizeInBytes);
}

console.log(numberOfFiles(4096, "B", 1.5));
