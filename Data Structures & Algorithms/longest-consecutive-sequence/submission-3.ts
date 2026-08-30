class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);
        let count = 0;
        let maxLength = 0;

        for (const num of set) {
            if (set.has(num - 1)) continue;
            let currentVal = num;
            while (set.has(currentVal)) {
                count++;
                currentVal++;
            }
            // if (count > maxLength) {
            //     maxLength = count;
            // }
            count > maxLength ? maxLength = count : maxLength;
            count = 0;
        }
        return maxLength;
    }
}
