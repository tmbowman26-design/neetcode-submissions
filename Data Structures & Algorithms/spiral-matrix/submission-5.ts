class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        let top = 0;
        let right = matrix[0].length - 1;
        let bottom = matrix.length - 1;
        let left = 0;

        const result: number[] = [];
        while (left <= right && top <= bottom) {
            for (let column = left; column <= right; column++) {
                result.push(matrix[top][column]);
            }
            top++;
            for (let row = top; row <= bottom; row++) {
                result.push(matrix[row][right]);
            }
            right--;
            if (top <= bottom) {
                for (let column = right; column >= left; column--) {
                    result.push(matrix[bottom][column]);
                }
                bottom--;
            }
            if (left <= right) {
                for (let row = bottom; row >= top; row--) {
                    result.push(matrix[row][left])
                }
                left++;
            }
        }
        return result;
    }
}
