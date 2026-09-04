class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        let flag = false;
        let maxRows = matrix.length;
        let maxCols = matrix[0].length;

        for (let row = 0; row < maxRows; row++) {
            for (let col = 0; col < maxCols; col++) {
                if (matrix[row][col] === 0) {
                    matrix[0][col] = 0;
                    if (row > 0) {
                        matrix[row][0] = 0
                    } else {
                        flag = true;
                    }
                }
            }
        }
        for (let row = 1; row < maxRows; row++) {
            for (let col = 1; col < maxCols; col++) {
                if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                    matrix[row][col] = 0;
                }
            }
        }
        if (matrix[0][0] === 0) {
            for (let row = 0; row < maxRows; row++) {
                matrix[row][0] = 0;
            }
        }
        if (flag) {
            for (let col = 0; col < maxCols; col++) {
                matrix[0][col] = 0;
            }
        }

    }
}
