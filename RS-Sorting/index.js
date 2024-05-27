//Sort the given Array in Ascending order
//[10,14,14,29,37]

//Bubble Sort

const BubbleSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

//selection sort
