// http://www.pythontutor.com/visualize.html#code=/*%20%0A%20%20.push%20takes%20one%20or%20more%20elements%20and%20adds%20them%20to%20the%20end%20of%20the%20array.%0A%20%20.push%20returns%20the%20new%20length%20of%20the%20array.%20%0A%0A%20%20learn%20more%3A%20https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push%0A*/%0A//%20let%20names%20%3D%20%5B%22Mr%20Bear%22,%20%22Pusheen%22,%20%22Planty%22%5D%3B%0A//%20let%20newLength%20%3D%20names.push%28%22Mr%20Sheep%22,%20%22Theodore%22%29%0A//%20console.log%28names%29%3B%0A//%20console.log%28newLength%29%3B%0A%0A%0A/*%20%0A%20%20.pop%20removes%20one%20element%20from%20the%20end%20of%20the%20array.%20%0A%20%20it%20returns%20the%20removed%20element%20%0A%20%20learn%20more%3A%20https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop%0A*/%0A//%20const%20names%20%3D%20%5B%22Mr%20Bear%22,%20%22Pusheen%22,%20%22Planty%22,%20%22Mr%20Sheep%22%5D%3B%0A//%20let%20mrSheep%20%3D%20names.pop%28%29%3B%0A//%20console.log%28names%29%3B%0A//%20console.log%28mrSheep%29%3B%0A%0A//%20const%20mr%20%3D%20%22Mr%22%0A//%20mr%20%2B%3D%20%22%20Bear%22%3B%0A//%20const%20mrBear%20%3D%20mr%20%2B%20%22%20Bear%22%0A//%20console.log%28mrBear%29%0A/*%20%0A%20%20mutating%20an%20array%20vs%20reassigning%0A*/%0A%0Aconst%20names%20%3D%20%5B%22Mr%20Bear%22,%20%22Pusheen%22,%20%22Planty%22,%20%22Mr%20Sheep%22%5D%3B%0A//%20reassigning,%20what%20names%20is%20pointing%0A//%20names%20%3D%20%5B%5D%3B%0A%0A%0Awhile%20%28names.length%20%3E%200%29%20%7B%0A%20%20const%20goodbyePet%20%3D%20names.pop%28%29%3B%0A%20%20console.log%28%22goodbye%22,%20goodbyePet%29%3B%0A%7D%0A%0Aconsole.log%28names%29&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
/* 
  .push takes one or more elements and adds them to the end of the array.
  .push returns the new length of the array. 

  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/
// let names = ['Mr Bear', 'Pusheen', 'Planty'];
// let newLength = names.push('Mr Sheep', 'Thomas');
// names.push('Theodore');
// console.log(names);
// console.log(newLength);
// console.log(names.length);



/* 
  .pop removes one element from the end of the array. 
  it returns the removed element 
  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/
// const names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// let mrSheep = names.pop();
// names.pop();
// console.log(names);
// console.log(mrSheep);





/* 
  mutating an array vs reassigning
*/

// const names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];

// names = [];

// names.pop();
// console.log(names);

// while (names.length > 0) {
//   const goodbyePet = names.pop();
//   console.log("goodbye", goodbyePet);
// }

// console.log(names);

