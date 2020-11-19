// live video: https://youtu.be/a1uMKidNRhk

// let systems = {
//   power: {
//     batteries: true,
//     solarCells: true,
//     generator: true,
//     fuelCells: true
//   },
//   telecoms: {
//     antennas: {
//       highGain: true,
//       mediumGain: true,
//       lowGain: true
//     },
//     transmitter: true,
//     receiver: true
//   },
//   attitudeControl: {
//     stabilization: {
//       spin: true,
//       threeAxis: true
//     }
//   },
//   propulsion: {
//     engines: {
//       engine1: true,
//       engine2: true,
//       engine3: false
//     },
//     thrusters: true,
//     propellant: true
//   },
//   environment: {
//     cooling: true,
//     heating: true,
//     lifeSupport: true
//   }
// };


// 1. go through all the values
// 2. IF a value is `false`, immediately return false
// 3. IF a value is `true`, do nothing
// 4. once we're done looking through all the values,
//    return true

// allSystemsGo({ batteries: false, solarCells: true }) // => false


function allSystemsGo(obj) {
	for (let key in obj) {
		let val = obj[key] // <-- might be an object!
		if (typeof val === 'object') {
			// allSystemsGo({ batteries: false, solarCells: true })
			// => false
			let verdict = allSystemsGo(val) // true or false
			if (verdict === false) {
				return false
			}
		}
		if (val === false) {
			return false
		}
	}
	return true
}

// console.log(allSystemsGo({
// 	cooling: true,
// 	heating: true,
// 	power: { batteries: false, solarCells: true },
// })
// )

//
// allSystemsGo({ batteries: false, solarCells: true })
//
// allSystemsGo({
// 	cooling: true,
// 	heating: true,
// 	power: { batteries: false, solarCells: true },
// })
//--------------------------

// function return5() {
// 	return 5
// }

// function parent() {
// 	let returnedValue = return5()

// 	console.log('hey!')
// 	console.log('goodbye!')

// 	return returnedValue + 5
// }

// console.log(parent())