function sendMessage(route) {
  const sum = route.reduce((sum, distance) => {
    return sum + distance;
  }, 0);

  const duration = sum / 300000 + (route.length - 1) * 0.5;

  const formatNum = Math.round(duration * 10000) / 10000;

  return formatNum;
}
console.log(sendMessage([10000, 21339, 50000, 31243, 10000]));
