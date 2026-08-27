class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashSet = new Set<number>();

        for (const num of nums) {
            if (hashSet.has(num)) {
                return true;
            } else {
                hashSet.add(num);
            }
        }
        return false;
    }
}
