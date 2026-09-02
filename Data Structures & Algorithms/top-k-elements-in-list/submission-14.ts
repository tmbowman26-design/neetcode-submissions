class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const brackets = new Array(nums.length + 1).fill(null).map(() => []);
        const result: number[] = [];

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        for (const [num, count] of map) {
            brackets[count].push(num);
        }

        for (let i = brackets.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of brackets[i]) {
                result.push(num);

                if (result.length === k) break;
            }
        }

        return result;
    }
}
