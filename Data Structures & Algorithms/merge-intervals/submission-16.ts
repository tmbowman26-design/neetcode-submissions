class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const sortedIntervals: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);
        const result: number[][] = [];
        for (const [start, end] of sortedIntervals) {
            const previousEnd = result[result.length - 1];
            if (result.length === 0 || start > previousEnd[1]) {
                result.push([start, end]);
            } else {
                previousEnd[1] = Math.max(previousEnd[1], end)
            }
        }
        return result;
    }
}
