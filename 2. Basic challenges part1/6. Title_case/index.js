//write a function call tittlecase that takes in a string and return the string with the first letter of each word capatilized

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const words = title.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(' ');
};
