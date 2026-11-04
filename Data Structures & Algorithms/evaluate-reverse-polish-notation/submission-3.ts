class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        // let result = 0;
        for (const token of tokens) {
            switch (token) {
                case '+': {
                    const right = stack.pop();
                    const left = stack.pop();
                    stack.push(left + right)
                    break;
                }
                    
                case '-': {
                    const right = stack.pop();
                    const left = stack.pop();
                    stack.push(left - right);
                    break;
                }
                case '*': {
                    const right = stack.pop();
                    const left = stack.pop();
                    stack.push(left * right);
                    break;
                }

                case '/': {
                    const right = stack.pop();
                    const left = stack.pop();
                    stack.push(Math.trunc(left / right));
                    break;
                }
                default:
                    stack.push(Number(token));
                    break;
            }
        }
        return stack[stack.length - 1];
    }
}
