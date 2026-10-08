class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted: number[] = [...nums].sort((a, b) => a - b);
        const result: number[][] = [];
        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            let left = i + 1;
            let right = sorted.length - 1;
            while (left < right) {
                const tripletSum = sorted[i] + sorted[left] + sorted[right];
                if (tripletSum === 0) {
                    result.push([sorted[i], sorted[left], sorted[right]]);
                    while (left < right && sorted[left] === sorted[left + 1]) {
                        left++;
                    }
                    while (left < right && sorted[right] === sorted[right - 1]) {
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
