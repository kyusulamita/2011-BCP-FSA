// .join - takes an array and outputs a string

// const arr = ['melinda', 'kay', 'hatice', 'marie', 'renelle']
// to enable emoji keyboard
// - on mac:     ctrl + cmd + space
// - on windows: windows + .

// const joined = arr.join(', ')
// const joined = arr.join(' 🏅✨✨✨✨ ')
// const joined = arr.join() // inserts commas!
// const joined = arr.join('')
// console.log(joined)
// console.log(typeof joined)

// const str = 'melinda kay hatice marie renelle'
// console.log(str.split(' '))
// console.log(str.split('a'))


// you only wanna use `return` within a function block
// if you have a function, you ALWAYS wanna use `return`



// const arr1 = [1,2,3]
// arr1.push(4)
// console.log(arr1)




// .concat - concatenates two arrays together
//           old school syntax!
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(arr1 + arr2) // not good!
// console.log([arr1, arr2]) // not good!

// this merges arr1 with arr2, BUT does NOT
// mutate the original arr1
// console.log(arr1.concat(arr2)) // [1,2,3,4,5,6]
// console.log(arr1) // remains as [1,2,3]
// console.log(arr2) // remains as [4,5,6]

// const merged = arr1.concat(arr2)
// console.log(merged)

// const arr1 = [1,2,3]
// const arr2 = ['a','b','c']
// const arr3 = [true,false,null]
// console.log(arr1.concat(arr2, arr3))

// let str1 = 'hello'
// let str2 = '???'
// console.log(str1 + ' ' + str2)
// str1 += ' world!' + ' my name is bob' + str2
// console.log(str1)



// spread operator - does the same thing as .concat method
//                   except it's more modern

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [7,8,9]
// const merged = [...arr1, ...arr2]
// const merged = [arr1, ...arr2]
// const merged = [...arr2, ...arr1, ...arr3]
// a lot nicer than: arr2.concat(arr1, arr3)
// console.log(merged)

// const name = 'nikki'
// const lastName = 'smith'
// const arr = [...name]
// console.log(arr)


// .splice - jack of all trades for manipulating an array
// 1) insertion wherever
// 2) removal wherever
// 3) replacement

// const arr = [1,2,3]
// arr.push(4) // this only adds to the END of an array

//               0       1        2        3        4
// const names = ['myra', 'alan', 'DK :)', 'pixie', 'bella']

// names.splice(
//	 start index,
//   number of elements to remove
// )
// const removed = names.splice(2, 3)
// console.log(removed)

// console.log(names) // names is now ['myra', 'alan']
                   // this means `names` was mutated!

// console.log(names.slice(2)) // gets you a "slice" of the array
// 														// WITHOUT mutating orig array
// console.log(names)


// //               0       1        2        3        4
// const names = ['myra', 'alan', 'DK :)', 'pixie', 'bella']

// names.splice(
//	 a) start index,
//   b) number of elements to remove,
//   c) anything and everything we want to insert
//      in place of what we just removed
// )
// const removed = names.splice(2, 2, 'josh', 'blake', 'nikki', 4, 5, 6, undefined)
// console.log('names:', names)
// console.log('removed:', removed)

// let name1 = 'josh'
// let name2 = 'blake'
// let name3 = 'nikki'
// const removed = names.splice(2, 2, name1, name2, name3)
// console.log('names:', names)
// console.log('removed:', removed)

// let name1 = 'josh'
// let name2 = 'blake'
// let name3 = 'nikki'
// let arr = [name1, name2, name3]
// const removed = names.splice(2, 2, ...arr)
// console.log('names:', names)
// console.log('removed:', removed)


//               0       1        2        3        4
// const names = ['myra', 'alan', 'DK :)', 'pixie', 'bella']
// const removed = names.splice(2, 0, 'josh', 'blake')
// console.log('names:', names)
// console.log('removed:', removed)

// remove largest numbers from array
// const nums = [10, 1, 10, 5, 10, 9]
// const numsWithout10 = [1, 5, 9]
// for (let i = 0; i < nums.length; i++) {
// 	const num = nums[i] // nums[1] => 1
// 	if (num === 10) {
// 		// remove it!
// 		nums.splice(i, 1)
// 	}
// }

// console.log(nums)
// remove even indexes


// nested arrays
// let arr = [[1,2,3], ['a','b','c'], true]
// console.log(arr.length)

// let arr = [
// 	//0123
// 	['elon', 'musk'],  // 0
// 	['jeff', 'bezos'], // 1
// 	600                // 2
// ]

// console.log(arr.length)
// console.log(arr[0][1]) // 'musk'
// console.log(arr[0][0]) // 'elon'
// console.log(arr[0][0][1])
// console.log(arr[2])

// let num = 999
// console.log(num[0])


let arr = [
	['elon', 'musk'],  // 0
	['jeff', 'bezos'], // 1
	'mark',            // 2
	['jack'],          // 3
	'dorsey'           // 4
]

for (let i = 0; i < arr.length; i++) {
	const el = arr[i] // `el` can either be an array or string
	
	// if `el` is an array
	if (Array.isArray(el)) { // el = ['elon', 'musk']
		for (let j = 0; j < el.length; j++) {
			const nestedEl = el[j] // el[0] => 'elon'
			console.log(nestedEl)
		}

	// if `el` is NOT an array ; `el` is a string
	} else {
		console.log(el)
	}
}