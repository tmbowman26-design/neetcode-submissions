class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let oneHouseBack = 0;
        let twoHousesBack = 0;
        for (const moneyToSteal of nums) {
            const currentHaul = Math.max(oneHouseBack, twoHousesBack + moneyToSteal);
            twoHousesBack = oneHouseBack;
            oneHouseBack = currentHaul;
        }
        return oneHouseBack;
    }
}
