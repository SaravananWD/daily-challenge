function printStars(n) {
  let lastCount = -1;
  for (let i = 0; i < n; i++) {
    const count = lastCount + 2;
    let stars = "";
    for (let j = 0; j < count; j++) {
      stars += "*";
    }
    console.log(stars);
    lastCount += 2;
  }
}

printStars(3);

//  Expected Output:
//  *
//  ***
//  *****
