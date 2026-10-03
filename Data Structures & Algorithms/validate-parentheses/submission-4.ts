class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const brackets = new Map<string, string>([
            [']', '['],
            ['}', '{'],
            [')', '(']
        ]);
        const stack: string[] = [];
        for (const char of s) {
            if (brackets.has(char)) {
                if (stack.length === 0 || stack[stack.length - 1] !== brackets.get(char)) {
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
