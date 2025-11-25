/*
Challenge #72

Date: November 25, 2025
Name: Message Validator
Link: https://chat.deepseek.com/a/chat/s/3f3240c3-efb0-47c8-9a32-7edbfa2b0613
*/

function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
  });
}

console.log(fizzBuzz(15));
