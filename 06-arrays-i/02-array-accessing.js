/* 
  Accessing values
*/

// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);


/* 
  Assigning values
*/


// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];

// names[0] = "Sir Bear III";
// names[2] = "McPlanty";
// console.log(names);

/*

  Arrays, like strings, have a length property 
  https://goo.gl/SJe7Yi
*/

let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
console.log(names.length);
console.log(names[0].length);
// // this means we can use a for loop to iterate over it!
// 0 -> end of the array

// end of the array -> 0
for (let i = 0; i < names.length; i++) {
  const element = names[i];
  console.log('the element at ', i , ' is ', element)

  names[i] = element.toUpperCase();
}


console.log(names);

