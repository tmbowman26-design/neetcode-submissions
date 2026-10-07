class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums: number[], k: number): number {
        const map = new Map<number, number>();
        map.set(0, 1);
        let count = 0;
        let prefix = 0;
        for (const num of nums) {
            prefix += num;
            const divider = ((prefix % k) + k) % k;
            if (map.has(divider)) {
                count += map.get(divider);
                map.set(divider, map.get(divider) + 1);
            } else {
                map.set(divider, 1);
            }
        }
        return count;
    }
}
