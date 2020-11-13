//  x:            0        1        2         y
//              0 1 2    3 4 5    6 7 8
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ], // 0 
              [ 2,7,1,   9,6,3,   4,8,5 ], // 1 0
              [ 4,6,3,   5,8,1,   7,9,2 ], // 2

              [ 9,3,4,   6,1,7,   2,5,8 ], // 3
              [ 5,1,7,   2,3,8,   9,6,4 ], // 4 1
              [ 6,8,2,   4,5,9,   3,7,1 ], // 5

              [ 1,5,9,   8,7,4,   6,2,3 ], // 6
              [ 7,4,6,   3,2,5,   8,1,9 ], // 7 2
              [ 3,2,8,   1,9,6,   5,4,7 ]];// 8

// getSection: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.

// y: 1, x: 2
// console.log(puzzle[3][6]) // 2
// console.log(puzzle[3][7]) // 5
// console.log(puzzle[3][8]) // 8
// console.log(puzzle[4][6]) // 9
// console.log(puzzle[4][7]) // 6
// console.log(puzzle[4][8]) // 4
// console.log(puzzle[5][6]) // 3
// console.log(puzzle[5][7]) // 7
// console.log(puzzle[5][8]) // 1

// Y: 0, X: 0
// console.log(puzzle[0][0]) // 8
// console.log(puzzle[0][1]) // 9
// console.log(puzzle[0][2]) // 5
// console.log(puzzle[1][0]) // 2
// console.log(puzzle[1][1]) // 7
// console.log(puzzle[1][2]) // 1
// console.log(puzzle[2][0]) // 4
// console.log(puzzle[2][1]) // 6
// console.log(puzzle[2][2]) // 3

// [0, 0] [0, 1] [0, 2]
// [1, 0] [1, 1] [1, 2]
// [2, 0] [2, 1] [2, 2]
// getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]
// getSection(puzzle, 1, 0);
// -> [ 7,4,2,9,6,3,5,8,1 ]

// method 1
// function getSection(grid, x, y) {
// 	return [
// 		grid[3 * y][3 * x], grid[3 * y][3 * x + 1], grid[3 * y][3 * x + 2]
// 		grid[3 * y + 1][3 * x], grid[3 * y + 1][3 * x + 1], grid[3 * y + 1][3 * x + 2],
// 		grid[3 * y + 2][3 * x], grid[3 * y + 2][3 * x + 1], grid[3 * y + 2][3 * x + 2], 
// 	]
// }
// console.log(getSection(puzzle, 0, 0))

// method 2
// function getSection(grid, x, y) {
// 	let section = []

// 	const rowIndex = y * 3 // 1 * 3 = 3
// 	for (let i = rowIndex; i < rowIndex + 3; i++) {
// 		const row = grid[i] 
// 		const colIndex = x * 3 // 2 * 3 = 6
// 		const subRow = row.slice(colIndex, colIndex + 3) // [8,9,5]
// 		section = [...section, ...subRow]
// 	}

// 	return section
// }
// console.log(getSection(puzzle, 2, 1))

// method 3
function getSection(grid, x, y) {
	let section = []

	const rowIndex = y * 3 // 1 * 3 = 3
	for (let i = rowIndex; i < rowIndex + 3; i++) {
		const row = grid[i] 
		const colIndex = x * 3 // 2 * 3 = 6
		for (let j = colIndex; j < colIndex + 3; j++) {
			const num = row[j]
			// you can also use grid[i][j]
			section.push(num)
		}
	}

	return section
}
console.log(getSection(puzzle, 0, 0))
console.log(getSection(puzzle, 2, 1)) // => [2, 5, 8, 9, 6, 4, 3, 7, 1]
