class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const leftChar = s[left].toLowerCase();
            const rightChar = s[right].toLowerCase();

            if (!isAlphanumeric(leftChar)) {
                left++;
                continue;
            }
            if (!isAlphanumeric(rightChar)) {
                right--;
                continue;
            }
            if (leftChar !== rightChar) {
                return false;
            }

            left++; 
            right--;

        }

        return true;
    }
}

const isAlphanumeric = (s: string): boolean => {
    const code = s.charCodeAt(0);

    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);

}
