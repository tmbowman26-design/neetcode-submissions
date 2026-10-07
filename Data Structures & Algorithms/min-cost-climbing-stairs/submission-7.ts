class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let previous = 0;
        let current = 0;
        for (let i = 2; i <= cost.length; i++) {
            const nextStep = Math.min(current + cost[i - 1], previous + cost[i - 2]);
            previous = current;
            current = nextStep;
        }
        return current;

    }
}
