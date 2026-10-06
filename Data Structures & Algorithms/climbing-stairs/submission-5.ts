class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let previous = 1;
        let current = 1;
        for (let i = 2; i <= n; i++) {
            const next = previous + current;
            previous = current;
            current = next;
        }
        return current;
    }
}
