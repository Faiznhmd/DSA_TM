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

function count(str, char) {
  let counts = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counts++;
    }
  }
  return counts;
}

function index(nums, str) {
  let count = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === str) {
      count++;
    }
  }
  return count;
}
