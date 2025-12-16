function toSnake(camel) {
  // Validate input contains only letters and starts lowercase
  if (!/^[a-z][A-Za-z]*$/.test(camel)) {
    return "Invalid input";
  }

  // Convert camel to snake
  const snake = camel.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

  return snake;
}
