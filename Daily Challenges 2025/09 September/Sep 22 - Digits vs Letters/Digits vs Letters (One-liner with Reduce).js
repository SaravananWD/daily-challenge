const digitsOrLetters = (str) => {
  const { digits, letters } = [...str].reduce(
    (acc, char) => ({
      digits: acc.digits + (/[0-9]/.test(char) ? 1 : 0),
      letters: acc.letters + (/[a-zA-Z]/.test(char) ? 1 : 0),
    }),
    { digits: 0, letters: 0 }
  );

  return digits > letters ? "digits" : letters > digits ? "letters" : "tie";
};
