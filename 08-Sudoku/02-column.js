// getColumn: This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ], // 0 
              [ 2,7,1,   9,6,3,   4,8,5 ], // 1
              [ 4,6,3,   5,8,1,   7,9,2 ], // 2

              [ 9,3,4,   6,1,7,   2,5,8 ], // 3
              [ 5,1,7,   2,3,8,   9,6,4 ], // 4
              [ 6,8,2,   4,5,9,   3,7,1 ], // 5

              [ 1,5,9,   8,7,4,   6,2,3 ], // 6
              [ 7,4,6,   3,2,5,   8,1,9 ], // 7
              [ 3,2,8,   1,9,6,   5,4,7 ]];// 8

// [0][0]
// [1][0]
// [2][0]
// [3][0]
// [4][0]
// ...
// [8][0]

function getColumn(grid, colIndex) {
	let column = []

	for (let i = 0; i < grid.length; i++) {
		let num = grid[i][colIndex]
		column.push(num)
	}
	
	return column
}

console.log(getColumn(puzzle, 3));
// -> [ 8,2,4,9,5,6,1,7,3 ]