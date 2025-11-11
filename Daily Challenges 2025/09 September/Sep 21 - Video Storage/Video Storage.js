/*
Challenge #52

Challenge Date: September 21, 2025
Name: Video Storage
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-21
Completed Date: November 11, 2025
*/

function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const allowedVideoUnits = ["B", "KB", "MB", "GB"];
  const allowedDriveUnits = ["GB", "TB"];

  if (!allowedVideoUnits.includes(videoUnit)) return "Invalid video unit";
  if (!allowedDriveUnits.includes(driveUnit)) return "Invalid drive unit";

  const getBytes = (unit, value) => {
    switch (unit) {
      case "B":
        return value;
      case "KB":
        return value * 1000;
      case "MB":
        return value * 1000 * 1000;
      case "GB":
        return value * 1000 * 1000 * 1000;
      case "TB":
        return value * 1000 * 1000 * 1000 * 1000;
      default:
        return null;
    }
  };

  const driveSizeInBytes = getBytes(driveUnit, driveSize);
  const videoSizeInBytes = getBytes(videoUnit, videoSize);

  return Math.floor(driveSizeInBytes / videoSizeInBytes);
}

console.log(numberOfVideos(1.5, "GB", 2.2, "TB"));
