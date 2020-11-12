// .splice - jack of all trades for manipulating an array
// 1) insertion wherever
// 2) removal wherever
// 3) replacement


//               0       1        2        3        4
const names = ['myra', 'alan', 'DK :)', 'pixie', 'bella']

// names.splice(
//	 start index,
//   number of elements to remove
// )
const removed = names.splice(2, 3)
console.log(removed)

console.log(names) // names is now ['myra', 'alan']
                   // this means `names` was mutated!

console.log(names.slice(2)) // gets you a "slice" of the array
														// WITHOUT mutating orig array
console.log(names)


//               0       1        2        3        4
const names = ['myra', 'alan', 'DK :)', 'pixie', 'bella']

// names.splice(
//	 a) start index,
//   b) number of elements to remove,
//   c) anything and everything we want to insert
//      in place of what we just removed
// )
const removed = names.splice(2, 2, 'josh', 'blake', 'nikki', 4, 5, 6, undefined)
console.log('names:', names)
console.log('removed:', removed)

let name1 = 'josh'
let name2 = 'blake'
let name3 = 'nikki'
const removed = names.splice(2, 2, name1, name2, name3)
console.log('names:', names)
console.log('removed:', removed)

let name1 = 'josh'
let name2 = 'blake'
let name3 = 'nikki'
let arr = [name1, name2, name3]
const removed = names.splice(2, 2, ...arr)
console.log('names:', names)
console.log('removed:', removed)


//               0       1        2        3        4
const names = ['myra', 'alan', 'DK :)', 'pixie', 'bella']
const removed = names.splice(2, 0, 'josh', 'blake')
console.log('names:', names)
console.log('removed:', removed)

// DANGER: remove largest numbers from array
const nums = [10, 1, 10, 5, 10, 9]
const numsWithout10 = [1, 5, 9]
for (let i = 0; i < nums.length; i++) {
	const num = nums[i] // nums[1] => 1
	if (num === 10) {
		// remove it!
		nums.splice(i, 1)
	}
}

console.log(nums)