class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let consecutive = 0;
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                count++;
                consecutive = Math.max(consecutive, count)
            } else { 
                count = 0;
            }
        }
        return consecutive;
    }
}
