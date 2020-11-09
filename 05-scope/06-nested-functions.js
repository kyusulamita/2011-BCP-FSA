/* consider nested functions */
// http://www.pythontutor.com/visualize.html#code=let%20globalVar%20%3D%20'global'%3B%0Afunction%20outer%28%29%20%7B%0A%20%20let%20outerVar%20%3D%20'outer'%3B%0A%0A%20%20function%20inner%28%29%20%7B%0A%20%20%20%20let%20innerVar%20%3D%20'inner'%3B%0A%20%20%20%20console.log%28globalVar,%20outerVar,%20innerVar%29%3B%0A%20%20%7D%0A%0A%20%20inner%28%29%3B%0A%7D%0Aouter%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
let globalVar = 'global'; // will work, before function call
function outer() {
  let outerVar = 'outer';

  function inner() {
    let innerVar = 'inner';
    console.log(globalVar, outerVar, innerVar);
  }

  inner();
}

outer();



// // let globalVar = 'global'; // will work, before function call
// outer();
// // let globalVar = 'global'; // Won't work

/* Example 2
let collision = 'global';
function outer(collision) {
  function inner() {
    let collision = 'inner';
    console.log(collision);
  }
  inner();
}
outer('outer');
*/

/* Example 3
let collision = 'global';
function outer(collision) {
  function inner() {
    console.log(collision);
  }
  inner();
}
outer('outer');
*/

// /* Example 4

// let collision = 'global';
// function outer(){
//   function inner() {
//     console.log(collision)
//   }
//   inner()
// }
// outer('outer');

// */

