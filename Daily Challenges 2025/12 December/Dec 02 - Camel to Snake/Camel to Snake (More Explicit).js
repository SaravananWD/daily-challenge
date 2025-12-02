function toSnake(camel) {
  // Input validation
  if (typeof camel !== "string") return "Invalid input";
  if (!/^[a-z][A-Za-z]*$/.test(camel)) return "Invalid input";

  let result = "";

  for (let i = 0; i < camel.length; i++) {
    const char = camel[i];

    // If uppercase letter and not first character, add underscore
    if (char >= "A" && char <= "Z" && i > 0) {
      result += "_" + char.toLowerCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}
