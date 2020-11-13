let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ], // 0 
              [ 2,7,1,   9,6,3,   4,8,5 ], // 1
              [ 4,6,3,   5,8,1,   7,9,2 ], // 2

              [ 9,3,4,   6,1,7,   2,5,8 ], // 3
              [ 5,1,7,   2,3,8,   9,6,4 ], // 4
              [ 6,8,2,   4,5,9,   3,7,1 ], // 5

              [ 1,5,9,   8,7,4,   6,2,3 ], // 6
              [ 7,4,6,   3,2,5,   8,1,9 ], // 7
              [ 3,2,8,   1,9,6,   5,4,7 ]];// 8

function getRow(grid, index) {
	return grid[index]
}

function getColumn(grid, colIndex) {
	let column = []

	for (let i = 0; i < grid.length; i++) {
		let num = grid[i][colIndex]
		column.push(num)
	}
	
	return column
}

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

function sudokuIsValid(grid) {
	// make sure numbers 1-9 are included ...
	// ... in each row
	for (let i = 0; i < 9; i++) {
		const row = getRow(grid, i) // grid, 1
		const rowIsValid = includes1to9(row) // true or false
		if (!rowIsValid) {
			return false
		}
	}

	// ... in each column
	for (let i = 0; i < 9; i++) {
		const col = getColumn(grid, i)
		if (!includes1to9(col)) {
			return false
		}
	}

	// ... in each square
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const section = getSection(grid, i, j)
			if (!includes1to9(section)) {
				return false
			}
		}
	}

	return true
}

console.log(sudokuIsValid(puzzle));
// => true