/*
Challenge details

Date: October 13, 2025
Name: 24 to 12
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-13
*/

function to12(time) {
  const TIME = {
    hour: Number(time.slice(0, 2)),
    minute: time.slice(2),
    convertedHour: 0,
    amPM: "",
  };

  if (TIME.hour >= 12) {
    TIME.convertedHour = TIME.hour === 12 ? TIME.hour : TIME.hour - 12;
    TIME.amPM = "PM";
  } else {
    TIME.convertedHour = TIME.hour === 0 ? 12 : TIME.hour;
    TIME.amPM = "AM";
  }

  return `${TIME.convertedHour}:${TIME.minute} ${TIME.amPM}`;
}

console.log(to12("1250"));

/*
slice HH and MM as numbers
if the HH number is bigger than 12 replace with HH-12 (14-12 = 2, 23-12 = 11)
if the HH number is 00 replklace with 12
if HH less than 12 add AM else PM
return new HHMM and AM or PM
*/
