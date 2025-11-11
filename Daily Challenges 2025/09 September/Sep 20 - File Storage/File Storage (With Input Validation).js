function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const VALID_UNITS = ["B", "KB", "MB"];

  if (!VALID_UNITS.includes(fileUnit)) {
    throw new Error('File unit must be "B", "KB", or "MB"');
  }

  if (fileSize <= 0 || driveSizeGb <= 0) {
    throw new Error("Sizes must be positive numbers");
  }

  const UNIT_FACTORS = {
    B: 1,
    KB: 1000,
    MB: 1000 * 1000,
    GB: 1000 * 1000 * 1000,
  };

  const driveBytes = driveSizeGb * UNIT_FACTORS["GB"];
  const fileBytes = fileSize * UNIT_FACTORS[fileUnit];

  return Math.floor(driveBytes / fileBytes);
}
