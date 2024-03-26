//write a function call tittlecase that takes in a string and return the string with the first letter of each word capatilized

function title_case(str) {
  const words = str.toLowerCase().split();
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join();
}
