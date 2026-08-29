class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {

        for (let row = 0; row < matrix.length; row++) {
            for (let column = row + 1; column < matrix[row].length; column++) {
               [ matrix[row][column], matrix[column][row]] = [matrix[column][row], matrix[row][column]];
            }
        }

        for (let row = 0; row < matrix.length; row++){
            matrix[row].reverse();
        }
        console.log(matrix)
    }
}
