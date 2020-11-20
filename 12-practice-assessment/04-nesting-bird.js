
function nestingBird(arr) {
	let str = ''

	for (let i = 0; i < arr.length; i++) {
		const el = arr[i]
		if (Array.isArray(el)) {
			str += nestingBird(el) // 'bin'
		} else {
			str += el
		}
	}

	return str
}



let testCase0 = nestingBird(['r', 'o', ['b', ['i'], 'n']]);
console.log('testCase0:', testCase0);
// 'robin'

// let testCase1 = nestingBird(['c', ['a', ['r', ['d', ['i'], ['n', ['a', ['l']]]]]]]);
// console.log('testCase1:', testCase1);
// // 'cardinal'

// let testCase2 = nestingBird([['K'], ['o', 'r', ['e', 'a', ['n', [' ', 'c'], 'r', ['o'], 'w'], '-'], 't'], 'i', 't']);
// console.log('testCase2:', testCase2);
// // 'Korean crow-tit'