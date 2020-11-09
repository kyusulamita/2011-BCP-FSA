/* Any block of code (code inside of curly brackets) creates its own scope, too */
// http://www.pythontutor.com/visualize.html#code=if%20%28true%29%20%7B%0A%20%20let%20block%20%3D%20'Jenny%20from%20the'%3B%0A%20%20console.log%28block,%20'block'%29%3B%0A%7D%0Aconsole.log%28block%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
// if (true) {
//   let block = 'Jenny from the';
//   console.log(block, 'block');
// }

// console.log(block);


/* the pre-ES6 var keyword ignores block scope */

if (true) {
  var block = 'Jenny from the';
  console.log(block, 'block');
}
console.log(block);

