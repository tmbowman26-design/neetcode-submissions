class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minSwaps(s: string): number {
        let openBracket = 0;
        let unmatchedBracket = 0;
        for (const char of s) {
            if (char === '[') {
                openBracket++;
            } else if (openBracket > 0) {
                openBracket--;
            } else {
                unmatchedBracket++;
            }
        }
        return Math.ceil(unmatchedBracket / 2);
    }
}
