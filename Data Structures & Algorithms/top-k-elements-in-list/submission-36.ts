class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const elements = new Map<number, number>();
        const buckets = new Array(nums.length + 1).fill(null).map(() => []);
        const result: number[] = [];
        for (const num of nums) {
            elements.set(num, (elements.get(num) ?? 0) + 1);
        }
        for (const [num, count] of Array.from(elements)) {
            buckets[count].push(num);
        }
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }
        }
        return result;
    }
}
