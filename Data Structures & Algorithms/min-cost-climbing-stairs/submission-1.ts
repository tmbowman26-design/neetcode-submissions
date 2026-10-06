class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let current = 0;
        let previous = 0;
        for (let i = 2; i <= cost.length; i++) {
            const nextPrice = Math.min(current + cost[i - 1], previous + cost[i - 2]);
            previous = current;
            current = nextPrice;
        }
        return current;
    }
}
