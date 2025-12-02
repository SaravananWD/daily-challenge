const toSnake = (camel) =>
  /^[a-z][A-Za-z]*$/.test(camel)
    ? camel.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    : "Invalid input";
