class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s: string): number {
        const split = s.split('');
        const characters = new Map<string, number>();
        // const result = -1;
        for (const char of split) {
            characters.set(char, (characters.get(char) ?? 0) + 1);
        }
        for (let i = 0; i < split.length; i++) {
            if (characters.get(split[i]) === 1) {
                return i;
            }
        }

        return -1;
    }
}
