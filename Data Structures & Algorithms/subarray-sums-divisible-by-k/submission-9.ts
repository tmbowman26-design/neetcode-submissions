class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums: number[], k: number): number {
        const frequency = new Map<number, number>();
        frequency.set(0, 1);
        let prefixSum = 0;
        let count = 0;
        for (const num of nums) {
            prefixSum += num;
            const divider = ((prefixSum % k) + k) % k;
            if (frequency.has(divider)) {
                count += frequency.get(divider);
                frequency.set(divider, frequency.get(divider) + 1);
            } else {
                frequency.set(divider, 1);
            }
        }
        return count;

    }
}
