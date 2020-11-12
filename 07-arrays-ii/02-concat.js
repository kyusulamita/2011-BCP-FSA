// .concat - concatenates two arrays together
//           old school syntax!
const arr1 = [1,2,3]
const arr2 = [4,5,6]
console.log(arr1 + arr2) // not good!
console.log([arr1, arr2]) // not good!

// this merges arr1 with arr2, BUT does NOT
// mutate the original arr1
console.log(arr1.concat(arr2)) // [1,2,3,4,5,6]
console.log(arr1) // remains as [1,2,3]
console.log(arr2) // remains as [4,5,6]

const merged = arr1.concat(arr2)
console.log(merged)

// this is different from .push, which DOES mutate
// the original array
const arr1 = [1,2,3]
arr1.push(4)
console.log(arr1)

// merging three arrays
const arr1 = [1,2,3]
const arr2 = ['a','b','c']
const arr3 = [true,false,null]
console.log(arr1.concat(arr2, arr3))

// quick review: concatenating a string
let str1 = 'hello'
let str2 = '???'
console.log(str1 + ' ' + str2)
str1 += ' world!' + ' my name is bob' + str2
console.log(str1)