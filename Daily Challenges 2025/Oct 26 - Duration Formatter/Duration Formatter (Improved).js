function format(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Format seconds to always be 2 digits
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  if (hours > 0) {
    // Format minutes to 2 digits when hours are present
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    // Minutes can be single digit when no hours
    return `${minutes}:${formattedSeconds}`;
  }
}
