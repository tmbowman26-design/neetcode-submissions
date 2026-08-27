class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        const result: number[] = [];

        //  Loop while there is still at least one tow and column left
        while (top <= bottom && left <= right) {
            // Traverse from left to right along the top row, then increment top to move to shrink the boundary (next row)
            for (let column = left; column <= right; column++) {
                result.push(matrix[top][column])
            }
            top++;
            
            // Treverse from top tp bottom along the right, then decrement right to shrink the boundary (next column)
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
