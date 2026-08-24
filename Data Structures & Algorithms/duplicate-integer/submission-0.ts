class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        // sort thr list
        nums.sort()

        // lopp through the list
        for(let i: number = 0; i < nums.length - 1; i++){
            
            // loop through the list 
            if (nums[i] === nums[i + 1]){
                return true;
            }
        }

        // loop through the array
        return false;
    }
}
