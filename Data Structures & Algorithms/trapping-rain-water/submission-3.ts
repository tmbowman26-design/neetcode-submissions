class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if (height.length === 0 || !height) return 0;

        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left];
        let rightMax = height[right];
        let totalWater = 0;

        //  move pointers toward each other until they meet
        while (left < right) {
            // process the shorter height
            if (leftMax < rightMax) {
                left++; // increment left pointer
                leftMax = Math.max(leftMax, height[left]); // calculate the leftMax
                totalWater += leftMax - height[left]; // add to totalWater
            } else {
                right--; // decrement right pointer
                rightMax = Math.max(rightMax, height[right]); // calculate the rightMax
                totalWater += rightMax - height[right]; // add to totalWater
            }
        }
        //  return total water
        return totalWater;
    }
}
