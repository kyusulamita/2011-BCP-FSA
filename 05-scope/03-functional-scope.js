/* 
  Variables declared inside of a function are 'locally-scoped'. 
  They cannot be referenced outside of the function.   
*/
// http://www.pythontutor.com/visualize.html#code=function%20happyFunction%28%29%20%7B%0A%20%20let%20message%20%3D%20'I%20am%20so%20happy!'%3B%0A%20%20console.log%28message%29%3B%0A%7D%0A%0AhappyFunction%28%29%3B%0Aconsole.log%28message%29%3B%0A&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

function happyFunction() {
  let message = 'I am so happy!';
  console.log(message);
}

happyFunction();
console.log(message);

