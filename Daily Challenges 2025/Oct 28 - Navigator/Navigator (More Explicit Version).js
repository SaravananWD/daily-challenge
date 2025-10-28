function navigate(commands) {
  const history = ["Home"];
  let pointer = 0;

  for (const command of commands) {
    if (command === "Back") {
      pointer = Math.max(0, pointer - 1);
    } else if (command === "Forward") {
      pointer = Math.min(history.length - 1, pointer + 1);
    } else {
      const page = command.replace("Visit ", "");
      // Remove forward history and add new page
      history.splice(pointer + 1);
      history.push(page);
      pointer = history.length - 1;
    }
  }

  return history[pointer];
}
