// nested objects/arrays
const kayObj = {
	firstName: 'kay',
	currentCountry: 'usa',
	hometown: 'minneapolis',
	numPets: 2,
	likesDogs: true,
	treasure: [
		'hello', // 0
		'world', // 1
		{        // 2
			a: 1,
			b: 2,
			c: [0, 1, 2, [{ yay: '🔑' }] ]
		}
	]
}
console.log(kayObj.treasure[2].c[3][0].yay)

let arr = [ { yay: '🔑' }, 'apple' ]
console.log(arr[0])
