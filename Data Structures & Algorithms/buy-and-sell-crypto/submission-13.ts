class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minPrice = prices[0];
        for (let i = 1; i < prices.length; i++) {
            const currentProfit = prices[i] - minPrice;
            minPrice = Math.min(minPrice, prices[i]);
            maxProfit = Math.max(maxProfit, currentProfit);
        }
        return maxProfit;
    }
}
