const nameMap = new Map([
  [1, 'John'],
  [2, 'John'],
  [3, 'Jill'],
]);

console.log(nameMap);
//get method
console.log(nameMap.get(1));

//set method(adding to the newMap)
nameMap.set(4, 'Mike');

//check values
console.log(nameMap.has(1)); //true
console.log(nameMap.has(9)); //false

//remove values
nameMap.delete(1); //first key has been delete(true)
console.log(nameMap.has(1)); //it become false becoz the first key has been deleted

//get  size
console.log(nameMap.size);

const map2 = new Map([
  ['name', 'john'],
  [1, 'number one'],
  [true, 'really true'],
  [myFunction, 'My Function'],
  [myobj, 'my object'],
  [null, 'null'],
]);

console.log(map2);
