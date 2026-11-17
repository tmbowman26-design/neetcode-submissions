class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = new Map<string, string[]>();
        const result: string[][] = [];
        for (const str of strs) {
            const sortedStr = str.split('').sort().join('');
            if (anagrams.has(sortedStr)) {
                anagrams.get(sortedStr)!.push(str);
            } else {
                anagrams.set(sortedStr, [str]);
            }
        }
        result.push(...anagrams.values());
        return result;
    }
}
