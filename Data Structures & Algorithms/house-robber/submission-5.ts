class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 0) return 0;
        let oneHouseBack = 0, twoHousesBack = 0;

        for (const moneyToSteal of nums) {
            const largestMoneyToSteal = Math.max(oneHouseBack, twoHousesBack + moneyToSteal);
            twoHousesBack = oneHouseBack;
            oneHouseBack = largestMoneyToSteal;
        }
        return oneHouseBack;
    }
}
