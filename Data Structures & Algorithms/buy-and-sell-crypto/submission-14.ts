class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maximumProfit = 0;
        let minimumPrice = prices[0];
        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - minimumPrice;
            maximumProfit = Math.max(maximumProfit, profit);
            minimumPrice = Math.min(minimumPrice, prices[i]);
        }
        return maximumProfit;
    }
}
