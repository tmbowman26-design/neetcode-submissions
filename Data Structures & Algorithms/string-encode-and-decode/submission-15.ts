class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = '';
        for (const word of strs) {
            encodedStr += `${word.length}#${word}`;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            const start = j + 1;
            const length = Number(str.slice(i, j));
            const end = start + length;
            const word = str.slice(start, end);
            result.push(word);
            i = end;
        }
        return result;
    }
}
