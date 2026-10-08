class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();
        let left = 0;
        let count = 0;
        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            count = Math.max(count, right - left + 1);
        }
        return count;
    }
}
