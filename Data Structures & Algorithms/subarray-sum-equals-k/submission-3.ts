class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const map = new Map<number, number>();
        map.set(0, 1);

        let runningSum = 0, count = 0;

        for (const num of nums) {
            runningSum += num;
            if (map.has(runningSum - k)) {
                count += map.get(runningSum - k);
            }
            if (map.has(runningSum)) {
                map.set(runningSum, map.get(runningSum) + 1);
            } else {
                map.set(runningSum, 1)
            }
        }
        return count;
    }
}
