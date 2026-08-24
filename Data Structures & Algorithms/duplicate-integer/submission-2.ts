class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // sort the array
        nums.sort();
        // loop through the array
        for (let i = 0; i < nums.length; i++) {
            // if there is a duplicate return true
            if(nums[i] === nums[i + 1]) {
                return true;
            }
        }
        // returm false if no duplicates
        return false;
    }
}
