/* note the inner function can access the scope of the outer function,but the opposite is not true */
// http://www.pythontutor.com/visualize.html#code=function%20outer%28%29%20%7B%0A%20%20let%20outerVar%20%3D%20'outer'%3B%0A%20%20function%20inner%28%29%20%7B%0A%20%20%20%20let%20innerVar%20%3D%20'inner'%3B%0A%20%20%20%20console.log%28outerVar,%20innerVar%29%3B%0A%20%20%7D%0A%20%20inner%28%29%3B%0A%20%20console.log%28innerVar%29%3B%0A%7D%0Aouter%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
/*
function outer() {
  let outerVar = 'outer';
  function inner() {
    let innerVar = 'inner';
    console.log(outerVar, innerVar);
  }
  inner();
  console.log(innerVar);
}
outer();
*/


/* the inner function still looks for a local declaration of the variable name before looking at the next level of scope */
// http://www.pythontutor.com/visualize.html#code=function%20outer%28%29%20%7B%0A%20%20let%20outerVar%20%3D%20'outer'%3B%0A%20%20function%20inner%28outerVar%29%20%7B%0A%20%20%20%20//%20outerVar%20undefined%0A%20%20%20%20let%20innerVar%20%3D%20'inner'%3B%0A%20%20%20%20console.log%28outerVar,%20innerVar%29%3B%0A%20%20%7D%0A%20%20inner%28%29%3B%0A%7D%0Aouter%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
// /*
function outer() {
  let outerVar = 'outer';
  function inner(outerVar) {
    // outerVar = undefined
    let innerVar = 'inner';
    console.log(outerVar, innerVar);
  }
  inner();
}
outer();
// */



/*
Recap: 
How does JS look for the value for a given variable?
---------------------------
1- check locally (ex. within the same function/code block, or the argument passed into the function)
2- check the function/code block that the function is contained inside of
3 - etc.
4 - check global scope
5 - if not found -> ReferenceError
*/

/*
Possible analogy for how to think about which scopes can access which variables (can use as needed for however many nested scopes you have)
--------------------------------------------------------------------
- assume for this example that there is the global scope, then an outer function, and an inner function (that is defined inside of the outer function)
- think of the global scope as the grandparent
- think of the outer function as the parent
- think of the inner function as the child
- a child looks up to its parents & grandparents: therefore the inner function (child) has access to all of the functions/variables that exist in the parent (outer function) scope and in the grandparent (global) scope
- a parent looks up to the grandparents: therefore the outer function (parent) has access to al of the functions/variables that exist in the grandparent (global) scope; however, because a parent does NOT look up to the child, the outer function does NOT have access to any of the functions/variables declared in the child (inner function) scope
- a grandparent does NOT look up to its children or its grandchildren: therefore the global scope does NOT have access to any of the functions/variables declared in the parent (outer function) scope or the child (inner function) scope
*/
