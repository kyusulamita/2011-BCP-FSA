/* eslint-disable no-constant-condition */
// the break keyword breaks out of the loop permanently
let myGrade = 'A';
while (true) {

  myGrade += '+';
  // 'A++'
  if (myGrade.length === 3) {
    break;
    console.log("After break")
  }

  console.log("end of the loop")
}
console.log(myGrade);

// the break keyword also works in for loops
// for (let i = 10; i >= 1; i--) {
//   console.log('i is', i);
//   if (i === 7) {
//     break;
//   }
// }

// console.log('over here');
