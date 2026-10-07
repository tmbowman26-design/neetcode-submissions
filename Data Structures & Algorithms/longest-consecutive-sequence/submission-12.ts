class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sequence = new Set<number>(nums);
        let maxSequence = 0;
        let count = 0;
        for (const num of sequence) {
            if (sequence.has(num - 1)) continue;
            let current = num;
            while (sequence.has(current)) {
                count++;
                current++;
            }
            maxSequence = Math.max(maxSequence, count);
            count = 0;
        }
        return maxSequence;
    }
}
