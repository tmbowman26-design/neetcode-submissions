class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            let anchor = strs[i].split('').sort().join('');

            if(map.has(anchor)) {
                map.get(anchor)!.push(strs[i]);
            } else {
                map.set(anchor, [strs[i]])
            }
        }
        return [...map.values()]
    }
}
