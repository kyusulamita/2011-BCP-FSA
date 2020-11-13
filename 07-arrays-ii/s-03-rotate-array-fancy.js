const rotateArray = (arr, num) => { // arr = [1,2,3,4,5] num = -3
	const head = arr.slice(0, arr.length - num) // [1, 2]
	const tail = arr.slice(-num) // [3, 4, 5]
	const merged = [...tail, ...head]
	return merged
}


const result = rotateArray([1, 2, 3, 4, 5], 2) // => [5, 1, 2, 3, 4]
console.log(result)

// input:  [1, 2, 3, 4, 5]   1
// output: [5, 1, 2, 3, 4]
// split into: [1, 2, 3, 4] [5]
// swap pos:   [5] [1, 2, 3, 4]
// merge:      [5, 1, 2, 3, 4]

// input:  [1, 2, 3, 4, 5]   2
// output: [4, 5, 1, 2, 3]

// input:  [1, 2, 3, 4, 5]   3
// output: [3, 4, 5, 1, 2]
// split into: [1, 2] [3, 4, 5]
// swap pos:   [3, 4, 5] [1, 2]
// merge:      [3, 4, 5, 1, 2]


//           0  1  2  3  4
// const arr = [1, 2, 3, 4, 5] // arr.length = 5
// const num = 3
// const head = arr.slice(0, arr.length - num) // [1, 2]
// const tail = arr.slice(-num) // [3, 4, 5]
// // console.log(head, tail)
// const merged = [...tail, ...head]
// console.log(merged)