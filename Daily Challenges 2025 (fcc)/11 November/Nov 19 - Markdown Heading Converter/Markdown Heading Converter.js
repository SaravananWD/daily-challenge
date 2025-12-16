/*
Challenge #66

Date: November 19, 2025
Name: Markdown Heading Converter
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-19
*/

function convert(heading) {
  const split = heading.trim().split(" ");
  const hashes = split[0];
  const text = split.slice(1).join(" ").trim();

  if (!/^#{1,6}$/.test(hashes)) return "Invalid format";

  return `<h${hashes.length}>${text}</h${hashes.length}>`;
}

console.log(convert("# My Heading Text"));
