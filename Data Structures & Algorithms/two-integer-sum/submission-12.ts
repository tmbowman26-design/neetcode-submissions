class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const sums = new Map<number, number>(); 

        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];

            if (sums.has(compliment)) {
                return [sums.get(compliment), i];
            }
            sums.set(nums[i], i);
        }
        return [];
    }
}
