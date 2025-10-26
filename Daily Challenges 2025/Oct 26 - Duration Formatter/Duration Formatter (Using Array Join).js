function format(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(hours.toString());
    parts.push(minutes.toString().padStart(2, "0"));
  } else {
    parts.push(minutes.toString());
  }

  parts.push(secs.toString().padStart(2, "0"));
  return parts.join(":");
}
