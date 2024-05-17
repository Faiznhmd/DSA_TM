//That takes in two array and returns an array containing the intersaction ot the two input array

function arrayIntersaction(arr1, arr2) {
  const intersectionarr = [];

  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionarr.includes(arr1[i])) {
      intersectionarr.push(arr1[i]);
    }
  }
  return intersectionarr;
}
