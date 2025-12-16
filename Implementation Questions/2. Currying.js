// Currying Function
function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Same example using callback
// const currying = (a) => (b) => (c) => a + b + c;

console.log("First call:\n", currying(1));
console.log("Second call:\n", currying(1)(2));
console.log("Third call:\n", currying(1)(2)(3));

const halfRun = currying(1)(2);

console.log(halfRun(7));
