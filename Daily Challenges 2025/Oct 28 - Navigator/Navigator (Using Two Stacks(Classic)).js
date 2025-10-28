function navigate(commands) {
  let backStack = [];
  let current = "Home";
  let forwardStack = [];

  for (const command of commands) {
    if (command === "Back") {
      if (backStack.length > 0) {
        forwardStack.push(current);
        current = backStack.pop();
      }
    } else if (command === "Forward") {
      if (forwardStack.length > 0) {
        backStack.push(current);
        current = forwardStack.pop();
      }
    } else if (command.startsWith("Visit ")) {
      backStack.push(current);
      current = command.slice(6);
      forwardStack = []; // Clear forward history
    }
  }

  return current;
}
