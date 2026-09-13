class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const buckets = new Array(nums.length + 1).fill(null).map(() => []);
        const result: number[] = [];

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
        for (const [num, count] of map) {
            buckets[count].push(num);
        }
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (const nums of buckets[i]) {
                result.push(nums);
                if (result.length === k) return result;
            }
        }
    }
}
