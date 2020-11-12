// spread operator - does the same thing as .concat method
//                   except it's more modern

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [7,8,9]
const merged = [...arr1, ...arr2]
const merged = [arr1, ...arr2]
const merged = [...arr2, ...arr1, ...arr3]
// a lot nicer than: arr2.concat(arr1, arr3)
console.log(merged)

const name = 'nikki'
const lastName = 'smith'
const arr = [...name]
console.log(arr)