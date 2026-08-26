class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {

            const compliment = target - nums[i];

            if (hash.has(compliment)) {
                return [hash.get(compliment), i];
            } else {
                hash.set(nums[i], i)
            }
        }
    }
}
