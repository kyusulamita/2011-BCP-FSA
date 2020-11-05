// 10 && 20
// 20
// if (20)
if (10 && 20) {
  console.log('both 10 and 20 are truthy values');
}

// 10 && 0
// 0
// if (0)
// if (Boolean(0)) // false
if (10 && 0) {
  console.log(' :( ');
} else {
  console.log('both 10 and 0 are not both truthy values');
}

// /* 
//   && returns the first falsey value, 
//   or the last value if all are truthy 
// */

// let returnedValue1 = 10 && 'apples' && 0 && null;
// console.log('returnedValue1:', returnedValue1);


// let returnedValue2 = 'lucky' && 'number' && 7;
// console.log('returnedValue2:', returnedValue2);


// if (!null){
//   console.log('if')
// } else {
//   console.log('else')
// }
