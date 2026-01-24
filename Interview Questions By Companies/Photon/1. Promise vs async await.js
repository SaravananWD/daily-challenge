console.log("Program initiated");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1500);
  });
}

fetchData()
  .then((result) => {
    console.log("Fetch result via Promise: " + result);
  })
  .catch((error) => {
    console.log(error);
  });

(async function getData() {
  try {
    const result = await fetchData();
    console.log("Fetch result via Async Await: " + result);
  } catch (error) {
    console.log(error);
  }
})();
