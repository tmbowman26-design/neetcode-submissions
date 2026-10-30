class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];
        let totalScore: number = 0;
        for (const ops of operations) {
            switch (ops) {
                case '+':
                    stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                    break;
                case 'D':
                    stack.push(stack[stack.length - 1] * 2)
                    break;
                case 'C':
                    stack.pop();
                    break;
                default:
                    stack.push(Number(ops));
                    break;
            }
        }
        for (const num of stack) {
            totalScore += num;
        }
        return totalScore;
    }
}
