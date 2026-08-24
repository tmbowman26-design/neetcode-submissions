class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false;
        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();

        for (const char of s) {
            if (sMap.has(char)) {
                const sCharCount = sMap.get(char) + 1;
                sMap.set(char, sCharCount)
            } else {
                sMap.set(char, 1);
            }
        }

        for (const char of t) {
            if (tMap.has(char)) {
                const tCharCount = tMap.get(char) + 1;
                tMap.set(char, tCharCount);
            } else {
                tMap.set(char, 1);
            }
        }

        for (const [key, value] of sMap) {

            if (tMap.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}
