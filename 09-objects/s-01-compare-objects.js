// solution video: https://youtu.be/A33MEqkiKjQ

// method 1
// function compareObjects(obj1, obj2) {
// 	// look at all the keys in obj1
// 	// verify against all the values in obj2
// 	for (let key in obj1) { // key = 'name'
// 		const val1 = obj1[key] // obj1['name'] = 'nick'
// 		const val2 = obj2[key] // obj2['name'] = 'bick'
// 		if (val1 !== val2) {
// 			// values are different! objects are not the same
// 			return false
// 		}
// 	}

// 	// look at all the keys in obj2
// 	// verify against all the values in obj1
// 	for (let key in obj2) { // key = 'name'
// 		const val1 = obj1[key] // obj1['name'] = 'nick'
// 		const val2 = obj2[key] // obj2['name'] = 'bick'
// 		if (val1 !== val2) {
// 			// values are different! objects are not the same
// 			return false
// 		}
// 	}

// 	return true
// }

// method 2
// function compareObjects(obj1, obj2) {
// 	// first check if obj1 and obj2 have different
// 	// number of keys. if so, immediately return false

// 	// Object.keys(obj1) => ['name'].length => 1
// 	// if (obj1 and obj2 have different # of keys)
// 	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
// 		return false
// 	}

// 	// look at all the keys in obj1
// 	// verify against all the values in obj2
// 	for (let key in obj1) { // key = 'name'
// 		const val1 = obj1[key] // obj1['name'] = 'nick'
// 		const val2 = obj2[key] // obj2['name'] = 'bick'
// 		if (val1 !== val2) {
// 			// values are different! objects are not the same
// 			return false
// 		}
// 	}

// 	return true
// }

// stringify method
// function compareObjects(obj1, obj2){
//   //stringify the obj
//   let strObj1 = JSON.stringify(obj1)
//   let strObj2 = JSON.stringify(obj2)
// 	console.log(strObj1)
// 	console.log(strObj2)
//   if(strObj1 === strObj2){
//     return true
//   }else{
//     return false
//   }
// }

// sorting method
// function compareObjects (object1, object2){  
//   let key1Array = Object.keys(object1).sort().join('')
//   let key2Array = Object.keys(object2).sort().join('')
//   let value1Array = Object.values(object1).sort().join('')
//   let value2Array = Object.values(object2).sort().join('')

// 	console.log(key1Array)
// 	console.log(key2Array)
// 	console.log(value1Array)
// 	console.log(value2Array)
  
//   if( key1Array === key2Array && value1Array === value2Array){
//     return true
//   }
//   return false
// }

// const result = compareObjects(
// 	{ name: 'zeke', age: 12, hair: 'black' },
// 	{ name: 'zeke', hair: 12, age: 'black' }
// ) // -> false
