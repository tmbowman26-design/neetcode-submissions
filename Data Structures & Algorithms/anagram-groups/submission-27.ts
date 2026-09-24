class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        for (const str of strs) {
            const anchor = str.split('').sort().join('');
            if (anagrams.has(anchor)) {
                anagrams.get(anchor)!.push(str);
            } else {
                anagrams.set(anchor, [str]);
            }
        }
        return [...anagrams.values()]
    }
}
