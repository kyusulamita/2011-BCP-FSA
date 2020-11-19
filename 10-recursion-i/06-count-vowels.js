


// function countVowels(str) { // 'auc'
// 	if (!str.length) {
// 		return 0
// 	}

// 	let vowels = 'aeiou'

// 	// easy section: find number of vowels in first char
// 	let firstChar = str[0] // 'a'
// 	let numVowelsInFirstChar = 0 // updated to 1
// 	// firstChar is a vowel
// 	if (vowels.includes(firstChar)) {
// 		numVowelsInFirstChar = 1
// 	}

// 	// hard section: find number of vowels in rest of string
// 	let rest = str.slice(1) // 'uc'
// 	let numVowelsInRestOfString = countVowels(rest) // countVowels('uc') => 1

// 	return numVowelsInFirstChar + numVowelsInRestOfString
// }


// base case
// countVowels('') // => 0
// in the simplest possible recursive case
// make sure to call the base case
// countVowels('c') // => 0
// => num vowels in 'c' + countVowels('')
// countVowels('uc') // => 1
// countVowels('auc') // => 2




// function countVowels(str) {
// 	if (!str.length) {
// 		console.log('--------')
// 		return 0
// 	}

// 	let vowels = 'aeiou'
// 	let numVowels = 0

// 	let firstChar = str[0].toLowerCase() // 'U' => 'u'
// 	if (vowels.includes(firstChar)) {
// 		numVowels = 1
// 	}

// 	let rest = str.slice(1)
// 	console.log(str, numVowels)
// 	numVowels += countVowels(rest)
// 	console.log(str, numVowels)

// 	return numVowels
// }

function countVowels(str) {
	if (!str.length) {
		console.log('--------')
		return 0
	}

	let vowels = 'aeiouAEIOU'
	let numVowels = 0

	if (vowels.includes(str[0])) {
		numVowels = 1
	}

	let rest = str.slice(1)
	console.log(str, numVowels)
	numVowels += countVowels(rest)
	console.log(str, numVowels)

	return numVowels
}

countVowels('fOUr score and sEvEn years')


// countVowels('Four score') =>
// //    easy        +      hard
// num vowels in 'F' + countVowels('our score')

// //             easy    hard
// sumNums(5234) => 5  +  sumNums(234)
// sumNums(5234234235) => 5 + sumNums(234234235)
// reverseArray([1,2,3,4]) => 4 + reverseArray([1,2,3])
// factorial(5) => 5 * factorial(4)


// let vowels = 'aeiou'

// let letter = 'U'
// vowels.includes(letter) // 'aeiou'.includes('q')
