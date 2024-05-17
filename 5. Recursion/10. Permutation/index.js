function permutation(str) {
  let result = [];

  if (str.length === 0) {
    result.push('');
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutation = permutation(restOfString);
    for (let j = 0; j < subPermutation.length; j++) {
      result.push(firstChar + subPermutation[j]);
    }
  }
}
