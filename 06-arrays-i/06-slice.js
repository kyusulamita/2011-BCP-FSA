/*

slice lets us make a copy of a section of the array or the whole array

@param startIndex [optional]
@param endIndex [optional]

https://goo.gl/P7617D
http://www.pythontutor.com/visualize.html#code=let%20petNames%20%3D%20%5B'Mr.%20Bear',%20'Mr.%20Sheep',%20'Planty',%20'Pusheen'%5D%3B%0A%0Alet%20petNames2%20%3D%20petNames.slice%28%29%3B%0A//%20let%20petNames2%20%3D%20petNames%3B%0A%0ApetNames.push%28%22Theodore%22%29%3B%0Aconsole.log%28petNames%29%3B%0Aconsole.log%28petNames2%29%3B%0A&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/

// let petNames = ['Mr. Bear', 'Mr. Sheep', 'Planty', 'Pusheen'];
// console.log(petNames)
// create a copy of the list and have petnames 2 look at that copy
// let petNames2 = petNames.slice();

// looking at the same list
// mutating the same list
// let petNames2 = petNames;

// console.log(petNames2);

// petNames.push("Theodore");

// console.log("petnames", petNames);
// console.log("petNames2 ", petNames2);


// no params, makes copy of the whole thing
// let petNamesCopy = petNames.slice();
// console.log(petNamesCopy);

// one argument, we start at index two and go all the way to the end
// petNamesCopy = petNames.slice(2);
// console.log(petNamesCopy);
// two arguments, we start at index 1 and end right before index 3
// petNamesCopy = petNames.slice(1, 3);
// console.log(petNamesCopy);

// one argument, we start 3 BEFORE THE END
// petNamesCopy = petNames.slice(-3);
// console.log(petNamesCopy)

// two arguments, we start 3 BEFORE THE END and stop 1 BEFORE THE END
// petNamesCopy = petNames.slice(-3, -1);
// petNamesCopy = petNames.slice(petNames.length - 3,  petNames.length - 1);

// console.log(petNamesCopy);

// start at index 2, stop at index 1 
// petNamesCopy = petNames.slice(2, 1);// = []
// console.log(petNamesCopy);



/**
 * REVERSE METHOD
 * no params
 * mutates the array
 * returns the array itself
 */


// https://goo.gl/6PGgVA REVERSE
let petNames = ['Mr. Bear', 'Mr. Sheep', 'Planty', 'Pusheen'];
// let reversedArr = petNames.reverse();
// console.log("reversedArr", reversedArr);
// console.log("petNames", petNames);

// petNames.reverse()
// console.log(petNames)


let petNamesCopy = petNames.slice(); // returns an array
petNamesCopy.reverse(); // .reverse is an array method

// let petNamesCopy = petNames.slice().reverse();

console.log("petNamesCopy", petNamesCopy);
console.log("petNames", petNames);
