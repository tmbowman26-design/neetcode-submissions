class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const sortedIntervals: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);
        const result: number[][] = [];
        for (const [start, end] of sortedIntervals) {
            let last = result[result.length - 1];
            if (result.length === 0 || start > last[1]) {
                result.push([start, end]);
            } else {
                last[1] = Math.max(last[1], end)
            }
        }
        return result;
    }
}
