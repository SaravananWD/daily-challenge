const request = new Promise((resolve, reject) => {
  const status = Math.random() < 0.5 ? true : false;
  if (status) {
    resolve("Request resolved.");
  } else {
    reject("Request rejected.");
  }
});

request.then((result) => console.log(result)).catch((err) => console.log(err));
