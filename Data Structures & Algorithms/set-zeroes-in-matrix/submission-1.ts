class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        let firstRowZero: boolean = false;
        const rows = matrix.length;
        const columns = matrix[0].length;

        // Loop through every cell in the matrix
        // Looping through every cell in a matrix requeire nested for loops (m x n)
        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                // If a zero is found at a cell, mark its column
                if (matrix[row][column] === 0) {
                    matrix[0][column] = 0;
                    // Mark its row, or set the flag if it's row 0
                    if (row > 0) {
                        // marking the row
                        matrix[row][0] = 0;
                    } else {
                        // set the flag to true
                        firstRowZero = true;
                    }
                }
            }
        }
        // loop through the m x n matrix again, this time start at 1 because position 0 are the markers

        for (let row = 1; row < rows; row++) {
            for (let column = 1; column < columns; column++) {
                //  check the markers, zero the cell if either marker is 0
                if (matrix[0][column] === 0 || matrix[row][0] === 0) {
                    matrix[row][column] = 0;
                }
            }
        }

        // check column 0 marker, zero column if needed
        if (matrix[0][0] === 0) {
            for (let row = 0; row < rows; row++) {
                matrix[row][0] = 0;
            }
        }
        // check row 0 flag, zero out if needed
        if (firstRowZero) {
            for (let column = 0; column < columns; column++) {
                matrix[0][column] = 0;
            }
        }

    }
}
