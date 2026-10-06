class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = prices[0];
        let max = 0;
        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - min;
            max = Math.max(max, profit);
            min = Math.min(min, prices[i])
        }
        return max;
    }
}
