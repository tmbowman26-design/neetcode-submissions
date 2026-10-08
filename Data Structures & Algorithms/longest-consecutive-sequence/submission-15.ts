class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sequence = new Set<number>(nums);
        let longestSequence = 0;
        for (const num of sequence) {
            if (sequence.has(num - 1)) continue;
            let currentCount = 1;
            let next = num + 1;
            while (sequence.has(next)) {
                currentCount++;
                next++;
            }
            longestSequence = Math.max(longestSequence, currentCount);
        }
        return longestSequence;
    }
}
