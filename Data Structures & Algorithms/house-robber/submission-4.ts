class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 0) return 0;
        let current = 0, previous = 0;

        for (const house of nums) {
            const temp = Math.max(current, previous + house);
            previous = current;
            current = temp;
        }
        return current;
    }
}
