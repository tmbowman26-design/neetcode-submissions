class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
    
        
        const anagram = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            anagram[s[i].charCodeAt(0) - 97]++;
            anagram[t[i].charCodeAt(0) - 97]--;
        }
        return anagram.every(count => count === 0);
    }
}
