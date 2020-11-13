// method 1
function includes1to9(arr) {
	if (arr.length !== 9) {
		return false
	}

	for (let i = 1; i <= 9; i++) {
		if (!arr.includes(i)) {
			return false
		}
	}

	return true
}

// method 2
// function includes1to9(arr) {
// 	const correct = '123456789'

// 	const sorted = arr.slice().sort().join('') // '123456789'

// 	return correct === sorted
// }

console.log(includes1to9([1,9,3,6,5,4,7,8,2])) // => true