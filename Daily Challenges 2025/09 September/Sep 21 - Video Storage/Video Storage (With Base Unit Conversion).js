function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const UNIT_POWERS = {
    B: 0,
    KB: 1,
    MB: 2,
    GB: 3,
    TB: 4,
  };

  const VALID_VIDEO_UNITS = ["B", "KB", "MB", "GB"];
  const VALID_DRIVE_UNITS = ["GB", "TB"];

  if (!VALID_VIDEO_UNITS.includes(videoUnit)) return "Invalid video unit";
  if (!VALID_DRIVE_UNITS.includes(driveUnit)) return "Invalid drive unit";

  const driveBytes = driveSize * 1000 ** UNIT_POWERS[driveUnit];
  const videoBytes = videoSize * 1000 ** UNIT_POWERS[videoUnit];

  return Math.floor(driveBytes / videoBytes);
}
