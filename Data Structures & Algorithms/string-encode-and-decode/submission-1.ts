class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr: string = '';
        for (const str of strs) {
            encodedStr += str.length + '#' + str;
            // encodedStr += `${str.length}#${str}`;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i: number = 0;
        while (i < str.length) {
            let j: number = i;
            while(str[j] !== '#') {
                j++;
            }
            const length: number = Number(str.slice(i, j));
            const word: string = str.slice(j + 1, j + 1 + length)
            result.push(word);
            i = j + 1 + length;
        }
        return result;
    }
}
