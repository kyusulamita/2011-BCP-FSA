// nested arrays
let arr = [[1,2,3], ['a','b','c'], true]
console.log(arr.length)

let arr = [
	//0123
	['elon', 'musk'],  // 0
	['jeff', 'bezos'], // 1
	600                // 2
]

console.log(arr.length)
console.log(arr[0][1]) // 'musk'
console.log(arr[0][0]) // 'elon'
console.log(arr[0][0][1])
console.log(arr[2])

// looping through a nested array
let arr = [
	['elon', 'musk'],  // 0
	['jeff', 'bezos'], // 1
	'mark',            // 2
	['jack'],          // 3
	'dorsey'           // 4
]

for (let i = 0; i < arr.length; i++) {
	const el = arr[i] // `el` can either be an array or string
	
	// if `el` is an array
	if (Array.isArray(el)) { // el = ['elon', 'musk']
		for (let j = 0; j < el.length; j++) {
			const nestedEl = el[j] // el[0] => 'elon'
			console.log(nestedEl)
		}

	// if `el` is NOT an array ; `el` is a string
	} else {
		console.log(el)
	}
}