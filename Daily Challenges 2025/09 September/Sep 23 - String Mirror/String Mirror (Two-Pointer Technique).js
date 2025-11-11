function isMirror(str1, str2) {
  const cleanString = (s) => s.replace(/[^A-Za-z]/g, "");
  const cleaned1 = cleanString(str1);
  const cleaned2 = cleanString(str2);

  if (cleaned1.length !== cleaned2.length) return false;

  let left = 0;
  let right = cleaned2.length - 1;

  while (left < cleaned1.length) {
    if (cleaned1[left] !== cleaned2[right]) return false;
    left++;
    right--;
  }

  return true;
}
