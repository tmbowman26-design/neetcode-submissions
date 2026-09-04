class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            const anchor = strs[i].split('').sort().join('');
            if (anagrams.has(anchor)) {
                anagrams.get(anchor)!.push(strs[i]);
            } else {
                anagrams.set(anchor, [strs[i]])
            }
        }
        return [...anagrams.values()];
    }
}
