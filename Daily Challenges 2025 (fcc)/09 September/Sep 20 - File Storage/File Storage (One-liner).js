const numberOfFiles = (fileSize, fileUnit, driveSizeGb) =>
  Math.floor(
    (driveSizeGb * 1e9) / (fileSize * { B: 1, KB: 1e3, MB: 1e6 }[fileUnit])
  );
