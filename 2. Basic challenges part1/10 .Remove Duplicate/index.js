function duplicateArray(arr) {
  const uniqueArr = [];
  for (i = 0; arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
