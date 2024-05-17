let cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    mileage: 25000,
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: 2020,
    mileage: 15000,
  },
  {
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    mileage: 30000,
  },
  {
    make: 'Chevrolet',
    model: 'Impala',
    year: 2021,
    mileage: 10000,
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    mileage: 5000,
  },
];

console.log(cars);

function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileage = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest, cars[0])
  );
  const lowestMileage = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : highest, cars[0])
  );
  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileage,
    lowestMileage,
    totalMileage,
  };
}
