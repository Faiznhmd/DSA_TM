function maxSubArray(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length; i++) {
    let currentSum = 0;
    for (let j = 1; j < k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
