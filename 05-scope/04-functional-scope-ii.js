/* What if a variable is defined locally and globally? */
// http://www.pythontutor.com/visualize.html#code=let%20message%20%3D%20'think%20globally'%3B%0Afunction%20logAMessage%28%29%20%7B%0A%20%20let%20msg%20%3D%20'act%20locally'%3B%0A%20%20/*%20if%20it%20can't%20find%20it%20locally,%20JS%20will%20look%20at%20the%20scope%20outside%20the%20function,%20this%20case,%20the%20global%20scope%20*/%20%0A%20%20console.log%28message%29%3B%0A%7D%0AlogAMessage%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

const message = 'think globally';
function logAMessage() {
  const message = 'act locally';
  // JS will look for message locally, first 
  console.log(message);
}
logAMessage();


/* What if a variable is defined locally and globally? */
// let message = 'think globally';
// function logAMessage() {
//   let msg = 'act locally';
//   /* if it can't find it locally, JS will look at the scope outside the function, this case, the global scope */ 
//   console.log(message);
// }
// logAMessage();