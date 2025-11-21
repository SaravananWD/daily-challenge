// Looping over an Array:
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit); // Outputs: apple, banana, orange (each on a new line)
}

// Looping over a String:
const greeting = "Hello";
for (const char of greeting) {
  console.log(char); // Outputs: H, e, l, l, o (each on a new line)
}

// To access the index of elements during iteration
const numbers = [10, 20, 30];
for (const [index, value] of numbers.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}
