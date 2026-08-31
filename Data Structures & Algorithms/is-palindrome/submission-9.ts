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
                left++; continue;
            }
            if (!isAlphanumeric(rightChar)) {
                right--; continue;
            }
            if (leftChar !== rightChar) return false;

            left++; right--;
        }

        return true;
    }
}

function isAlphanumeric (s: string) {
    const char = s.charCodeAt(0);
    return (char >= 97 && char <= 112) || (char >= 48 && char <= 57);
}
