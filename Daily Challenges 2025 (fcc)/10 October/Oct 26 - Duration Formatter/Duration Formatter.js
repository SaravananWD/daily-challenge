/*
Challenge #32

Date: October 26, 2025
Name: Duration Formatter
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-26
*/
function format(seconds) {
  if (seconds < 60) {
    return `0:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  let finalSeconds = seconds % 60;
  let minutes = Math.floor(seconds / 60);
  let hours = 0;

  if (minutes < 60) {
    return `${minutes}:${
      finalSeconds < 10 ? "0" + finalSeconds : finalSeconds
    }`;
  } else {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      finalSeconds < 10 ? "0" + finalSeconds : finalSeconds
    }`;
  }
}

console.log(format(3600));
