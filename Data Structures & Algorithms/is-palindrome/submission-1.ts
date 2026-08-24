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

            if(!isAlphanumeric(leftChar)) {
                left++;
                continue;
            }

            if(!isAlphanumeric(rightChar)) {
                right--;
                continue;
            }

            if(leftChar !== rightChar) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}

function isAlphanumeric(s: string): boolean {
        const character = s.charCodeAt(0);
        return (character >= 97 && character <= 122) || (character >= 48 && character <= 57);
    }