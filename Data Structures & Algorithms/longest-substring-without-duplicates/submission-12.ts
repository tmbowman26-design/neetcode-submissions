class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Set<string>();
        let substringLength = 0;
        let leftSliding = 0;
        for (let rightSliding = 0; rightSliding < s.length; rightSliding++) {
            while (seen.has(s[rightSliding])) {
                seen.delete(s[leftSliding]);
                leftSliding++;
            }
            seen.add(s[rightSliding]);
            substringLength = Math.max(substringLength, rightSliding - leftSliding + 1);
        }
        return substringLength;
    }
}
