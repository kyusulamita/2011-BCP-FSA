// SOLUTION VIDEO: https://youtu.be/njHVRaqtk2A

function arrayFlattener(arr) {
	let flat = []

	for (let i = 0; i < arr.length; i++) {
		const el = arr[i]

		// if the element is an array...
		if (Array.isArray(el)) { // el = [2,3]
			for (let j = 0; j < el.length; j++) {
				const nestedEl = el[j] // 2
				flat.push(nestedEl)
			}
		// if the element is NOT an array...
		} else {
			flat.push(el)
		}

	}

	return flat
}


const result = arrayFlattener([1, [2, 3], 4, ['a'], true, [9, 10, 11]]); // => [1, 2, 3, 4]
console.log(result)
