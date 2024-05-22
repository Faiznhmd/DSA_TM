//Anagram means same word diffrent meaning  ( cat ,act )

function AnagramGrouping(words) {
  const anagramGroups = new Map();

  for (const word of words) {
    const sortedChars = word.split(' ').sort().join(' ');

    if (anagramGroups.has(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.get(sortedChars, [word]);
    }
  }
  return Array.from(anagramGroups.values());
}
