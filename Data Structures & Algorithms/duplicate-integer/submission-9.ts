class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const result = new Set<number>();

        for (const num of nums) {
            if(result.has(num)) {
                return true;
            } else {
                result.add(num);
            }
        }
        return false;
    }
}
