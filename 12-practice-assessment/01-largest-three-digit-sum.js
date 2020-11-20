


function largestThreeDigitNum(numStr) {
	let hiscore = 0

	for (let i = 0; i < numStr.length; i++) {
		let threeDigitStr = numStr.slice(i, i + 3)
		let threeDigitNumber = Number(threeDigitStr)
		if (threeDigitNumber > hiscore) {
			hiscore = threeDigitNumber
		}
	}

	return hiscore
}

//  012345678
// '123999456'

// 123 str.slice(0, 3)
// 239 str.slice(1, 4)
// 399 str.slice(2, 5)
// ...

// let testCase0 = largestThreeDigitNum('123999456');
// 																		  // ^
// console.log('testCase0:', testCase0);
// 999

// let testCase1 = largestThreeDigitNum('124324122398999');
// console.log('testCase1:', testCase1);
// // 999
