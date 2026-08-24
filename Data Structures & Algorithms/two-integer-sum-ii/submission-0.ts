class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const currentSum = numbers[left] + numbers[right];
            if (currentSum === target) {
                left++;
                right++;
                return [left, right]
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
}
