// function countdown(num) { // 0
// 	console.log(num) // 0
	
// 	// console log 2
// 	countdown(num - 1) // countdown(-1)
// }

// countdown(3)

// the above function is dangerous because it
// will keep recursively calling countdown without
// a sane stopping point, ultimately resulting in
// a Stack Overflow
// ...
// countdown(-1)
// countdown(0)
// countdown(1)
// countdown(2)
// countdown(3)
//-----------------------





// ====== base case ========
// defintion: the condition that stops a recursive
//            function from running forever
//            aka. emergency escape
//            aka. desired stopping point

// 1) it is usually an IF statement
// 2) it is usually at the beginning of a function
// 3) it should have a `return` statement


// function countdown(num) { // 1
// 	// if num is 0, stop everything!
// 	if (num === 0) {
// 		console.log('reached 0!')
// 		return
// 	}

// 	console.log(num)
// 	countdown(num - 1) 
// }
// countdown(3)

// countdown(0)
// countdown(1)
// countdown(2)
// countdown(3)
//-------------------------------




// function countdown(num) { // 1
// 	// if num is 0, stop everything!
// 	if (num === 0) {
// 		console.log('reached 0!')
// 		return
// 	}

// 	console.log('going down', num)
// 	countdown(num - 1)
// }

// countdown(1)

// countdown(0) // reached 0!
// countdown(1) // going down 1
//-------------------------------



// function countdown(num) { // 1
// 	// if num is 0, stop everything!
// 	if (num === 0) {
// 		console.log('reached 0!')
// 		return
// 	}

// 	console.log('going down', num) // going down 1
// 	countdown(num - 1)             // countdown(0) -> reached 0!
// 	console.log('coming up', num)  // coming up 1
// }

// countdown(1)

// countdown(0)         // reached 0!
// countdown(1) // going down 1 // coming up 1
//-------------------------------



// function countdown(num) { // 2
// 	// if num is 0, stop everything!
// 	if (num === 0) {
// 		console.log('reached 0!')
// 		return // <-- only associated with countdown(0)
// 	}

// 	console.log('going down', num) // going down 3
// 	countdown(num - 1)             // countdown(2)
// 	console.log('coming up', num)  // coming up 3
// }

// countdown(3)

// countdown(0)           // reached 0!
// countdown(1)      // going down 1 // coming up 1
// countdown(2) // going down 2             // coming up 2
//--------------------------


// the result of countdown(0):
// reached 0!


// the result of countdown(1):
// going down 1
// countdown(0)
// coming up 1


// countdown(2) when called, will execute:
// going down 2
// countdown(1)
// coming up 2

// countdown(2) resulted in these logs:
// going down 2
// going down 1
// reached 0!
// coming up 1
// coming up 2

// countdown(3):
// going down 3
// countdown(2)
// coming up 3