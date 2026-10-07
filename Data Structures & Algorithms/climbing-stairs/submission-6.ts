class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let current = 1;
        let previous = 1;
        for (let i = 2; i <= n; i++) {
            const next = current + previous;
            previous = current;
            current = next;
        }
        return current;
    }
}
