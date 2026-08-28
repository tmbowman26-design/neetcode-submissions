class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];

            if (hashMap.has(compliment)){
                return [hashMap.get(compliment), i];
            } else {
                hashMap.set(nums[i], i);
            }
        }
    }
}
