// nested arrays
// let arr = [
// 	'melinda',
// 	[['alex', 'amanda'], 'myra'],
// 	['olivia', ['calandra', ['josh']]]
// ]

// let arr = [ 'melinda', ['alex'] ]

// let flat = ['melinda']
// let flattened = ['alex']
// let merged = [...flat, ...flattened]
// console.log(merged)


function flattenArray(arr) { 
	let flat = [] // ['charlie']

	for (let i = 0; i < arr.length; i++) {
		const el = arr[i] // ['melinda', ['alex'], 'myra']
		// if `el` is an array
		if (Array.isArray(el)) { 
			const flattened = flattenArray(el)
			// flattenArray(['melinda', ['alex'], 'myra']) => [ 'melinda', 'alex', 'myra' ]
			// method 1 with spread
			flat = [...flat, ...flattened] 
			// method 2 wish push
			// flat.push(...flattened)
			// method 3 with concat
			// flat = flat.concat(flattened)
		// if `el` is NOT an array
		} else {
			flat.push(el)
		}
	}

	return flat
}
flattenArray([1,[2, 3],[4, [2, 4, [4, 3, 7]]]])
flattenArray(['alex']) => ['alex']
flattenArray(['melinda', ['alex'], 'myra']) => [ 'melinda', 'alex', 'myra' ]
flattenArray(['charlie', ['melinda', ['alex'], 'myra']]) => [ 'charlie', 'melinda', 'alex', 'myra' ]
flattenArray([
	['charlie', ['melinda', ['alex'], 'myra']], // [ 'charlie', 'melinda', 'alex', 'myra' ]
	'olivia',
	'calandra'
])

// let flat = ['melinda']
// let flattened = ['alex']
// flat.push(...flattened)
// console.log(flat)


// function flattenArray(arr) { 
// 	let flat = []

// 	for (let i = 0; i < arr.length; i++) {
// 		const el = arr[i]
// 		// if `el` is an array
// 		if (Array.isArray(el)) { 
// 			const flattened = flattenArray(el)
// 			flat = [...flat, ...flattened] 
// 		// if `el` is NOT an array
// 		} else {
// 			flat.push(el)
// 		}
// 	}

// 	return flat
// }