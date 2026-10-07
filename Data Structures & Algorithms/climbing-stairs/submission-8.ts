class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let twoBack = 1;
        let oneBack = 1;
        for (let i = 2; i <= n; i++) {
            const current = oneBack + twoBack;
            twoBack = oneBack;
            oneBack = current;
        }
        return oneBack;
    }
}
