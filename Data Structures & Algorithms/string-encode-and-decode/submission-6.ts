class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr: string = '';
        for (const str of strs) {
            // length + # + string. The length tells decode how many characters to take
            encodedStr += `${str.length}#${str}`;
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
        // Loop through each word in the string
        while (i < str.length) {
            let j: number = i;
            // move j to the # so we know where the number ends
            while (str[j] !== '#') {
                j++;
            }
            // the word starts right after the #
            const startOfWord: number = j + 1;
            // Get the number of characters in thw word
            const length: number = Number(str.slice(i, j));
            // get the word
            const word: string = str.slice(startOfWord, startOfWord + length);
            // put the word into the array
            result.push(word);
            // jump i to the next number, right where this word ends
            i = startOfWord + length;
        }
        return result;
    }
}
