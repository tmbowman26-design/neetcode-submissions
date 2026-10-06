class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let previous = 0;
        let current = 0;
        for (let i = 2; i <= cost.length; i++) {
            const cheapest = Math.min(previous + cost[i - 2], current + cost[i - 1]);
            previous = current;
            current = cheapest;
        }
        return current;
    }
}
