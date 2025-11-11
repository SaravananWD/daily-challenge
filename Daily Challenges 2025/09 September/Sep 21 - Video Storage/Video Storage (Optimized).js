function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const VIDEO_UNITS = ["B", "KB", "MB", "GB"];
  const DRIVE_UNITS = ["GB", "TB"];

  if (!VIDEO_UNITS.includes(videoUnit)) return "Invalid video unit";
  if (!DRIVE_UNITS.includes(driveUnit)) return "Invalid drive unit";

  const UNIT_FACTORS = {
    B: 1,
    KB: 1000,
    MB: 1000 ** 2,
    GB: 1000 ** 3,
    TB: 1000 ** 4,
  };

  const driveBytes = driveSize * UNIT_FACTORS[driveUnit];
  const videoBytes = videoSize * UNIT_FACTORS[videoUnit];

  return Math.floor(driveBytes / videoBytes);
}
