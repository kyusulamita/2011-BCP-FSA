/* An array is a list-like data structure in JavaScript */

let numbers = [23, 34, 2];

let petNames = ['Mr. Bear', 'Mr. Sheep', 'Planty', 'Pusheen'];

let strVar = 'a value';
let numVar = 34;


let mixedBag = [ 30 , true, 'apples', null, strVar, numVar ];

/* the values inside of an array are called elements */

console.log(typeof petNames);
// "object"

let names = ['George', 'John', 'Thomas'];
console.log(Array.isArray(names));
console.log(Array.isArray('i am not an array'));