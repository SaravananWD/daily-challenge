function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
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
