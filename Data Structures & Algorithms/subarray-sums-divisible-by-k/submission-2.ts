class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums: number[], k: number): number {
        const map = new Map<number, number>;
        map.set(0, 1);
        let runningSum: number = 0;
        let count: number = 0;
        for (const num of nums) {
            runningSum += num;
            const remainder = ((runningSum % k) + k) % k;
            if (map.has(remainder)) {
                count += map.get(remainder);
                map.set(remainder, map.get(remainder) + 1);
            } else {
                map.set(remainder, 1);
            }
        }
        return count;
    }
}
