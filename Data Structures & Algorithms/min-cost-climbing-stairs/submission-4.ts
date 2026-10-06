class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let prev = 0;
        let cur = 0;
        for (let i = 2; i <= cost.length; i++) {
            const next = Math.min(cur + cost[i - 1], prev + cost[i - 2]);
            prev= cur;
            cur = next;
        }
        return cur;
    }
}
