function battle(ourTeam, opponent) {
  const LETTER_SCORE = {
    ...Object.fromEntries(
      Array.from({ length: 26 }, (_, i) => [String.fromCharCode(97 + i), i + 1])
    ),
    ...Object.fromEntries(
      Array.from({ length: 26 }, (_, i) => [
        String.fromCharCode(65 + i),
        (i + 1) * 2,
      ])
    ),
  };

  const scoreWord = (word) =>
    [...word].reduce((sum, char) => sum + (LETTER_SCORE[char] || 0), 0);

  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  if (ourWords.length !== opponentWords.length) return "Invalid input!";

  const results = ourWords.map((word, i) =>
    Math.sign(scoreWord(word) - scoreWord(opponentWords[i]))
  );

  const ourWins = results.filter((r) => r === 1).length;
  const opponentWins = results.filter((r) => r === -1).length;

  return ourWins > opponentWins
    ? "We win"
    : ourWins < opponentWins
    ? "We lose"
    : "Draw";
}
