console.log(true == 'true')
// const leftSide = Number(true); // 1
// const rightSide = Number('true'); // NaN

// Booleans can be coerced into numbers!
// Number(true) => 1
// Number(false) => 0

// console.log(leftSide, rightSide);
// console.log(leftSide === rightSide);

// console.log(NaN === NaN);
// console.log(4 === 4);


// '' == false; // => true, kinda weird
// String == Boolean
// Number == Number
// Number('') == Number(false)
// 0 == 0
// true
const left = ''
const right = false;
console.log(left == right)

const leftSide = Number(left); // 0
const rightSide = Number(right); // 0
console.log(leftSide)
console.log(rightSide)

console.log(undefined == false); // false