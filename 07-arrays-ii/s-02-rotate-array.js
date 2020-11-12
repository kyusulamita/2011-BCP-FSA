// SOLUTION VIDEO (starts at second half): https://youtu.be/njHVRaqtk2A

// const rotateArray = (arr, num) => { // arr = [1,2,3,4,5] num = -3
// 	// rotate "num" number of times

// 	// handle num > 0
// 	for (let i = 0; i < num; i++) {
// 		// === single rotation ===
// 		// remove last element
// 		const popped = arr.pop() // 5
// 		// and put that element in the front
// 		arr.unshift(popped)
// 		// =======================
// 	}

// 	// handle num < 0
// 	for (let i = num; i < 0; i++) { // i = -3 ; -3 < 0
// 		// remove first element
// 		const shifted = arr.shift() // 1
// 		// and put that element in the back
// 		arr.push(shifted)
// 	}

// 	return arr
// }

const rotateArray = (arr, num) => { // arr = [1,2,3,4,5] num = -3
	let copy = arr.slice()
	
	// rotate "num" number of times

	// handle num > 0
	for (let i = 0; i < num; i++) {
		// === single rotation ===
		// remove last element
		const popped = copy.pop() // 5
		// and put that element in the front
		copy.unshift(popped)
		// =======================
	}

	// handle num < 0
	for (let i = num; i < 0; i++) { // i = -3 ; -3 < 0
		// remove first element
		const shifted = copy.shift() // 1
		// and put that element in the back
		copy.push(shifted)
	}

	return copy
}


const result = rotateArray([1, 2, 3, 4, 5], 3) // => [5, 1, 2, 3, 4]
// ^ pop + unshift
// const result = rotateArray([1, 2, 3, 4, 5], -3) // => [4, 5, 1, 2, 3]
// ^ shift + push
console.log(result)

// input:  [1, 2, 3, 4, 5]   1
// output: [5, 1, 2, 3, 4]
// [1, 2, 3, 4, 5] 0
// [5, 1, 2, 3, 4] 1
// pop out 5 from back, unshift 5 in front

// input:  [1, 2, 3, 4, 5]   2
// output: [4, 5, 1, 2, 3]
// [1, 2, 3, 4, 5] 0
// [5, 1, 2, 3, 4] 1
// pop out 5 from back, unshift 5 in front
// [5, 1, 2, 3, 4] 2
// pop out 4 from back, unshift 4 in front