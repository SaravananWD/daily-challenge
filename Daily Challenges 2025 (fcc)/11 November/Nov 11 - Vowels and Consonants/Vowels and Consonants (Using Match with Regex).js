function count(str) {
  const lowerStr = str.toLowerCase();
  const vowels = (lowerStr.match(/[aeiou]/g) || []).length;
  const consonants = (lowerStr.match(/[b-df-hj-np-tv-z]/g) || []).length;

  return [vowels, consonants];
}
