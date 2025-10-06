const sendMessage = (route) =>
  Number(
    (
      route.reduce((a, b) => a + b) / 300000 +
      Math.max(0, route.length - 1) * 0.5
    ).toFixed(4)
  );
