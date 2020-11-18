// factorial
// 5! => 5 * 4 * 3 * 2 * 1 => 5 * 4!
// 4! => 4 * 3 * 2 * 1     => 4 * 3!
// 3! => 3 * 2 * 1         => 3 * 2!
// 2! => 2 * 1             => 2 * 1!
// 1! => 1                 => 1

// ====== base case ========
// 1) it is usually an IF statement
// 2) it is usually at the beginning of a function
// 3) it should have a `return` statement
// function factorial(num) { // 2
// 	if (num === 1) {
// 		return 1
// 	}
// 	// 2 * 1! => 2 * 1
// 	return num * factorial(num - 1) 
// }
// console.log(factorial(4)) // => 1

// factorial(1) => 1
// factorial(2) => 2 * factorial(1) => 2 * 1
// factorial(3) => 3 * factorial(2) => 3 * 2 => 6
// factorial(4) => 4 * factorial(3) => 4 * 6 => 24

// when writing a recursive function, it's good to:
// 1) START with your base case
// 2) run your function WITH the base case,
//    and make sure you're getting the expected answer
// 3) run your function with the SIMPLEST POSSIBLE
//    recursive case




// function factorial(num) { // 4
// 	if (num <= 1) {
// 		return 1
// 	}

// 	// easy ; NO RECURSION
// 	let currentNumber = num // 4

// 	// hard ; YES RECURSION
// 	let rest = factorial(num - 1) // factorial(3)

// 	let answer = currentNumber * rest

// 	return answer
// }

// factorial(4) =>    4   *  factorial(3)
//                  easy      hard