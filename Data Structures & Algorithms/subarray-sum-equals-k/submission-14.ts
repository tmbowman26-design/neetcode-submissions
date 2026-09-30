class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const frequency = new Map<number, number>();
        frequency.set(0, 1);
        let prefixSum = 0;
        let count = 0;
        for (const num of nums) {
            prefixSum += num;
            if (frequency.has(prefixSum - k)) {
                count += frequency.get(prefixSum - k);
            }
            if (frequency.has(prefixSum)) {
                frequency.set(prefixSum, frequency.get(prefixSum) + 1);
            } else {
                frequency.set(prefixSum, 1);
            }
        }
        return count;
    }
}
