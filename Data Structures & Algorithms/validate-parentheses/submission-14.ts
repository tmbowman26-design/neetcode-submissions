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
                if (stack.length === 0 || stack[stack.length - 1] !== pairs.get(char)) {
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
