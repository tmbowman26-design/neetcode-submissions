class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (const str of strs) {
            const anchor = str.split('').sort().join('');
            if (map.has(anchor)) {
                map.get(anchor)!.push(str)
            } else {
                map.set(anchor, [str])
            }
        }
        return [...map.values()]
    }
}
