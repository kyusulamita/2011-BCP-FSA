// each line in javascript waits for the
// previous line to complete execution

// console.log('a') // blocking line 7 from starting
// console.log('b') // waiting for line 6 to finish
// console.log('c') // waiting for line 7 to finish
// console.log(1) // waiting for line 8 to finish
// console.log(2) // waiting for line 9 to finish
// console.log(3) // waiting for line 10 to finish


// function letters() {
// 	console.log('a')
// 	console.log('b')
// 	console.log('c')
// }

// console.log(1)
// letters()
// console.log(2)
// console.log(3)





// function numbers() {
// 	console.log(1)
// 	console.log(2)
// 	console.log(3)
// }

// function letters() {
// 	console.log('a')
// 	numbers()
// 	console.log('b')
// 	numbers()
// 	console.log('c')
// }

// letters()



// function numbers() {
// 	console.log(1)
// 	console.log(2)
// 	console.log(3)
// }

// function letters() {
// 	console.log('a')
// 	console.log('b')
// 	console.log('c')
// }

// letters()
// letters()
// letters()

// letters() <-- this never exceeds height of 1
//-------- CALL STACK ---------
// ^ represents a "stack" of active functions
//   e.g. a stack of pancakes where each function
//        is a pancake
// 1) whenever you RUN (call/invoke/execution)
// a function, that function gets placed on the
// call stack immediately
// 2) the function will remain on the call stack
// aka. the pancake will remain on the plate until
// the function has completed execution



// function emojis() {
// 	console.log('✨')
// 	console.log('✨')
// }

// function numbers() {
// 	console.log(1)
// 	console.log(2)
// 	console.log(3)
// 	emojis()
// }

// function letters() {
// 	console.log('a')
// 	console.log('b')
// 	numbers()
// 	console.log('c')
// }
// letters()

// emojis() <-- third pancake
// numbers() <-- second pancake
// letters() <-- first pancake
//------------------------

// the order in which functions are added to the
// call stack is the *opposite* of the order in
// which they are removed from the call stack
