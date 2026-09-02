class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let previous = 0, current = 0;

        for (const house of nums) {
            const temp = Math.max(current, previous + house);
            previous = current
            current = temp;


        }
        return current;
    }
}
