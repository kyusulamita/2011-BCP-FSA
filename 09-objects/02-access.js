const kayObj = {
	// key: value
	firstName: 'kay',
	lastName: 'xp',
	favCountry: 'australia',
	currentCountry: 'usa',
	currentCity: 'queens',
	hometown: 'minneapolis',
	numPets: 2,
	petNames: ['luna', 'demi'],
	likesDogs: true
}
console.log(kayObj)

// integer indexes do NOT exist for objects!
console.log(kayObj[0]) // this won't work!

// so if you want a value from an object,
// you need to use the key

// "dot notation"
console.log(kayObj.firstName)
console.log(kayObj.lastName)
console.log(kayObj.petNames[1])

const music = {
	origin: '9999 BCE',
	artists: ['demi lovato', 'ariana grande', 'miley cyrus', 'H.E.R.'] 
}

// - editing / adding
console.log(music.origin)
music.origin = 1970 // editing an existing key
console.log(music)
music.genre = 'pop' // adding a NEW key
music.artists.push('ava max', 'billie eilish')
console.log(music)

// "bracket notation"
// when using bracket notation, the key MUST be a string
console.log(music['origin'])
console.log(music.'origin') // this is bad!
music['origin'] = 1985
music.origin = 1985
music['genre'] = 'classical'
console.log(music)

// bracket notation allows you to use variables for keys
// you can't do this with dot notation
let myCoolKey = 'origin'
console.log(music[myCoolKey])
console.log(music.myCoolKey)

let arr = [1,2,3]
console.log(arr[1000]) // undefined

const myKey = 'origin'
console.log(music.origin) // 9999 BCE
console.log(music.'origin') // ERROR!
console.log(music['origin']) // 9999 BCE
console.log(music[origin]) // ERROR!
console.log(music[myKey]) // 9999 BCE
console.log(music['myKey']) // undefined