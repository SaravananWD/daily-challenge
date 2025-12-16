function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const VALID_VIDEO_UNITS = new Set(["B", "KB", "MB", "GB"]);
  const VALID_DRIVE_UNITS = new Set(["GB", "TB"]);

  if (!VALID_VIDEO_UNITS.has(videoUnit)) return "Invalid video unit";
  if (!VALID_DRIVE_UNITS.has(driveUnit)) return "Invalid drive unit";

  const toBytes = (size, unit) => {
    const conversions = {
      B: size,
      KB: size * 1000,
      MB: size * 1000 * 1000,
      GB: size * 1000 * 1000 * 1000,
      TB: size * 1000 * 1000 * 1000 * 1000,
    };
    return conversions[unit];
  };

  return Math.floor(
    toBytes(driveSize, driveUnit) / toBytes(videoSize, videoUnit)
  );
}
