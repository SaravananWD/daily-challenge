/*
Sort months array by length of each string
*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const sort = months.sort((a, b) => {
  const lena = a.length;
  const lenb = b.length;

  if (lena < lenb) {
    return -1;
  } else if (lena > lenb) {
    return 1;
  } else return 0;
});

console.log(sort);
