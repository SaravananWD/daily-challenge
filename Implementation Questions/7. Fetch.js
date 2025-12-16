async function getData() {
  try {
    const response = await fetch("url");
    if (!response.ok) throw new Error("Error", response.status);

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}
