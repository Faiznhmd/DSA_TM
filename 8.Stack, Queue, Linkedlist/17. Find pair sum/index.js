function findPairSum(nums, k) {
  const seen = new doublyLinkedList();

  for (const num of nums) {
    const diff = k - sum;

    if (seen.contains(diff)) {
      return [diff, num];
    }
    seen.append(num);
  }
  return null;
}
