class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let oneStep = 1; // 1st step initially then one step back
        let twoSteps = 1; // ground initially, then two steps back
        for (let i = 2; i <= n; i++) {
            const currentWays = oneStep + twoSteps;
            twoSteps = oneStep;
            oneStep = currentWays;
        }
        return oneStep;
    }
}
