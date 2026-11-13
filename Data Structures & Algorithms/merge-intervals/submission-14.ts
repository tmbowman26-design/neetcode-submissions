class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        const sortedIntervals: number[][] = [...intervals].sort((a, b) => a[0] - b[0]);
        const result: number[][] = [];
        for (const [start, end] of sortedIntervals) {
            const lastInterval = result[result.length - 1];
            if (result.length === 0 || start > lastInterval[1]) {
                result.push([start, end]);
            } else {
                lastInterval[1] = Math.max(lastInterval[1], end);
            }
        }
        return result;
    }
}
