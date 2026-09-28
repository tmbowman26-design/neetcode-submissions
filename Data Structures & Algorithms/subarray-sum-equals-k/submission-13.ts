class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const frequency = new Map<number, number>();
        frequency.set(0, 1);
        let runningSum = 0;
        let count = 0;
        for (const num of nums) {
            runningSum += num;
            if (frequency.has(runningSum - k)) {
                count += frequency.get(runningSum - k);
            }
            if (frequency.has(runningSum)) {
                frequency.set(runningSum, frequency.get(runningSum) + 1);
            } else {
                frequency.set(runningSum, 1);
            }
        }
        return count;
    }
}
