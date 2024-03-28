//u loop from 1 to 100 and print out each number if the number divisible by 3 then its print fizz and the number is divisible by 5 then its print buzz . its a number is divisible by both the number then its  print fizzbuzz

function fizzBuzz(num) {
  const arr = [];
  for (i = 0; i < num.length; i++) {
    if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else if (i % 3 && i % 5 === 0) {
      arr.push('FizzBUzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}
