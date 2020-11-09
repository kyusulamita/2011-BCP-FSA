/* functions generally should not change globally scoped variables */
// let alwaysTrue = true;

// function dontMindMe() {
//   alwaysTrue = false; // danger! changing global variable!
// }
// dontMindMe();

// if (alwaysTrue) {
//   console.log('all is well');
// } else {
//   throw new Error('everything is broken');
// }

/* functions generally should not change globally scoped variables */

// const alwaysTrue = true;
// function dontMindMe() {
//   const alwaysTrue = false; // this is ok, creating a local variable
// }
// dontMindMe();

// if (alwaysTrue) {
//   console.log('all is well');
// } else {
//   throw new Error('everything is broken');
// }




function sum(num1, num2) {
  let total;
  total += num1;
  total += num2;

  return total;
}

console.log(sum(3, 4));
console.log(sum(3, 4));
console.log(sum(3, 4));