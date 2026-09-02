class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const anagrams = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            anagrams[s.charCodeAt(i) - 97]++;
            anagrams[t.charCodeAt(i) - 97]--;
        }

        return anagrams.every(count => count === 0);
    }
}
