// the continue keyword will cause the loop to skip to the next iteration
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//     console.log('after the continue')
//   }
//   console.log('i is:', i);
// }
// log out all the odd numbers

//  3 / 2 = R1

// for (let i = 0; i < 10; i++){
//   const isOdd = ((i % 2) === 1)
//   if (!isOdd){
//     continue;
//   }
//   console.log("is odd", i)
// }

// the continue keyword also works in while loops
let count = 5;
while (count >= 1) {
  
  // evenly divisible by two, must be even
  if (count % 2 === 0) {
    console.log("help me im stuck", count)
    count--;
    continue;
  }
  console.log('count is', count);
  count--;
}
