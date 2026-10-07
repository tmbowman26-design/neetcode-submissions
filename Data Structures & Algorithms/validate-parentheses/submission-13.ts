class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs = new Map<string, string>([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]);
        const stack: string[] = [];
        for (const char of s) {
            if (pairs.has(char)) {
                if (stack.length === 0 || pairs.get(char) !== stack[stack.length - 1]) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
