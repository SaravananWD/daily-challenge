const isFizzBuzz = (seq) =>
  Array.isArray(seq) &&
  seq.every(
    (v, i) =>
      v === (++i % 15 ? (i % 5 ? (i % 3 ? i : "Fizz") : "Buzz") : "FizzBuzz")
  );
