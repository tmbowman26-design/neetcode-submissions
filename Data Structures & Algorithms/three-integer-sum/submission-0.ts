class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // check for dupes for the fixed outer element
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while(left < right) {
                const tripletSum = nums[i] + nums[left] + nums[right];
                if (tripletSum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    // dupe check for left pointer
                    while(left < right && nums[left] === nums[left + 1]){
                        left++;
                    }
                    // dupe check for right pointer
                    while(left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (tripletSum < 0) {
                    left++;
                } else {
                    right--;
                }

                
            }

        }
        return result;
    }
}
