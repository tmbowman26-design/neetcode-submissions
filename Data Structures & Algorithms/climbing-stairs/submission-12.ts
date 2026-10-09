class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let oneStepBack = 1;
        let twoStepsBack = 1;
        for (let i = 2; i <= n; i++) {
            const currentWays = oneStepBack + twoStepsBack;
            twoStepsBack = oneStepBack;
            oneStepBack = currentWays
        }
        return oneStepBack;
    }
}
