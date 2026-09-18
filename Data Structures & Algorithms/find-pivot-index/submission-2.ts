class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let total: number = 0;
        let leftSum: number = 0;
        for (let i = 0; i < nums.length; i++) {
            total += nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            const rightSum = total - leftSum - nums[i];
            if (leftSum === rightSum) {
                return i;
            }
            leftSum += nums[i];
        }
        return -1;
    }
}
