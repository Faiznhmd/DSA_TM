//map
//give the no has to doubled the numbers
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num, index) => {
  return num * 2; //this line double the array
  console.log(index); //this line give the index of every no
});
console.log(doubleNumbers);

//filter
//return  only even  numbers
const evenNumber = [4, 6, 8, 2, 9, 45, 12, 18];
const onlyEvenNo = evenNumber.filter((num) => {
  return num % 2 === 0;
});
console.log(onlyEvenNo);

//Reduce
const sum = evenNumber.reduce((total, num) => {
  return total + num;
}, 0);
console.log(sum);
