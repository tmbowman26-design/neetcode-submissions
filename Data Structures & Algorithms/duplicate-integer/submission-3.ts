class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = new Set<number>();

        for (let i = 0; i < nums.length; i++) {
            if(hash.has(nums[i])) {
                console.log(`Set has ${nums[i]}`)
                return true;
            } else {
                hash.add(nums[i]);
                console.log(`Add ${nums[i]} to set`)
            }
        }

        return false;
    }
}
