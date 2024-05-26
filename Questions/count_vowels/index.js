//write a function countwovels that takes in a string and return the number of vowels in the string

function countVowels(str) {
  let formattedstr = str.toLowerCase();
  let count = 0;

  for (i = 0; i < formattedstr.length; i++) {
    const char = formattedstr[i];

    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }
  return count;
}
