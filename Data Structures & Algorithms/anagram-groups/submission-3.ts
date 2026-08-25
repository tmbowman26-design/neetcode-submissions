class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupAnagrams = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const signature = strs[i].split('').sort().join('');

            if (groupAnagrams.has(signature)) {
                groupAnagrams.get(signature)!.push(strs[i])
            } else {
                groupAnagrams.set(signature, [strs[i]])
            }
        }
        const result = [...groupAnagrams.values()];
        return result;
    }
}
