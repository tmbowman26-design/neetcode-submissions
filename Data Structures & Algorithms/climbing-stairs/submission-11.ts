class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let oneStep = 1; 
        let twoSteps = 1;
        for (let i = 2; i <= n; i++) {
            const currentWays = oneStep + twoSteps;
            twoSteps = oneStep;
            oneStep = currentWays;
        }
        return oneStep;
    }
}
