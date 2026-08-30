class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);
        let maxLength = 0;
        let count = 0;

        for (const num of set) {
            
            if (set.has(num - 1)) continue;
            let currentValue = num;
            while (set.has(currentValue)) {
                count++;
                currentValue++;
            }

            if (count > maxLength) {
                maxLength = count;
            }
            count = 0;
        }

        return maxLength;


    }
}
