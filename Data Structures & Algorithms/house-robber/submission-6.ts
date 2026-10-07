class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 0) return 0;
        let twoHousesBack = 0;
        let oneHouseBack = 0;
        for (const moneyToSteal of nums) {
            const largestAmountToSteal = Math.max(oneHouseBack, twoHousesBack + moneyToSteal);
            twoHousesBack = oneHouseBack;
            oneHouseBack = largestAmountToSteal;
        }
        return oneHouseBack;
    }
}
