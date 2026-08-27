class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number, number>();
        for (const num of nums) {
            frequency.set(num, (frequency.get(num) ?? 0) + 1);
        }

        const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
        for (const [num, count ]of frequency) {
            buckets[count].push(num);
        }

        const result: number[] = [];

        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}
