class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0, right = numbers.length - 1;
        while (left < right) {
            const currentSum = numbers[left] + numbers[right];
            if (currentSum === target) {
                return [left + 1, right + 1];
            }
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
        return [];
    }
}
