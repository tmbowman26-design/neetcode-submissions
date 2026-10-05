class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums: number[], k: number): number {
        let count = 0;
        let runningSum = 0;
        let map = new Map<number, number>();
        map.set(0, 1);
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
