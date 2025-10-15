function speeding(speeds, limit) {
  const speedingData = speeds.reduce(
    (acc, speed) => {
      if (speed > limit) {
        acc.count++;
        acc.totalExcess += speed - limit;
      }
      return acc;
    },
    { count: 0, totalExcess: 0 }
  );

  const average =
    speedingData.count > 0 ? speedingData.totalExcess / speedingData.count : 0;

  return [speedingData.count, average];
}
console.log(speeding([56, 57, 58], 55));
