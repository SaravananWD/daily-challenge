const obj = [
  { apple: 2, orange: 1, banana: 3, grapes: 1 },
  { apple: 2, orange: 1, banana: 3 },
  { apple: 2, orange: 1, banana: 3, grapes: 2 },
];

const total = obj.reduce((acc, item) => {
  for (let key in item) {
    acc[key] = (acc[key] || 0) + item[key];
  }
  return acc;
}, {});
