// Robin's solution vid: https://youtu.be/eIzise3zGww

function reverseArray(arr) { // ['Q', 6, true]
	// base case:
	// empty array OR single element array
	if (arr.length <= 1) {
		return arr
	}

	// easy ; no recursion
	let lastEl = arr[arr.length - 1] // true

	// hard ; recursion
	let rest = arr.slice(0, -1) // ['Q', 6]
	let reversed = reverseArray(rest) // reverseArray(['Q',6]) => [6,'Q']

	// return [lastEl, ...reversed]
	reversed.unshift(lastEl)
	return reversed
}

// reverseArray([])  // => []
// reverseArray(['Q']) // => ['Q']
// reverseArray(['Q', 6]) // => [6, 'Q']
// reverseArray(['Q', 6, true]) // => [true, 6, 'Q']
// reverseArray(['Q', 6, true, 5]) // 5 + reverseArray(['Q',6,true])

// reverseArray([1,2,3,4])
// divide into: => 4    [1,2,3]
// easy: 4
// hard: reverseArray([1,2,3]) => [3,2,1]
// merge and return: [4,3,2,1]

// reverseArray([1,2,3,4]) => 4 + reverseArray([1,2,3]) 
// reverseArray([1,2,3,4,5,6,7,8,9]) => 9 + reverseArray([1,2,3,4,5,6,7,8])

//                easy + hard
// sumDigits(678) =>  6   + sumDigits(78)

// factorial(5) => 5 * factorial(4)



//            0   1   2   3
// const arr = ['a','b','c','d']

// let last = arr[arr.length - 1] // arr[3]
// console.log(arr)
// arr.slice(0, -1) // ['a','b','c']

// let last = arr[3]
// console.log(last)