class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        matrix.reverse();
        for (let row = 0; row < matrix.length; row++) {
            for (let col = row; col < matrix[row].length; col++) {
                [matrix[row][col], matrix[col][row]] =
                [matrix[col][row], matrix[row][col]]
            }
        }
    }
}
