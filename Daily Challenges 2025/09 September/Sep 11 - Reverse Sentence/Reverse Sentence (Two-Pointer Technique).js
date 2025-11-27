function reverseSentence(sentence) {
  const words = sentence.trim().split(/\s+/);
  let left = 0,
    right = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(" ");
}
