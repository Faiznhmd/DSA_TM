//write a function called getMaxno in  an array and return the largest no of them

function getMaxNo(arr) {
  let max = arr[0];
  for (i = 1; i > arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}
