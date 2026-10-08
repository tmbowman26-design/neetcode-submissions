class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minSwaps(s: string): number {
        let openers = 0;
        let unmatched = 0;
        for (const char of s) {
            if (char === '[') {
                openers++;
            } else if (openers > 0) {
                openers--;
            } else {
                unmatched++;
            }
        }
        return Math.ceil(unmatched / 2);
    }
}
