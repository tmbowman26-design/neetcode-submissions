class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groupAnagrams = new Map<string, string[]>();

        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (const char of str) {
                count[char.charCodeAt(0) - 97]++;

            }
            // console.log(str, count.join(","));
            const key = count.join(',');
            if (!groupAnagrams.has(key)) {
                groupAnagrams.set(key, []);
            }
            groupAnagrams.get(key)!.push(str)
        }
        return [...groupAnagrams.values()]
    }
}
