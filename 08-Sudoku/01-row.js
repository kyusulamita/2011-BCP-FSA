let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ], // 0
              [ 2,7,1,   9,6,3,   4,8,5 ], // 1
              [ 4,6,3,   5,8,1,   7,9,2 ], // 2

              [ 9,3,4,   6,1,7,   2,5,8 ], // 3
              [ 5,1,7,   2,3,8,   9,6,4 ], // 4
              [ 6,8,2,   4,5,9,   3,7,1 ], // 5

              [ 1,5,9,   8,7,4,   6,2,3 ], // 6
              [ 7,4,6,   3,2,5,   8,1,9 ], // 7
              [ 3,2,8,   1,9,6,   5,4,7 ]];// 8

// getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.
function getRow(grid, index) {
	return grid[index]
}

console.log(getRow(puzzle, 8)) // => [ 9,3,4,   6,1,7,   2,5,8 ]
