function longestConsecutiveSequence(nums) {
  const numSet = new Set(nums);
  let longestSequenc = 0;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }
      longestSequenc = Math.max(longestSequenc, currentSequence);
    }
  }
  return longestSequenc;
}
