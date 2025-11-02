const verify = (message, key, signature) =>
  [...(message + key)].reduce((sum, char) => {
    const code = char.charCodeAt(0);
    return (
      sum +
      (code >= 97 && code <= 122
        ? code - 96
        : code >= 65 && code <= 90
        ? code - 38
        : 0)
    );
  }, 0) === signature;
