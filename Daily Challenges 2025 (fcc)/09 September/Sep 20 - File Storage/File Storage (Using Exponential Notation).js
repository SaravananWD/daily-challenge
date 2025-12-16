function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const UNIT_FACTORS = {
    B: 1, // 10^0
    KB: 1e3, // 10^3
    MB: 1e6, // 10^6
    GB: 1e9, // 10^9
  };

  return Math.floor(
    (driveSizeGb * UNIT_FACTORS["GB"]) / (fileSize * UNIT_FACTORS[fileUnit])
  );
}
