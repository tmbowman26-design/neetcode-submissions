class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let writePointer = 0;
        for (let readPointer = 0; readPointer < nums.length; readPointer++) {
            if (nums[readPointer] !== 0) {
                [nums[readPointer], nums[writePointer]] = [nums[writePointer], nums[readPointer]];
                writePointer++;
            }
        }
    }
}
