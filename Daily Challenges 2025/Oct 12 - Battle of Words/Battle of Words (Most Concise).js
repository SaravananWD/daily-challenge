function battle(ourTeam, opponent) {
  const score = (char) => {
    const code = char.charCodeAt(0);
    return code >= 97 && code <= 122
      ? code - 96
      : code >= 65 && code <= 90
      ? (code - 64) * 2
      : 0;
  };

  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  if (ourWords.length !== opponentWords.length) return "Invalid input!";

  const wins = ourWords.reduce(
    (count, word, i) =>
      count +
      Math.sign(
        [...word].reduce((s, c) => s + score(c), 0) -
          [...opponentWords[i]].reduce((s, c) => s + score(c), 0)
      ),
    0
  );

  return wins > 0 ? "We win" : wins < 0 ? "We lose" : "Draw";
}
