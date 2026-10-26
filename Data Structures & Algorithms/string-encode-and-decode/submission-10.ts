class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString: string = '';
        for (const str of strs) {
            encodedString += `${str.length}#${str}`;
        }
        return encodedString;
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
            while (str[j] !== '#') {
                j++;
            }
            const start = j + 1;
            const length = Number(str.slice(i, j));
            const word = str.slice(start, start + length);
            result.push(word);
            i = start + length;
        }
        return result;
    }
}
