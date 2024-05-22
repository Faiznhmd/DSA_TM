const nameSet = new Set(['John', 'Jane', 'Joe']);

//In set you dont add a same name in the nameset

//add a set
nameSet.add('Jack');

//check for values
console.log(nameSet.has('John')); //true
console.log(nameSet.has('Brad')); //False

//size check

console.log(nameSet.size);

//convert into aarray
const nameArray = [...nameSet];
console.log(nameArray);

//clear
nameSet.clear();
console.log(nameSet.size);
