// in operator
// returns true/false whether a string is a key within an object
const music = {
	origin: '9999 BCE',
	artists: ['demi lovato', 'ariana grande', 'miley cyrus', 'H.E.R.']
}
console.log('origin' in music)
console.log('originnnnnnn' in music)
let key = 'artists'
console.log(key in music) // true
console.log('key' in music) // false