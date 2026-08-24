class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) return false;

        // create an array of 26 0s, one slot per lowercase letter, a through z.
        // Fill with 0s
        // think of this like a set, but using an array
        const counts = new Array(26).fill(0);

        // loop through every index of one of the strings.
        // I already know they are the same length

        for (let i = 0; i < s.length; i++) {
            // if character in first string is in the array add 1
            counts[s.charCodeAt(i) - 97]++;
            // if character in second string is in the array subtract 1
            counts[t.charCodeAt(i) - 97]--;
        }

        // if the two strings are anagrams, every increment from the first string gets
        // cancelled by the decrement from the second string
        // all 26 slots in the array should be 0

        return counts.every(count => count === 0);


    }
}
