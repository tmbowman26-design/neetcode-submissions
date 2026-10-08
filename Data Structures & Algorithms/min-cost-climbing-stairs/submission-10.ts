class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let oneStepBack = 0;
        let twoStepsBack = 0;
        for (let i = 2; i <= cost.length; i++) {
            const currentMinimumCost = Math.min(oneStepBack + cost[i - 1], twoStepsBack +cost[i - 2]);
            twoStepsBack = oneStepBack;
            oneStepBack = currentMinimumCost;
        }
        return oneStepBack;

    }
}
