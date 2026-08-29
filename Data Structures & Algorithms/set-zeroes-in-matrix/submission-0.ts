class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        const rowsToZero = new Set<number>();
        const colsToZero = new Set<number>();

        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[row].length; column++) {
                if (matrix[row][column] === 0) {
                    rowsToZero.add(row);
                    colsToZero.add(column);
                }
            }
        }
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[row].length; column++) {
                if (rowsToZero.has(row) || colsToZero.has(column)) {
                    matrix[row][column] = 0;
                }
            }
        }
    }
}
