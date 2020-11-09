/* parameters are also locally scoped */
let message = 'think globally';
function logAMessage(message) {
  // message = undefined
  console.log(message);
}
// logAMessage('HELLLLO');
logAMessage();

// let message = 'think globally';

// function logAMessage(message) {
//   console.log(message);
// }
// logAMessage();

// let message = 'think globally';
// function logAMessage(message = 'Hi Hello') {
//   // message = undefined
//   console.log(message);
// }
// logAMessage('HELLLLO');
// logAMessage();