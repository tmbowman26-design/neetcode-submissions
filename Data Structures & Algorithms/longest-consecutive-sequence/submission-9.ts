class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const elements = new Set<number>(nums);
        let maxLength = 0;
        let count = 0;
        for (const num of elements) {
            if (elements.has(num - 1)) continue;
            let currentValue = num;
            while (elements.has(currentValue)) {
                count++;
                currentValue++;
            }
            maxLength = Math.max(maxLength, count);
            count = 0;
        }
        return maxLength;
    }
}
