// http://www.pythontutor.com/visualize.html#code=/*%20%0A%20%20.indexOf%20is%20also%20an%20array%20method,%20%0A%20%20and%20works%20the%20same%20way%20as%20the%20string%20method%20of%20the%20same%20name%20%0A%20%20learn%20more%3A%20https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice%0A%0A*/%0A%0A//%20let%20names%20%3D%20%5B%22Mr%20Bear%22,%20%22Pusheen%22,%20%22Planty%22,%20%22Mr%20Sheep%22%5D%3B%0A//%20console.log%28names.indexOf%28%22Planty%22%29%29%3B%0A//%20console.log%28names.indexOf%28%22Pusheen%22,%202%29%29%3B%0A//%20console.log%28names.indexOf%28%22Mr%22%29%29%3B%0A%0A%0A/*%20%0A%20%20.includes%20takes%20a%20value,%20%0A%20%20and%20returns%20true%20if%20the%20value%20is%20an%20element%20in%20the%20array%0A%20%20learn%20more%3A%20https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes%0A%0A*/%0A%0Alet%20names%20%3D%20%5B%22Mr%20Bear%22,%20%22Pusheen%22,%20%22Planty%22,%20%22Mr%20Sheep%22%5D%3B%0Aconsole.log%28names.includes%28%22Planty%22%29%29%3B%0Aconsole.log%28names.includes%28%22Pusheen%22%29%29%3B%0Aconsole.log%28names.includes%28%22Pusheen%22,%202%29%29%3B%0Aconsole.log%28names.includes%28%22Mr%22%29%29%3B%0A%0A%0Aif%20%28!names.includes%28%22Pusheen%22%29%29%7B%0A%20%20console.log%28%22does%20not%20include%22%29%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

/* 
  .indexOf is also an array method, 
  and works the same way as the string method of the same name 
  @param elemToLookFor
  @param strIdx
  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// console.log(names.indexOf("Planty"));
// console.log(names.indexOf("Pusheen"));

// console.log(names.indexOf("Mr"));


/* 
  .includes takes a value, 
  and returns true if the value is an element in the array
  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
*/

let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
console.log(names.includes("Planty"));
console.log(names.includes("Pusheen"));
console.log(names.includes("Pusheen", -3)); // names.length - 3
console.log(names.includes("Mr"));


// if (!names.includes("Pusheen")){
//   console.log("does not include")
// } else {
//   console.log('pusheen is in there')
// }