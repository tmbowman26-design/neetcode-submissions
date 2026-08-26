class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupAnagrams = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const anchor = strs[i].split('').sort().join('');
            if (groupAnagrams.has(anchor)) {
                groupAnagrams.get(anchor)!.push(strs[i]);
            } else {
                groupAnagrams.set(anchor, [strs[i]]);
            }
        }
        const result = [...groupAnagrams.values()];
        return result;
    }
}
