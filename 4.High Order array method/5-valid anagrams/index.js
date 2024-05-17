function validAnagram(str1, str2) {
  const freqcount1 = str1.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const freqcount2 = str2.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(freqcount1).every(
    (char) => freqcount1[char] === freqcount2[char]
  );
}
