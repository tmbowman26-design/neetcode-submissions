class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n === 1) return 1;

        let oneStep = 1, twoSteps = 1;
        
        for (let i = 2; i <= n; i++) {
            let current = oneStep + twoSteps;
            oneStep = twoSteps;
            twoSteps = current;
        }
        return twoSteps;
    }
}
