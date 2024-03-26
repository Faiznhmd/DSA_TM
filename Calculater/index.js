function calculater(num1, num2, operater) {
  let result;

  switch (operater) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;

    default:
      throw new Error('Invalid operater');
  }
  return result;
}

// calculater by using if else

function calculaters(nums1, nums2, operaters) {
  let results;
  if (operaters === '+') {
    results = nums1 + nums2;
  } else if (operaters === '-') {
    results = nums1 - nums2;
    z;
  } else if (operaters === '*') {
    results = nums1 * nums2;
  } else if (operaters === '/') {
    results = nums1 / nums2;
  } else {
    throw new Error('Invalid Operater');
  }
  return results;
}
