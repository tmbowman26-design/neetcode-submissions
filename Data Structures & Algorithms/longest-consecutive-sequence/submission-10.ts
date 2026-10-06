class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const elements = new Set<number>(nums);
        let max = 0;
        let count = 0;
        for (const num of Array.from(elements)) {
            if (elements.has(num - 1)) continue;
            let current = num;
            while (elements.has(current)) {
                count++;
                current++;
            }
            max = Math.max(max, count);
            count = 0;
        }
        return max;
    }
}
