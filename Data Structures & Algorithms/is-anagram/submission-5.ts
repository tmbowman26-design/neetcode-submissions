class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const characters = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            characters[s.charCodeAt(i) - 97]++;
            characters[t.charCodeAt(i) - 97]--;
        }
        return characters.every(character => character === 0);
    }
}
