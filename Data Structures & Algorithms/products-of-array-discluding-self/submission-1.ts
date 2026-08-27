class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array(nums.length).fill(1);

        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            // console.log('-----Prefix----\n')
            result[i] = prefix;
            // console.log(`Result ${i} (i): ${result[i]}`)
            prefix *= nums[i];
            // console.log(`prefix *= nums[${i}]): ${prefix *= nums[i]}`)
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            // console.log('\n-----Suffix----\n')
            result[i] *= suffix;
            // console.log(`Result ${i} (i): ${result[i]}`)
            suffix *= nums[i];
            // console.log(`suffix *= nums[${i}]): ${suffix *= nums[i]}`)
        }

        return result;
    }
}
