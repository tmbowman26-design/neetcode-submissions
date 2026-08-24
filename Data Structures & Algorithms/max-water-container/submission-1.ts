class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        
        while(left < right) {
            const width = right - left;
            const currentHeight = Math.min(heights[left], heights[right]);
            const currentArea = width * currentHeight;

            maxArea = Math.max(maxArea, currentArea);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
