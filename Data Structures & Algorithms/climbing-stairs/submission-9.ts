class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let oneStep = 1;
        let twoSteps = 1;
        for (let i = 2; i <= n; i++) {
            const distinctWays = oneStep + twoSteps;
            twoSteps = oneStep;
            oneStep = distinctWays;
        }
        return oneStep;
    }
}
