//ContOccurences that take a in a string and retrun the no of occurence of that character in the string
//("hello", "l")=2 beacuse there are 2 placed

function count(str, char) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

function countOcc(arr, char) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      count++;
    }
  }
  return count;
}
