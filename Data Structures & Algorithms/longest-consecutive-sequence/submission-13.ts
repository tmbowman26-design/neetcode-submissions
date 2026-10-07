class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sequence = new Set<number>(nums);
        let maxCount = 0;
        let count = 0;
        for (const num of sequence) {
            if (sequence.has(num - 1)) continue;
            let current = num;
            while (sequence.has(current)) {
                current++;
                count++;
            }
            maxCount = Math.max(count, maxCount);
            count = 0;
        }
        return maxCount;
    }
}
