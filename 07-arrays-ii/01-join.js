// .join - takes an array and outputs a string

const arr = ['melinda', 'kay', 'hatice', 'marie', 'renelle']

// to enable emoji keyboard
// - on mac:     ctrl + cmd + space
// - on windows: windows + .

const joined = arr.join(', ')
const joined = arr.join(' 🏅✨✨✨✨ ')
const joined = arr.join() // inserts commas!
const joined = arr.join('')
console.log(joined)
console.log(typeof joined)

const str = 'melinda kay hatice marie renelle'
console.log(str.split(' '))
console.log(str.split('a'))