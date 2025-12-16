function compare(word, guess) {
  if (word.length !== guess.length) return;

  // create object with scores for exact matches
  const record = {};
  const len = word.length;
  word.split("").forEach((value, index) => {
    let score = null;
    let tested = false;
    if (value === guess[index]) {
      score = 2;
      tested = true;
    }
    record[index] = { index, value, tested, score };
  });

  console.log(
    `Object Created: \n ${JSON.stringify(
      record
    )} \n\nWord: ${word} | Guess: ${guess}`
  );

  // assign scores for other cases: no match and partial match
  for (let i = 0; i < len; i++) {
    console.log(`\nChecking GuessIndex ${i}: ${guess[i]}`);

    if (!word.includes(guess[i])) {
      record[i].score = 0;
      console.log(`Not Found`);
      console.log(`Update: s for ${i}: ${record[i].score}`);
    } else {
      const newIndex = getNewIndex(guess[i]);
      if (newIndex >= 0) {
        console.log(
          `Found in Different Index, ${newIndex}: ${record[newIndex].value}`
        );
        record[i].score = 1;
        record[newIndex].tested = true;
        console.log(
          `Update: i ${newIndex}, v ${record[newIndex].value}, ${record[newIndex].tested}, s for ${i}: ${record[i].score}`
        );
      } else if (record[i].score !== 2) {
        record[i].score = 0;
      }

      // only for logging
      if (!(newIndex >= 0)) {
        console.log(`Found Matches Already Tested`);
        console.log(`Update: s for ${i}: ${record[i].score}`);
      }
    }
  }

  // Function to find fresh index for a value
  function getNewIndex(checklVal) {
    for (let i = 0; i < len; i++) {
      if (record[i].value === checklVal && !record[i].tested) {
        // console.log(checklVal, "test", i);
        return i;
      }
    }
    return -1;
  }

  // generating result string with scores
  let result = "";
  for (let i = 0; i < len; i++) {
    result += record[i].score;
  }

  return result;
}

console.log(compare("APPLE", "POPPA"));
// console.log(compare("JAVASCRIPT", "TYPESCRIPT"));
