// for...in loops
const kayObj = {
	firstName: 'kay',
	currentCountry: 'usa',
	hometown: 'minneapolis',
	numPets: 2,
	likesDogs: true,
	key: '🔑'
}

// for every key in kayObj...
// you don't have to use the word "key" in the loop
// but you DO have to use the name of the object
for (let key in kayObj) {
	console.log(key)
}

for (let key in kayObj) {
	console.log(key) // this is the key
	console.log(kayObj.key) // this is the emoji key
	console.log(key, kayObj[key]) // this is the value!
}

const arr = ['kay', 'usa', 'minneapolis']

for (let i = 0; i < arr.length; i++) {
	const el = arr[i]
	console.log(el)
}

for (let i in arr) {
	console.log(arr[i])
}

// for...of
for (let el of arr) {
	console.log(el)
}

for (let val of kayObj) {
	console.log(val)
}
