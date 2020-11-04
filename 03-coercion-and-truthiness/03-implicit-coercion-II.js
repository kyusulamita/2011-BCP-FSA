console.log(true == 'true')
const leftSide = Number(true); // 1
const rightSide = Number('true'); // NaN

// Booleans can be coerced into numbers!
// Number(true) => 1
// Number(false) => 0

console.log(leftSide, rightSide);
console.log(leftSide === rightSide);

console.log(NaN === NaN);
console.log(4 === 4);