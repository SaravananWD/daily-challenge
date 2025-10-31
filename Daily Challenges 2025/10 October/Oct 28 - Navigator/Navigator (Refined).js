function navigate(commands) {
  const history = ["Home"];
  let currentIndex = 0;

  for (const command of commands) {
    if (command === "Back") {
      currentIndex = Math.max(0, currentIndex - 1);
    } else if (command === "Forward") {
      currentIndex = Math.min(history.length - 1, currentIndex + 1);
    } else if (command.startsWith("Visit ")) {
      // Remove forward history and add new page
      history.length = currentIndex + 1;
      history.push(command.slice(6));
      currentIndex = history.length - 1;
    }
  }

  return history[currentIndex];
}
