function* count(max) {
  let n = 0;
  while (n <= max) {
    yield n++;
  }
}

const gen = count(3);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// let next = gen.next();
// while (!next?.done) {
//   console.log(next);
//   next = gen.next();
// }
