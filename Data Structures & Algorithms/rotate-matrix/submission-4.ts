class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        matrix.reverse();

        for (let row = 0; row < matrix.length; row++) {
            for (let column = row; column < matrix[row].length; column++) {
                [matrix[row][column], matrix[column][row]] =
                [matrix[column][row], matrix[row][column]]
            }
        }
    }
}
