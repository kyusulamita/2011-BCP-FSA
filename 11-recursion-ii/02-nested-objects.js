// nested objects

// function flattenObj(obj) {
// 	let flat = {} // { c: 'hello' }

// 	for (let key in obj) { 
// 		const val = obj[key] 
// 		// if `val` is an object
// 		if (typeof val === 'object') { // { z: 100, x: { a: 1 }}
// 			const result = flattenObj(val) // flattenObj({ z: 100, x: { a: 1 }}) => { z: 100, a: 1 }
// 			// method 1
// 			flat = { ...flat, ...result } // merge { z: 100 } with { a: 1 }
// 			// method 2
// 			// flat = Object.assign(flat, result)
// 		// if `val` is NOT an object
// 		} else {
// 			flat[key] = val // flat['z'] = 100
// 		}
// 	}

// 	return flat
// }

// flattenObj({ a: 1 }) => { a: 1 }
// flattenObj({ z: 100, x: { a: 1 }}) => { z: 100, a: 1 }
// flattenObj({
// 	c: 'hello',
// 	b: { z: 100, x: { a: 1 }}
// })

function flattenObj(obj) {
	let flat = {}

	for (let key in obj) { 
		const val = obj[key] 
		// if `val` is an object
		if (typeof val === 'object') {
			const result = flattenObj(val)
			flat = { ...flat, ...result }
		// if `val` is NOT an object
		} else {
			flat[key] = val
		}
	}

	return flat
}

flattenObj({ z: 100, x: { a: 1, b: 2, c: { d: 3 } }})