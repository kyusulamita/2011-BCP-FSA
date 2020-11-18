// Robin's solution vid: https://youtu.be/eIzise3zGww

// const sumDigits = (num) => { // 317
// 	// base case: if number is just 1 digit
//   if (num <= 9) {
// 		return num
// 	}

// 	let str = String(num) // String(317) => '317'
// 	// easy! just grab first number, NO RECURSION!
// 	let firstDigit = Number(str[0]) // Number('3') => 3

// 	// hard! add up the rest of the numbers, YES RECURSION!
// 	let rest = Number(str.slice(1)) // Number('17') => 17
// 	let result = sumDigits(rest) // sumDigits(17)

// 	   //       1     + sumDigits(7)
// 	return firstDigit + result
// }

// sumDigits(7)  // => 7
// sumDigits(17) // => 8

// sumDigits(17) // => 1 + sumDigits(7) => 1 + 7 => 8
// sumDigits(317) // 3 + sumDigits(17) => 3 + 8 => 11
// sumDigits(5317) => 5 + sumDigits(317) => 5 + 11 => 16


// sumDigits(1234) // => 10

// easy + hard
//  1   + sumDigits(234)
// sumDigits(1234) => 1 + 2 + 3 + 4 => 1 + sumDigits(234)
// sumDigits(234)  =>     2 + 3 + 4 => 2 + sumDigits(34)
// sumDigits(34)   =>         3 + 4 => 3 + sumDigits(4)
// sumDigits(4)    =>             4 => 4