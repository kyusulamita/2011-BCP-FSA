

// function isPrime(num) { // 5
// 	let numPerfectDivisors = 0

// 	for (let i = 1; i <= num; i++) {
// 		// 5 % 5 => 0
// 		// if `i` goes perfectly into `num`
// 		if (num % i === 0) {
// 			numPerfectDivisors++
// 		}
// 	}
// 	if (numPerfectDivisors === 2) {
// 		return true
// 	}
// 	return false
// }

// isPrime(8)

// 5
// 12345
// |   | <-- 2

// 7
// 1234567
// |     | <-- 2

// 9
// 123456789
// | |     | <-- not 2

// 6
// 123456
// |||  | <-- not 2



// function isPrime(num) { // 5
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false
// 		}
// 	}
// 	return true
// }
// isPrime(20)

// 5
// 234
//     <-- 0

// 7
// 23456
//       <-- 0

// 9
// 2345678
//  |      <-- 1

// 6
// 2345
// ||   <-- 2



// let testCase0 = isPrime(99);
// console.log('testCase0:', testCase0);
// // false

// let testCase1 = isPrime(89);
// console.log('testCase1:', testCase1);
// // true

// let testCase2 = isPrime(2);
// console.log('testCase2:', testCase2);
// // true