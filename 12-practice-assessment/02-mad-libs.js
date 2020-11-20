

// function madLibs(str, arr) {
// 	let result = ''

// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i]
// 		if (char !== '*') {
// 			result += char
// 		// if it IS an asterisk
// 		} else {
// 			// grab word from arr and add to result
// 			console.log(arr)
// 			let word = arr[0] // 'left'
// 			result += word
// 			let removed = arr.shift()
// 			arr.push(removed)
// 		}
// 	}

// 	return result
// }

// function madLibs(str, arr) {
// 	let result = ''

// 	let arrIndex = 0

// 	for (let i = 0; i < str.length; i++) {
// 		const char = str[i]
// 		if (char !== '*') {
// 			result += char
// 		// if it IS an asterisk
// 		} else {
// 			// grab word from arr and add to result
// 			let word = arr[arrIndex] // 'Madlibs'
// 			result += word
// 			arrIndex++
// 			// if we reach 4 aka. "out of bounds"
// 			if (arrIndex === arr.length) {
// 				arrIndex = 0
// 			}
// 		}
// 	}

// 	return result
// }

function madLibs(str, arr) {
	let result = ''

	let arrIndex = 0

	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		if (char !== '*') {
			result += char
		// if it IS an asterisk
		} else {
			// grab word from arr and add to result
			let word = arr[arrIndex] // 'Madlibs'
			result += word
			arrIndex = (arrIndex + 1) % arr.length
		}
	}

	return result
}

let testCase2 = madLibs(
	"* are * when * don't make any *! hello * my name is *",
	['Madlibs', 'fun', 'they', 'APPLES']
);
//  0         1      2       3
console.log('testCase2:', testCase2);


// let testCase1 = madLibs(
	// 'Marching is fun: *, *, *, *!', ['left', 'right']
// );
// console.log('testCase1:', testCase1);
// // 'Marching is fun: left, right, left, right!'



// let testCase0 = madLibs('My name is * and I am a *.', ['Sean', 'potato']);
// console.log('testCase0:', testCase0);
// 'My name is Sean and I am a potato.'

