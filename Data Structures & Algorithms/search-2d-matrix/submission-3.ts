class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let left = 0;
        let right = rows * cols - 1;
        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            const row = Math.floor(middle / cols);
            const col = middle % cols;
            if (matrix[row][col] === target) {
                return true;
            }
            if (matrix[row][col] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return false;
    }
}
