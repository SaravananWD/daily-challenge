function spookify(boo) {
  let newData = boo.replace(/[_-]/g, "~");
  // - = ~
  // _ = ~

  const newArr = newData.split("");

  // Replaced with tilde character
  // Converted to array
  // Uppercase only the even letters

  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toLowerCase();
    const char = newArr[i];

    if (char !== "~") {
      count++;
      newArr[i] = char.toUpperCase();
    }
  }

  return newArr.join("");
}

console.log(spookify("TRICK-or-TREAT"));

//TrIcK~oR~tReAt

/*


  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].toLowerCase();
    if (newArr[i] !== "~") {
      if (count % 2 === 0) {
        newArr[i] = newArr[i].toUpperCase();
      }
      count++;
    }
  }


  */
