function battle(ourTeam, opponent) {
  const getLetterScore = (letter) => {
    const code = letter.charCodeAt(0);
    if (code >= 97 && code <= 122) return code - 96; // a-z: 1-26
    if (code >= 65 && code <= 90) return (code - 64) * 2; // A-Z: 2-52
    return 0; // Handle non-letter characters
  };

  const getWordScore = (word) =>
    [...word].reduce((score, letter) => score + getLetterScore(letter), 0);

  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  if (ourWords.length !== opponentWords.length) {
    return "Invalid input!";
  }

  let ourScore = 0;
  let opponentScore = 0;

  for (let i = 0; i < ourWords.length; i++) {
    const ourWordScore = getWordScore(ourWords[i]);
    const opponentWordScore = getWordScore(opponentWords[i]);

    if (ourWordScore > opponentWordScore) ourScore++;
    else if (ourWordScore < opponentWordScore) opponentScore++;
  }

  if (ourScore > opponentScore) return "We win";
  if (ourScore < opponentScore) return "We lose";
  return "Draw";
}
