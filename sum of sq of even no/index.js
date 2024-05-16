const evenNO = [2, 4, 6, 8, 12, 14, 16, 18];

function sumofEvensq(evenNO) {
  const evensq = evenNO
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, sq) => sum + sq, 0);
  return evensq;
}
