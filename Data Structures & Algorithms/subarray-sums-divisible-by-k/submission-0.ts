class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums: number[], k: number): number {
        const remainders = new Map<number, number>();
        remainders.set(0, 1);
        let runningSum: number = 0;
        let count: number = 0;
        for (const num of nums) {
            runningSum += num;
            const remainder = ((runningSum % k) + k) % k;
            if (remainders.has(remainder)) {
                count += remainders.get(remainder);
            }
            if (remainders.has(remainder)) {
                remainders.set(remainder, remainders.get(remainder) + 1);
            } else {
                remainders.set(remainder, 1);
            }
        }
        return count;
    }
}
