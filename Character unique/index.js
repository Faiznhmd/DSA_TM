// write a function called allcharacterUnique that takes in a string true and false depending on wheather all characters in the string are unique

//abcd=true
//programming=false(m)

function areAllCharUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount[char]) {
      return false;
    }

    charCount[char] = true;
  }
  return charCount;
}
