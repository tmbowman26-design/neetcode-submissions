class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        if (nums.length === 0) return 0;
        let twoHousesBack = 0;
        let oneHouseBack = 0;
        for (const newMoney of nums) {
            const biggestHaul = Math.max(oneHouseBack, twoHousesBack + newMoney);
            twoHousesBack = oneHouseBack;
            oneHouseBack = biggestHaul;
        }
        return oneHouseBack;

    }
}
