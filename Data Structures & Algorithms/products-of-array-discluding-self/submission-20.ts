class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const products: number[] = new Array(nums.length).fill(1);
        let prefix = 1;
        let suffix = 1;
        for (let i = 0; i < nums.length; i++) {
            products[i] = prefix;
            prefix *= nums[i];
        } 
        for (let i = nums.length - 1; i >= 0; i--) {
            products[i] *= suffix;
            suffix *= nums[i];
        }
        return products;
    }
}
