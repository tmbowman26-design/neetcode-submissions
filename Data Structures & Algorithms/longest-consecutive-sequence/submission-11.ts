class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sequence = new Set<number>(nums);
        let max = 0;
        let count = 0
        for (const num of sequence) {
            if (sequence.has(num - 1)) continue;
            let next = num;
            while (sequence.has(next)) {
                count++;
                next++;
            }
            max = Math.max(max, count);
            count = 0;
        }
        return max;
    }
}
