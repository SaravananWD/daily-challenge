function to12(time) {
  const hour = parseInt(time.slice(0, 2), 10);
  const minute = parseInt(time.slice(2), 10);

  const date = new Date();
  date.setHours(hour, minute);

  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
