const numberOfVideos = (videoSize, videoUnit, driveSize, driveUnit) => {
  const units = { B: 1, KB: 1e3, MB: 1e6, GB: 1e9, TB: 1e12 };
  if (!["B", "KB", "MB", "GB"].includes(videoUnit)) return "Invalid video unit";
  if (!["GB", "TB"].includes(driveUnit)) return "Invalid drive unit";
  return Math.floor(
    (driveSize * units[driveUnit]) / (videoSize * units[videoUnit])
  );
};
