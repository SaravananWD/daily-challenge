/*
Challenge #95

Date: December 2, 2025
Name: Camel to Snake
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-02
*/

function toSnake(camel) {
  return camel.replace(/[A-Z]/g, (match) => "_" + match.toLowerCase());
}

console.log(toSnake("helloWorld"));
