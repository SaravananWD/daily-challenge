let obj2 = [
  { sno: 1, score: 20 },
  { sno: 2, score: 30 },
  { sno: 1, score: 50 },
];

let newArr = [];

for (let item of obj2) {
  const i = newArr.findIndex((x) => x.sno === item.sno);
  if (i < 0) {
    newArr.push(item);
  } else {
    newArr[i].score += item.score;
  }
}
console.log(JSON.stringify(newArr));
// [
//   { sno: 1, score: 70 },
//   { sno: 2, score: 30 },
// ];
