//ContOccurences that takea in a string and retrun the no of occurence of that character in the string

function count(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
