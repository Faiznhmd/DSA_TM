function duplicateArray(arr) {
  const uniqueArr = [];
  for (i = 0; arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function remove(arr) {
  const duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    if (!duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate;
}
