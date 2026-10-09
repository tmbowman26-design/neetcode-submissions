class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const seen = new Set<string>();
        let leftSideOfWindow = 0;
        let longestSubstringCount = 0;
        for (let rightSideOfWindow = 0; rightSideOfWindow < s.length; rightSideOfWindow++) {
            while (seen.has(s[rightSideOfWindow])) {
                seen.delete(s[leftSideOfWindow]);
                leftSideOfWindow++;
            }
            seen.add(s[rightSideOfWindow]);
            longestSubstringCount = Math.max(longestSubstringCount, rightSideOfWindow - leftSideOfWindow + 1);
        }
        return longestSubstringCount;
    }
}
