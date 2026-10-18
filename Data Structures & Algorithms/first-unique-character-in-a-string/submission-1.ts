class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s: string): number {
        const split = s.split('');
        const characters = new Map<string, number>();
        for (let i = 0; i < split.length; i++) {
            characters.set(split[i], (characters.get(split[i]) ?? 0) + 1); 
        }
        for (let i = 0; i < split.length; i++) {
            if (characters.get(split[i]) === 1) return i;
        }
        return -1;
    }
}
