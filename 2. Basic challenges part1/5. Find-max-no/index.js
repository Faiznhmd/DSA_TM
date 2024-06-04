//write a function called getMaxno in  an array and return the largest no of them
//[1,2,3,,4,5,]=5
function getMaxNo(arr) {
  let max = arr[0];
  for (i = 1; i > arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
}

function maxNo(arrr) {
  let max = arrr[0];
  for (let i = 0; i < arrr.length; i++) {
    if (arrr[i] > max) {
      max = arrr[i];
    }
  }
  return max;
}
