class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Create a map to hold the frequencies
        const frequency = new Map<number, number>();
        // Loop through the nums array
        for (const num of nums) {
            // increment the number of occurances if present, if not present
            // 0 + 1
            frequency.set(num, (frequency.get(num) ?? 0) + 1);
        }
        // create an array and fill it with arrays
        const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
        // loop through the map & place each number into the bucket macthing its frequency
        for (const [num, count] of frequency) {
            // whatever the count is becomes the array's index/position
            buckets[count].push(num);
        }
        //  walk bucker backward, from the highest frequency to the lowest
        // i needs to be greater than 0 && result.length must be less than K to keep decrementing
        const result: number[] = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            // add numbers from each bucket until result has k numbers
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) break;
            }

        }
        return result;
    }
}
