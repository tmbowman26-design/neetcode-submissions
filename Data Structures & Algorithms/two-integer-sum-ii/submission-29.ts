class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;
        while (leftPointer < rightPointer) {
            const currentSum = numbers[leftPointer] + numbers[rightPointer];
            if (currentSum === target) {
                return [leftPointer + 1, rightPointer + 1];
            }
            if (currentSum < target) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
        return [];
    }
}
