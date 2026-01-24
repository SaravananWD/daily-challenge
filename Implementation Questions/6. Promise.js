const request = new Promise((resolve, reject) => {
  const status = Math.random() < 0.5 ? true : false;
  if (status) {
    resolve("Request resolved.");
  } else {
    reject("Request rejected.");
  }
});

request.then((result) => console.log(result)).catch((err) => console.log(err));

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);

// Promise.any([p1, p2]).then((r) => console.log(JSON.stringify(r)));
