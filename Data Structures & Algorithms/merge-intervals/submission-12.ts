class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const sortedIntervals: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);
        const result: number[][] = [];
        for (const [start, end] of sortedIntervals) {
            let previousInterval = result[result.length - 1];
            if (result.length === 0 || start > previousInterval[1]) {
                result.push([start, end]);
            } else {
                previousInterval[1] = Math.max(previousInterval[1], end);
            }
        }
        return result;
    }
}
