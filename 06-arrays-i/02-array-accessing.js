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

// names is holding a list
// const names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];


// changing values on the original list
// names[0] = "Sir Bear III";
// names[2] = "McPlanty";
// console.log(names);

// will throw an error, here we're trying to change
// what list we're looking at
// names = ['Hello']

/*

  Arrays, like strings, have a length property 
  https://goo.gl/SJe7Yi
*/

let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
console.log(names.length);

// // this means we can use a for loop to iterate over it!
// 0 -> end of the array

for (let i = 0; i < names.length; i++) {
  const element = names[i];
  console.log('the element at ', i , ' is ', element)

  // capitalizing the elements and then replacing them in the same place in the array
  names[i] = element.toUpperCase();
}


console.log(names);


// end of the array -> 0

