class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minSwaps(s: string): number {
        let open = 0;
        let unmatched = 0;
        for (const char of s) {
            if (char === '[') {
                open++;
            } else if (open > 0) {
                open--;
            } else {
                unmatched++;
            }
        }
        return Math.ceil(unmatched / 2);
    }
}
